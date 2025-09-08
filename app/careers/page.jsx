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


    if (!name  || !email || !universityRoll || !year || !resume) {
      alert("Please fill all required fields and upload a PDF resume.");
      return;
    }

    if (resume.type !== "application/pdf") {
      alert("Only PDF files are allowed for resume.");
      return;
    }

    const base = await makeFolderName(name, email);

    const metaFile = new File(
      [JSON.stringify({ name,  email, universityRoll, year, additionalNotes, createdAt: new Date().toISOString() })],
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
      lastName: "",
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
          <aside className="bg-neutral-900 rounded-xl p-3 md:sticky md:top-6 max-h-[70vh] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <ul className="space-y-2">
              {ROLES.map((r, index) => (
                <li key={r.id + "-" + index}>
                  <button
                    onClick={() => {
                      setSel(r);
                      if (typeof window !== "undefined" && window.innerWidth < 768) {
                        setShowDetailsMobile(true);
                      }
                    }}
                    className={`w-full text-left rounded-lg p-3 transition ${
                      sel.id === r.id ? "bg-neutral-800" : "hover:bg-neutral-800/70"
                    }`}
                  >
                    <div className="text-sm text-gray-400">{r.locations.join(", ")}</div>
                    <div className="font-semibold mt-1">{r.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{r.level}</div>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <section className="bg-neutral-900 rounded-2xl p-6 md:p-8">
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
                  {(sel.minQual ?? []).map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-neutral-800 p-5">
                <h3 className="text-lg font-semibold">Perks and Benefits</h3>
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                  {(sel.benefits ?? []).map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-neutral-800 p-5">
                <h3 className="text-lg font-semibold">Preferred Qualifications</h3>
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                  {(sel.prefQual ?? []).map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-neutral-800 p-5">
                <h3 className="text-lg font-semibold">About the Job</h3>
                <div className="mt-3 space-y-2 text-gray-300">
                  {(sel.about ?? []).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

    {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
    <div className="bg-neutral-900 p-8 rounded-2xl max-w-4xl w-full shadow-lg relative">
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        onClick={() => setShowModal(false)}
      >
        ✕
      </button>

      <h2 className="text-3xl font-bold text-white mb-6 text-center">Submit Your Resume</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* File Drop + Additional Notes Side by Side */}
          <div className="flex flex-col space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Resume (PDF)</label>
              <div
                className="border-2 border-dashed border-neutral-700 rounded-lg p-4 text-center cursor-pointer hover:border-purple-500 transition"
                onClick={() => document.getElementById("resume-upload").click()}
              >
                <svg
                  className="mx-auto h-6 w-6 text-gray-400 mb-1"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="text-gray-400 text-sm mb-1">
                  Drag and drop your resume here
                </p>
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
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Link All Your Technical Profiles</label>
            <textarea
              name="additionalNotes"
              placeholder="E.g., GitHub: https://github.com/yourusername,  Portfolio: https://yourportfolio.com"
              className="w-full p-3 rounded bg-neutral-800 text-white"
              rows="6"
              value={formData.additionalNotes}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  </div>
)}

    </div>
  );
}
