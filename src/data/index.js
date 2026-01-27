import {
  boy2,
  reliver,
  Bling,
  hooks,
  ochi,
  fizzy,
  weather
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "experience",
    title: "Information",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Skills",
    company_name: "Devlopment",
    details: [
      // "Built a subscriber base of over <span style='color: white;'>500,000 subscribers</span> by creating video content to help programmers.",
      " Java, <span style='color: white;'>JavaScript</span>, TypeScript, HTML5, CSS3, Sass, Tailwind CSS, React, Next.js, Express, Node.js,<span style='color: white;'> Android</span?, React Native, Figma, Framer, MongoDB, MySQL, Firebase, Scikit-learn,<span style='color: white;'> TensorFlow</span>, Git, Linux, Blender, Babel",
      // "Crafted visually appealling programming videos that have garnered over <span style='color: white;'>30,000,000 views</span>.",
      // "Produced high-quality educational and entertaining videos for clients including <span style='color: white;'>Intel, JetBrains, and MicroCenter</span>.",
    ],
  },
  {
    title: "Experience",
    company_name: "PCS Global Pvt. Ltd.",
    // date: "2019 - 2023",
    details: [
      "I served as a developer at <span style='color: white;'>PCS Global Pvt. Ltd.</span>, where I worked as a Software Engineering Trainee from January 2025 to December 2025 in a remote setup. During this period, I contributed to multiple real-world projects, gaining hands-on experience in full-stack web development. My responsibilities included developing scalable and responsive web applications using React.js for the frontend and Node.js with Express.js for backend services. I actively designed and implemented RESTful APIs, integrated MongoDB databases, and ensured smooth data flow between client and server.",
      // "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
      // "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Hackthon",
    company_name: "Winner",
    // date: "2018 - 2019",
    details: [
  "One hackathon was a <span style='color: white;'>3-day full-stack web development</span> challenge where I built a complete web application from scratch. The project combined both front-end and back-end features, and I secured first place for delivering a functional and well-structured solution.",
  "Another hackathon, named <span style='color: white;'>Byte Tourney</span>, focused on creative web design along with development. I used technologies like <span style='color: white;'>Three.js</span> and <span style='color: white;'>GSAP</span> to add interactive 3D elements and animations, which helped me win the Best Web Design award.",
  "In <span style='color: white;'>Protothon 2024</span>, I developed <span style='color: white;'>Sakhi-Alert</span> – a real-time women’s safety app with features like live location sharing, instant alerts to trusted contacts, and community support. The project won 1st place for addressing a real-world problem effectively."
]
,
  },
  {
    title: "member",
    company_name: "ACM",
    // date: "2015 - 2018",
    details: [
      // "Built a <span style='color: white;'>computer science foundation</span> learning theory, computer architecture, and software engineering.",
      // "Worked and interned at <span style='color: white;'>NASA and Norfolk Southern Railway</span> to gain practical experience in the field of data analysis.",
      "I have been a member of the <span style='color: white;'> Association for Computing Machinery (ACM)</span> for two years. During the first year, I served as a creator, and in the second year, I contributed as a developer.",
    ],
  },
];

const project = [
  {
    name: "The Bling Bangles",
    description:
      "Built an elegant static showcase for handcrafted bangles, blending traditional artistry with modern luxury aesthetics..",
    image: Bling,
    link: "https://the-bling-bangles.vercel.app/", // Add the link here
  },
  {
    name: "Fizzzi: 3D Website",
    description:
      "Developed Fizzzi, a 3D interactive website using Three.js, GSAP, Next.js, and TypeScript for immersive experiences.",
    image: fizzy,
    link: "https://fizzy-ivory.vercel.app/", // Add the link here
  },
  {
    name: "Weather App: UI & Sound",
    description:
      "A weather app featuring an impressive user interface and sound functionality for an engaging user experience.",
    image: weather,
    link: "https://new-weather-ashen.vercel.app/", // Add the link here
  },
];


const about = [
  {
    name: "Open Source Computer Science Repo",
    description:
      "I spend most of my time thinking of <span class='text-lime-400'>CREATIVE IDEAS</span> I really wish existed. You'll find me taking long walks, observing how people think and act, and sometimes being brave with whatever I create.",
    image: boy2,
  }
];


export { experiences, project, about };

