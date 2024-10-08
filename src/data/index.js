import {
  boy2,
  reliver,
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
      "C, C++, Dart, Java, <span style='color: white;'>JavaScript</span>, TypeScript, HTML5, CSS3, Sass, Tailwind CSS, React, Next.js, Express, Node.js,<span style='color: white;'> Android</span?, Flutter, React Native, Figma, Framer, MongoDB, MySQL, Firebase, Scikit-learn,<span style='color: white;'> TensorFlow</span>, Git, Linux, Blender, Babel",
      // "Crafted visually appealling programming videos that have garnered over <span style='color: white;'>30,000,000 views</span>.",
      // "Produced high-quality educational and entertaining videos for clients including <span style='color: white;'>Intel, JetBrains, and MicroCenter</span>.",
    ],
  },
  {
    title: "Experience",
    company_name: "Shipmymeds",
    // date: "2019 - 2023",
    details: [
      "I served as a developer at <span style='color: white;'>ShipMyMeds</span>, a startup company operating under the brand <span style='color: white;'> Reliver P.V.T L.T.D</span>, for a duration of 2 years. During my tenure, I contributed to various development projects and played a key role in advancing the company’s technological initiatives.",
      // "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
      // "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Hackthon",
    company_name: "Winner",
    // date: "2018 - 2019",
    details: [
      "One hackathon involved a <span? style='color: white;'>3-day full-stack web development</span? challenge where participants were required to build a complete web application. I achieved first place with a project that effectively integrated both front-end and back-end technologies.",
      "Another hackathon, named <span style='color: white;'>Byte Tourney</span>, emphasized the combination of unique design with development. For this event, I utilized advanced technologies such as Three.js and GSAP to create a project that featured innovative design and interactive animations.",
      // "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
    ],
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
    name: "Reliver: psychiatrist",
    description:
      "'Reliver' is a startup website designed for psychology master's students. It streamlines internship placements and provides direct access to patients, enhancing their professional experience and fostering valuable connections in the field.",
    image: reliver,
    link: "https://reliver.in", // Add the link here
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

