export const ROLES = [
  // --- MTS: WEB ---
  {
    id: "mts1-web",
    title: "Member Of Technical Staff - I (MTS), Web Engineering",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Entry Level",
    minQual: [
      "Pursuing Bachelor’s degree or equivalent practical experience.",
      "6+ months of experience in software development (web) in one or more programming languages."
    ],
    benefits: [
      "Mentorship from senior members.",
      "Build projects with senior members, which help in adding advance projects at resume.",
    ],
    prefQual: [
      "Technological, Managerial & Communication skills, since these skills are required in day to day operations at WeCode.",
      "1+ years with data structures/algorithms.",
      "Experience building accessible technologies, and with technical events exposure."
    ],
    about: [
      "Contribute to the design and development of WeCode’s web platforms — from event portals and certificate generators to dashboards and internal tools.",
      "Collaborate with peers across design, backend, and event teams to ship features that directly support hackathons, workshops, and club operations.",
      "Maintain and scale existing web systems, ensuring they are reliable, accessible, and performant for hundreds of students and faculty.",
      "Experiment with modern web technologies, bring fresh ideas, and take ownership of projects that showcase WeCode’s innovation culture."
  ],
    applyUrl: "#apply-mts1-web"
  },
  {
    id: "mts2-web",
    title: "Member Of Technical Staff — II (MTS), Web Engineering",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Intermediate",
    minQual: [
      "1+ years hands-on web projects (club/internship).",
      "React/Next.js, API integration, state mgmt."
    ],
    prefQual: [
      "Auth, forms, caching, accessibility at AA level.",
      "Perf basics (CWV), SSR/ISR, simple CI."
    ],
    about: [
      "Own medium features end-to-end (spec → ship).",
      "Improve reliability and performance; write docs.",
      "Guide MTS-I via PR feedback and pairing."
    ],
    benefits: ["Feature ownership, priority picks, leadership track"],
    applyUrl: "#apply-mts2-web"
  },
  {
    id: "mts3-web",
    title: "Member Of Technical Staff — III (MTS), Web Engineering",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Advanced",
    minQual: [
      "2+ years strong web experience.",
      "Architecture, SSR/ISR nuances, testing (unit/e2e)."
    ],
    prefQual: [
      "Design systems, accessibility audits, perf budgets.",
      "Observability, error budgets, rollout strategies."
    ],
    about: [
      "Lead complex initiatives (multi-page flows, DS components).",
      "Set standards (lint, test, a11y, perf) and mentor the team.",
      "Partner with backend on contracts, reliability, and SLIs."
    ],
    benefits: ["Technical leadership, roadmap influence, impact badges"],
    applyUrl: "#apply-mts3-web"
  },

  // --- MTS: AI/ML ---
  {
    id: "mts1-aiml",
    title: "Member Of Technical Staff — I (MTS), AI/ML",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Entry",
    minQual: ["Python, NumPy/Pandas, ML basics, Git"],
    prefQual: ["scikit-learn, basic notebooks, data cleaning"],
    about: [
      "Assist with datasets, baselines, and evaluation scripts.",
      "Integrate simple models into web/services.",
      "Reproduce papers/tutorials for internal learning."
    ],
    benefits: ["GPU access (shared), mentor office hours"],
    applyUrl: "#apply-mts1-aiml"
  },
  {
    id: "mts2-aiml",
    title: "Member Of Technical Staff — II (MTS), AI/ML",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Intermediate",
    minQual: ["1+ years ML projects; model training & eval"],
    prefQual: ["PyTorch/TF, experiment tracking (Weights & Biases)"],
    about: [
      "Own an applied model: data → train → eval → deploy.",
      "Define metrics, ablations, error analysis.",
      "Collaborate with product to make ML useful."
    ],
    benefits: ["Experiment budget, dataset stewardship"],
    applyUrl: "#apply-mts2-aiml"
  },
  {
    id: "mts3-aiml",
    title: "Member Of Technical Staff — III (MTS), AI/ML",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Advanced",
    minQual: ["2+ years applied ML; shipped models to users"],
    prefQual: ["Serving infra, monitoring drift, prompt/tooling"],
    about: [
      "Design robust pipelines; lead eval frameworks.",
      "Optimize latency/cost; enforce reproducibility.",
      "Mentor MTS-I/II; publish internal guides/playbooks."
    ],
    benefits: ["Model ownership, infra influence"],
    applyUrl: "#apply-mts3-aiml"
  },

  // --- MTS: Competitive Programming ---
  {
    id: "mts1-cp",
    title: "Member Of Technical Staff — I (MTS), Competitive Programming",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Entry",
    minQual: ["Strong fundamentals in loops, arrays, maps"],
    prefQual: ["Basic Codeforces/LeetCode participation"],
    about: [
      "Author easy-medium problems for events.",
      "Write clean editorials and solution checks.",
      "Assist in test generation and validations."
    ],
    benefits: ["Contest author credits, mentorship"],
    applyUrl: "#apply-mts1-cp"
  },
  {
    id: "mts2-cp",
    title: "Member Of Technical Staff — II (MTS), Competitive Programming",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Intermediate",
    minQual: ["Active CP rating or equivalent contest record"],
    prefQual: ["Topic expertise (graphs/DP/number theory)"],
    about: [
      "Design contest sets; anti-cheat and balance checks.",
      "Lead editorials; run upsolving sessions.",
      "Coach juniors; curate topic ladders."
    ],
    benefits: ["Setter-in-charge, event lead opportunities"],
    applyUrl: "#apply-mts2-cp"
  },
  {
    id: "mts3-cp",
    title: "Member Of Technical Staff — III (MTS), Competitive Programming",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Advanced",
    minQual: ["Proven track record in CP/hard problemsetting"],
    prefQual: ["Multi-track coordination and judging experience"],
    about: [
      "Own major contests end-to-end (set → test → host).",
      "Establish quality bars and plagiarism policy.",
      "Mentor setters; build a sustainable pipeline."
    ],
    benefits: ["Flagship contest ownership"],
    applyUrl: "#apply-mts3-cp"
  },

  // --- MTS: Data Structures & Algorithms ---
  {
    id: "mts1-dsa",
    title: "Member Of Technical Staff — I (MTS), Data Structures & Algorithms",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Entry",
    minQual: ["Core DSA knowledge; big-O basics"],
    prefQual: ["Tutor/TA experience preferred"],
    about: [
      "Assist in DSA sessions; prepare handouts and examples.",
      "Review beginner code; run office hours.",
      "Maintain problem archives and solutions."
    ],
    benefits: ["Teaching credits, mentoring"],
    applyUrl: "#apply-mts1-dsa"
  },
  {
    id: "mts2-dsa",
    title: "Member Of Technical Staff — II (MTS), Data Structures & Algorithms",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Intermediate",
    minQual: ["Comfort with graphs, DP, trees; proof sketches"],
    prefQual: ["Workshop leadership experience"],
    about: [
      "Lead topic blocks; design assignments and rubrics.",
      "Run code reviews and live debugging.",
      "Track learner progress; adjust difficulty."
    ],
    benefits: ["Curriculum ownership, session leads"],
    applyUrl: "#apply-mts2-dsa"
  },
  {
    id: "mts3-dsa",
    title: "Member Of Technical Staff — III (MTS), Data Structures & Algorithms",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Advanced",
    minQual: ["Deep algorithmic expertise; pedagogy experience"],
    prefQual: ["Syllabus design across semesters"],
    about: [
      "Architect full DSA roadmaps and assessments.",
      "Standardize code quality and editorial style.",
      "Mentor I/II; build training pipelines for events."
    ],
    benefits: ["Program design authority"],
    applyUrl: "#apply-mts3-dsa"
  },

  // --- MTS: IoT & Cyber ---
  {
    id: "mts1-iotcyber",
    title: "Member Of Technical Staff — I (MTS), IoT & Cyber",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Entry",
    minQual: ["Basic Linux, networking, Arduino/RPi"],
    prefQual: ["Soldering/PCB basics; simple labs"],
    about: [
      "Assist in device setup, demos, and lab safety.",
      "Document labs; maintain equipment inventory.",
      "Support beginner workshops and checklists."
    ],
    benefits: ["Hardware access, lab mentoring"],
    applyUrl: "#apply-mts1-iotcyber"
  },
  {
    id: "mts2-iotcyber",
    title: "Member Of Technical Staff — II (MTS), IoT & Cyber",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Intermediate",
    minQual: ["Hands-on with sensors, MQTT/HTTP, basic security"],
    prefQual: ["CTF/Cyber labs; firmware basics"],
    about: [
      "Build lab exercises and starter kits.",
      "Design simple security demos (MITM, sniffing, hardening).",
      "Coach juniors; maintain lab SOPs."
    ],
    benefits: ["Lab ownership, kit budgets"],
    applyUrl: "#apply-mts2-iotcyber"
  },
  {
    id: "mts3-iotcyber",
    title: "Member Of Technical Staff — III (MTS), IoT & Cyber",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Advanced",
    minQual: ["Strong embedded/cyber projects; safety first"],
    prefQual: ["Protocol analysis, firmware reversing"],
    about: [
      "Lead advanced builds and red/blue team exercises.",
      "Set lab safety, procurement, and security policies.",
      "Mentor I/II; publish internal guides."
    ],
    benefits: ["Advanced labs, industry collab opportunities"],
    applyUrl: "#apply-mts3-iotcyber"
  },

  // --- Social Media ---
  {
    id: "social-media",
    title: "Social Media Specialist",
    locations: ["Onsite/Remote", "Bhimtal"],
    level: "Contributor",
    minQual: ["Copywriting basics, platform familiarity"],
    prefQual: ["Content calendar, analytics, basic design"],
    about: [
      "Run content calendars for events and launches.",
      "Write crisp copy; coordinate with design for assets.",
      "Track metrics and iterate on what performs."
    ],
    benefits: ["Portfolio growth, cross-team exposure"],
    applyUrl: "#apply-social"
  },

  // --- Graphic Designer ---
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    locations: ["Onsite/Remote", "Bhimtal"],
    level: "Contributor",
    minQual: ["Figma/Adobe; typography and layout"],
    prefQual: ["Motion basics; brand system understanding"],
    about: [
      "Design posters, socials, slide kits, and event branding.",
      "Maintain visual consistency across dark/light themes.",
      "Ship fast with feedback loops."
    ],
    benefits: ["Public credit, featured work, merch"],
    applyUrl: "#apply-design"
  },

  // --- Volunteer ---
  {
    id: "volunteer",
    title: "Volunteer (Events & Ops)",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Contributor",
    minQual: ["Reliable, communicative, team player"],
    prefQual: ["Event ops or club experience"],
    about: [
      "Support registrations, venue setup, and backstage ops.",
      "Assist participants and judges; ensure smooth flow.",
      "Learn by doing; step into ownership over time."
    ],
    benefits: ["Certificates, priority access, networking"],
    applyUrl: "#apply-volunteer"
  },

  // --- Principal Member Of Technical Staff ---
  {
    id: "pmts",
    title: "Principal Member Of Technical Staff (PMTS)",
    locations: ["Onsite", "Bhimtal Campus"],
    level: " (Requires 2+ years at WeCode & domain expertise)",
    eligibility: [
      "Minimum 2 years of active WeCode service.",
      "Demonstrated expert-level impact in a domain (Web, AI/ML, CP, DSA, IoT/Cyber)."
    ],
    minQual: ["Proven delivery of multi-team initiatives", "Track record of mentorship and standards-setting"],
    prefQual: ["External talks/papers, cross-org influence"],
    about: [
      "Own club-wide technical direction and quality bars.",
      "Lead multi-domain projects; ensure reliability and performance.",
      "Coach leads, grow contributors, and represent WeCode externally."
    ],
    benefits: ["Strategic influence, legacy projects, recognition"],
    applyUrl: "#apply-pmts"
  }
];