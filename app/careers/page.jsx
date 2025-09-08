"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import { ROLES } from "@/app/data/CareersData";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://tquwbozfykjtxcppjliz.supabase.co";
const SUPABASE_ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxdXdib3pmeWtqdHhjcHBqbGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMzE3ODksImV4cCI6MjA3MjkwNzc4OX0.SlGdW4BTe8d5E5wFprsRnjTQbq2e6V0hjFZaec2AFOU";
const BUCKET = "submissions";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

export default function Careers() {
  const [sel, setSel] = useState(ROLES[0]);
  const [showDetailsMobile, setShowDetailsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    universityRoll: "",
    year: "",
    resume: null,
    additionalNotes: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const slug = (s) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40);

  const rand6 = () => Math.random().toString(36).slice(2, 8);

  async function hash8(s) {
    const buf = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(s)
    );
    return [...new Uint8Array(buf)]
      .slice(0, 4)
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("");
  }

  async function makeFolderName(name, email) {
    return `${slug(name)}-${await hash8(email)}-${rand6()}`;
  }

  async function upload(path, fileOrBlob, contentType) {
    const { data, error } = await supabase.storage
      .from(BUCKET)
      .upload(path, fileOrBlob, { contentType, upsert: false, cacheControl: "no-cache" });
    if (error) console.error("UPLOAD ERR:", path, error.message || error);
    return { data, error };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, universityRoll, year, resume, additionalNotes } = formData;

    if (!name || !email || !universityRoll || !year || !resume) {
      alert("Please fill all required fields and upload a PDF resume.");
      return;
    }

    if (resume.type !== "application/pdf") {
      alert("Only PDF files are allowed for resume.");
      return;
    }

    const base = await makeFolderName(name, email);

    const metaFile = new File(
      [JSON.stringify({ name, email, universityRoll, year, additionalNotes, createdAt: new Date().toISOString() })],
      "metadata.json",
      { type: "application/json" }
    );

    let r = await upload(`${base}/metadata.json`, metaFile, "application/json");
    if (r.error) {
      alert(r.error.message || "Metadata upload failed");
      return;
    }

    r = await upload(`${base}/resume.pdf`, resume, "application/pdf");
    if (r.error) {
      alert(r.error.message || "Resume upload failed");
      return;
    }

    setStatusMessage(`Application submitted successfully! Reference ID: ${base}`);
    setFormData({
      name: "",
      email: "",
      universityRoll: "",
      year: "",
      resume: null,
      additionalNotes: "",
    });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-black text-white mt-16">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10">
        <h1 className="text-4xl md:text-5xl font-bold">Careers at WeCode</h1>
        <p className="text-gray-400 mt-3 max-w-2xl">
          Join us to innovate, mentor, and build future-ready solutions.
        </p>

        {statusMessage && (
          <div className="bg-green-600 p-4 rounded mt-4">{statusMessage}</div>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
          {/* Sidebar with Jobs */}
          <aside className="bg-neutral-900 rounded-xl p-3 md:sticky md:top-6 max-h-[70vh] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <ul className="space-y-2">
              {ROLES.map((r, index) => {
                const isSelected = sel.id === r.id;
                return (
                  <li key={r.id + "-" + index}>
                    <button
                      onClick={() => {
                        setSel(r);
                        if (typeof window !== "undefined" && window.innerWidth < 768) {
                          setShowDetailsMobile((prev) => (sel.id === r.id ? !prev : true));
                        }
                      }}
                      className={`w-full text-left rounded-lg p-3 transition ${
                        isSelected ? "bg-neutral-800" : "hover:bg-neutral-800/70"
                      }`}
                    >
                      <div className="text-sm text-gray-400">{r.locations.join(", ")}</div>
                      <div className="font-semibold mt-1">{r.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{r.level}</div>
                    </button>

                    {/* Mobile Job Details */}
                    {isSelected && showDetailsMobile && (
                      <section className="mt-3 bg-neutral-900 rounded-2xl p-4 md:hidden">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-gray-400">{r.locations.join(" • ")}</div>
                            <h2 className="text-2xl font-bold mt-1">{r.title}</h2>
                            <div className="text-sm text-gray-500 mt-1">{r.level}</div>
                          </div>

                          <button
                            onClick={() => setShowModal(true)}
                            className="shrink-0 rounded-lg bg-purple-500 px-4 py-2 font-medium hover:bg-purple-400"
                          >
                            Apply
                          </button>
                        </div>

                        <div className="mt-4 space-y-4">
                          <div>
                            <h3 className="font-semibold">Minimum Qualifications</h3>
                            <ul className="list-disc list-inside text-gray-300 mt-1">
                              {r.minQual?.map((q, i) => <li key={i}>{q}</li>)}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold">Perks and Benefits</h3>
                            <ul className="list-disc list-inside text-gray-300 mt-1">
                              {r.benefits?.map((b, i) => <li key={i}>{b}</li>)}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold">Preferred Qualifications</h3>
                            <ul className="list-disc list-inside text-gray-300 mt-1">
                              {r.prefQual?.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold">About the Job</h3>
                            <div className="text-gray-300 mt-1 space-y-1">
                              {r.about?.map((p, i) => <p key={i}>{p}</p>)}
                            </div>
                          </div>
                        </div>
                      </section>
                    )}
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Desktop Job Details */}
          <section className="hidden md:block bg-neutral-900 rounded-2xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-gray-400">{sel.locations.join(" • ")}</div>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">{sel.title}</h2>
                <div className="text-sm text-gray-500 mt-1">{sel.level}</div>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="shrink-0 rounded-lg bg-purple-500 px-4 py-2 font-medium hover:bg-purple-400"
              >
                Apply
              </button>
            </div>

            <div className="mt-6 grid gap-6">
              <div className="rounded-xl bg-neutral-800 p-5">
                <h3 className="text-lg font-semibold">Minimum Qualifications</h3>
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                  {(sel.minQual ?? []).map((q, i) => <li key={i}>{q}</li>)}
                </ul>
              </div>

              <div className="rounded-xl bg-neutral-800 p-5">
                <h3 className="text-lg font-semibold">Perks and Benefits</h3>
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                  {(sel.benefits ?? []).map((q, i) => <li key={i}>{q}</li>)}
                </ul>
              </div>

              <div className="rounded-xl bg-neutral-800 p-5">
                <h3 className="text-lg font-semibold">Preferred Qualifications</h3>
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                  {(sel.prefQual ?? []).map((q, i) => <li key={i}>{q}</li>)}
                </ul>
              </div>

              <div className="rounded-xl bg-neutral-800 p-5">
                <h3 className="text-lg font-semibold">About the Job</h3>
                <div className="mt-3 space-y-2 text-gray-300">
                  {(sel.about ?? []).map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Modal */}
      {/* Modal */}
{showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 md:p-0 overflow-auto">
    <div className="bg-neutral-900 p-6 md:p-8 rounded-2xl max-w-4xl w-full shadow-lg flex flex-col max-h-[95vh]">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        onClick={() => setShowModal(false)}
      >
        ✕
      </button>

      {/* Modal Title */}
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Submit Your Resume
      </h2>

      {/* Form Wrapper */}
      <div className="overflow-auto">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full p-3 rounded bg-neutral-800 text-white"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="w-full p-3 rounded bg-neutral-800 text-white"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* University Roll */}
            <div>
              <label className="block text-gray-300 mb-1">University Roll No.</label>
              <input
                type="text"
                name="universityRoll"
                placeholder="123456789"
                className="w-full p-3 rounded bg-neutral-800 text-white"
                value={formData.universityRoll}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Year */}
            <div>
              <label className="block text-gray-300 mb-1">Year</label>
              <select
                name="year"
                className="w-full p-3 rounded bg-neutral-800 text-white"
                value={formData.year}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </div>

            {/* Resume Upload */}
            <div className="flex flex-col space-y-4">
              <label className="block text-gray-300 mb-1">Resume (PDF)</label>
              <div
                className="border-2 border-dashed border-neutral-700 rounded-lg p-4 text-center cursor-pointer hover:border-purple-500 transition"
                onClick={() => document.getElementById("resume-upload").click()}
              >
                <p className="text-gray-400 text-sm mb-1">Drag and drop your resume here</p>
                <p className="text-gray-500 text-xs mb-1">or</p>
                <button
                  type="button"
                  className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition text-sm"
                  onClick={() => document.getElementById("resume-upload").click()}
                >
                  Browse Files
                </button>
                {formData.resume && (
                  <p className="mt-2 text-green-400 text-xs">
                    Selected file: {formData.resume.name}
                  </p>
                )}
                <input
                  id="resume-upload"
                  type="file"
                  name="resume"
                  accept="application/pdf"
                  className="hidden"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-gray-300 mb-1">
                Link All Your Technical Profiles
              </label>
              <textarea
                name="additionalNotes"
                placeholder="E.g., GitHub: https://github.com/yourusername, Portfolio: https://yourportfolio.com"
                className="w-full p-3 rounded bg-neutral-800 text-white"
                rows="6"
                value={formData.additionalNotes}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
