export const ROLES = [
  // --- MTS: WEB ---
  {
    id: "mts1-web",
    title: "Member Of Technical Staff — I (MTS), Web Engineering",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Entry Level",
    minQual: ["6+ months of experience in web development (club/internship/personal projects)."],
    prefQual: ["Technological, managerial, and communication skills.", "Small-scale internship or projects at reputed orgs."],
    about: [
      "Contribute to development and maintenance of web applications supporting events, workshops, and internal operations.",
      "Implement new features in event portals, dashboards, and internal tools under guidance from seniors.",
      "Fix bugs and perform basic optimizations to improve system reliability and responsiveness.",
      "Collaborate with cross-functional teams including designers and backend engineers to deliver cohesive solutions.",
      "Learn and apply modern web technologies (React, Next.js) and best practices."
    ],
    benefits: ["Mentorship, resume-building projects"],
    applyUrl: "#apply-mts1-web"
  },
  {
    id: "mts2-web",
    title: "Member Of Technical Staff — II (MTS), Web Engineering",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Intermediate",
    minQual: ["1 year as MTS-1 or equivalent (internship at reputed MNC, strong personal projects)."],
    prefQual: ["Auth flows, caching, accessibility AA-level, performance basics, SSR/ISR.", "Good internship or high package placement."],
    about: [
      "Take ownership of medium complexity features from requirements to deployment.",
      "Implement state management solutions and API integrations.",
      "Design and implement authentication systems, handle form validations, and optimize caching mechanisms.",
      "Ensure accessibility compliance and basic web performance improvements (CWV).",
      "Provide technical guidance and mentorship to MTS-I contributors.",
      "Document technical decisions, maintain best practices, and conduct code reviews."
    ],
    benefits: ["Feature ownership, leadership track"],
    applyUrl: "#apply-mts2-web"
  },
  {
    id: "mts3-web",
    title: "Member Of Technical Staff — III (MTS), Web Engineering",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Advanced",
    minQual: ["1 year as MTS-2 or exceptional domain knowledge."],
    prefQual: ["Design systems, audits, error budgets.", "Good internship or placement at MNC with high package."],
    about: [
      "Architect and lead development of complex multi-page web applications and design systems.",
      "Define and enforce coding standards, accessibility guidelines, and testing practices (unit/e2e).",
      "Set up observability and monitoring for web systems (error budgets, SLIs, rollout strategies).",
      "Collaborate closely with backend engineers to define API contracts and ensure reliability.",
      "Mentor MTS-I and MTS-II contributors, guide project planning, and foster a culture of excellence.",
      "Drive strategic technical decisions to improve performance, security, and maintainability."
    ],
    benefits: ["Technical leadership, roadmap influence"],
    applyUrl: "#apply-mts3-web"
  },

  // --- MTS: AI/ML ---
  {
    id: "mts1-aiml",
    title: "Member Of Technical Staff — I (MTS), AI/ML",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Entry",
    minQual: ["6+ months Python, NumPy/Pandas, ML basics, Git experience."],
    prefQual: ["Small-scale ML internships or projects."],
    about: [
      "Assist in preparing datasets and writing baseline ML models.",
      "Implement basic preprocessing pipelines and evaluation scripts.",
      "Integrate simple ML models into web apps and services under supervision.",
      "Reproduce academic papers/tutorials to solidify internal knowledge base.",
      "Gain experience in experiment tracking and data handling best practices."
    ],
    benefits: ["GPU access, mentorship"],
    applyUrl: "#apply-mts1-aiml"
  },
  {
    id: "mts2-aiml",
    title: "Member Of Technical Staff — II (MTS), AI/ML",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Intermediate",
    minQual: ["1 year as MTS-1 or equivalent (internship at reputed MNC or strong projects)."],
    prefQual: ["PyTorch/TF, experiment tracking (W&B), good internship."],
    about: [
      "Develop and own ML pipelines: data ingestion → model training → evaluation → deployment.",
      "Define experiment metrics and perform ablation studies to optimize models.",
      "Analyze model errors, debug performance issues, and improve accuracy.",
      "Collaborate with product and engineering teams to make ML solutions practically usable.",
      "Document workflows, create reproducible experiments, and contribute to internal playbooks."
    ],
    benefits: ["Experiment budgets, dataset stewardship"],
    applyUrl: "#apply-mts2-aiml"
  },
  {
    id: "mts3-aiml",
    title: "Member Of Technical Staff — III (MTS), AI/ML",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Advanced",
    minQual: ["1 year as MTS-2 or exceptional knowledge."],
    prefQual: ["Serving infra, monitoring drift, tooling.", "Strong internship or high package placement."],
    about: [
      "Architect and lead robust ML pipelines and evaluation frameworks.",
      "Optimize model serving infra for latency and cost efficiency.",
      "Define reproducibility standards and enforce them across teams.",
      "Conduct internal trainings and publish advanced guides and playbooks.",
      "Mentor MTS-I and II contributors, encouraging high engineering and research standards."
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
    minQual: ["6+ months exposure to loops, arrays, maps."],
    prefQual: ["Basic Codeforces/LeetCode participation, small internships."],
    about: [
      "Author easy-medium problems for coding contests.",
      "Write editorials explaining problem solutions in detail.",
      "Assist in generating test cases and validating problem correctness.",
      "Work under guidance to maintain and improve contest platform."
    ],
    benefits: ["Contest credits, mentorship"],
    applyUrl: "#apply-mts1-cp"
  },
  {
    id: "mts2-cp",
    title: "Member Of Technical Staff — II (MTS), Competitive Programming",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Intermediate",
    minQual: ["1 year as MTS-1 or equivalent experience (internship or contest achievements)."],
    prefQual: ["Graphs, DP, number theory expertise."],
    about: [
      "Design balanced contest problem sets targeting various difficulty levels.",
      "Perform anti-cheating checks and balance difficulty curves.",
      "Lead editorial writing and organize upsolving sessions.",
      "Coach and mentor new problem setters and contest participants."
    ],
    benefits: ["Setter-in-charge, event lead"],
    applyUrl: "#apply-mts2-cp"
  },
  {
    id: "mts3-cp",
    title: "Member Of Technical Staff — III (MTS), Competitive Programming",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Advanced",
    minQual: ["1 year as MTS-2 or strong domain expertise."],
    prefQual: ["Multi-track coordination, judging experience.", "Good internship or high package placement."],
    about: [
      "Own flagship contests from problem setting to hosting.",
      "Establish contest quality bars and anti-plagiarism policies.",
      "Mentor CP team members, standardize problem creation workflows.",
      "Collaborate with industry experts and organize advanced workshops."
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
    minQual: ["6+ months of core DSA knowledge, big-O basics."],
    prefQual: ["Tutor/TA experience, small internships."],
    about: [
      "Assist in teaching basic DSA concepts through sessions and handouts.",
      "Review beginner code and provide constructive feedback.",
      "Maintain problem archives and solution repositories.",
      "Support learners during office hours and coding sessions."
    ],
    benefits: ["Teaching credits, mentoring"],
    applyUrl: "#apply-mts1-dsa"
  },
  {
    id: "mts2-dsa",
    title: "Member Of Technical Staff — II (MTS), Data Structures & Algorithms",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Intermediate",
    minQual: ["1 year as MTS-1 or equivalent experience (internship/MNC project)."],
    prefQual: ["Graphs, DP, trees expertise.", "Workshop leadership."],
    about: [
      "Lead in-depth DSA topic blocks with structured curriculum.",
      "Design assignments, proof sketches, and grading rubrics.",
      "Perform live debugging sessions and interactive code reviews.",
      "Adjust difficulty based on learner progress and feedback."
    ],
    benefits: ["Curriculum ownership"],
    applyUrl: "#apply-mts2-dsa"
  },
  {
    id: "mts3-dsa",
    title: "Member Of Technical Staff — III (MTS), Data Structures & Algorithms",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Advanced",
    minQual: ["1 year as MTS-2 or strong domain expertise."],
    prefQual: ["Pedagogy, syllabus design.", "High package or strong internships."],
    about: [
      "Architect full DSA roadmaps covering beginner to advanced levels.",
      "Standardize editorial style, problem difficulty, and solution templates.",
      "Mentor MTS-I/II contributors and guide event-related training sessions.",
      "Collaborate with industry to align learning with real-world applications."
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
    minQual: ["6+ months Linux, networking, Arduino/RPi experience."],
    prefQual: ["PCB basics, simple labs, small internships."],
    about: [
      "Assist in device setup for IoT experiments and demonstrations.",
      "Document labs and maintain inventory of hardware components.",
      "Support safety protocols and lab guidelines.",
      "Guide beginners in hands-on workshops."
    ],
    benefits: ["Hardware access, lab mentoring"],
    applyUrl: "#apply-mts1-iotcyber"
  },
  {
    id: "mts2-iotcyber",
    title: "Member Of Technical Staff — II (MTS), IoT & Cyber",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Intermediate",
    minQual: ["1 year as MTS-1 or equivalent experience (internship at MNC or projects)."],
    prefQual: ["CTF labs, firmware basics."],
    about: [
      "Design and build lab exercises and starter kits for IoT and cybersecurity education.",
      "Develop simple security demonstrations (MITM, sniffing, hardening).",
      "Coach juniors on hardware/software integrations and basic security concepts.",
      "Maintain lab SOPs and documentation."
    ],
    benefits: ["Lab ownership, kit budgets"],
    applyUrl: "#apply-mts2-iotcyber"
  },
  {
    id: "mts3-iotcyber",
    title: "Member Of Technical Staff — III (MTS), IoT & Cyber",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Advanced",
    minQual: ["1 year as MTS-2 or strong embedded/cyber expertise."],
    prefQual: ["Protocol analysis, firmware reversing.", "Strong internship or high package placement."],
    about: [
      "Lead advanced IoT builds, red team and blue team exercises.",
      "Define lab safety, procurement, and security policies.",
      "Mentor MTS-I/II contributors in advanced IoT and cybersecurity topics.",
      "Publish internal technical guides and organize workshops with industry experts."
    ],
    benefits: ["Advanced labs, industry collaborations"],
    applyUrl: "#apply-mts3-iotcyber"
  },

  // --- Social Media ---
  {
    id: "social-media",
    title: "Social Media Specialist",
    locations: ["Onsite/Remote", "Bhimtal"],
    level: "Contributor",
    minQual: ["Copywriting basics, platform familiarity."],
    prefQual: ["Content calendar, analytics, basic design."],
about: [
      "Plan and run content calendars for wecode events, workshops, and product launches.",
      "Write crisp copy optimized for engagement across platforms (Twitter, LinkedIn, Instagram).",
      "Coordinate with designers for asset creation and ensure branding consistency.",
      "Analyze performance metrics to optimize future content strategies."
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
    minQual: ["Figma/Adobe; typography and layout."],
    prefQual: ["Motion design basics, brand system knowledge."],
    about: [
      "Design posters, social media creatives, slide decks, and event branding material.",
      "Ensure visual consistency across dark and light themes.",
      "Create fast turnaround designs based on event schedules and feedback loops.",
      "Collaborate with content and social media teams to produce engaging visual assets."
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
    minQual: ["Reliable, communicative, team player."],
    prefQual: ["Event ops or club experience."],
    about: [
      "Support event registrations and manage venue logistics.",
      "Assist in backstage operations, manage participants and judges.",
      "Ensure smooth flow of workshops, hackathons, and meetups.",
      "Step into responsibilities over time, learn event operations hands-on."
    ],
    benefits: ["Certificates, priority access, networking"],
    applyUrl: "#apply-volunteer"
  },

  // --- Principal MTS ---
  {
    id: "pmts",
    title: "Principal Member Of Technical Staff (PMTS)",
    locations: ["Onsite", "Bhimtal Campus"],
    level: "Principal roles (Requires 2+ years at wecode, and domain expertise).",
    eligibility: ["2+ years of wecode service", "Expert-level impact in a domain."],
    minQual: ["Proven multi-team initiatives", "Track record of mentorship and standards-setting."],
    prefQual: ["External talks/papers, cross-org influence, strong internships or high package placement."],
    about: [
      "Own the technical direction and high-quality standards across wecode’s engineering and product teams.",
      "Lead large-scale cross-domain technical initiatives driving performance, reliability, and impact.",
      "Mentor leads and contributors, fostering a high-excellence engineering culture.",
      "Represent wecode at conferences, workshops, and external collaborations.",
      "Develop strategic visions and ensure knowledge transfer."
    ],
    benefits: ["Strategic influence, legacy projects, recognition"],
    applyUrl: "#apply-pmts"
  }
];