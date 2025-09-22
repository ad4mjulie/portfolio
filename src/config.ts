export const siteConfig = {
  name: "Adam/ Noah",
  title: "Web developer and a networking engineer in progress",
  description: "Portfolio shocasing adam's projects",
  accentColor: "#1d4ed8",
  social: {
    email: "ad4msjullie@gmail.com",
    linkedin: "https://www.linkedin.com/in/noah-adam-benrabah-ab0325383/",

    github: "https://github.com/ad4mjulie",
  },
  aboutMe: `I'm a self-taught web developer and aspiring networking specialist, based in Algeria. 
  I design and develop responsive websites that combine clean design with smooth functionality, 
  always focusing on creating engaging and user-friendly experiences.
  
  My journey into tech began with curiosity and quickly grew into a passion for building. 
  Over the past year, I've worked on diverse projects—from interactive web applications 
  to custom digital tools—while also deepening my knowledge of computer networking.
  
  I'm committed to continuous learning, exploring modern frameworks, 
  and pushing myself to deliver work that reflects both creativity and technical precision.`,
  skills: ["Javascript", "React", "Node.js", "Python", "Typescript", "GLSL"],
  projects: [
  
    {
      name: "Black Hole Simulator",
      description:
        "In this simulation, the light ray paths are computed by integrating an ODE describing the Schwarzschild geodesics using GLSL on the GPU",
      link: "https://ad4mjulie.github.io/black-hole/",
      skills: ["React", "GLSL", "JavaScript"],
    },
    {
      name: "Spinning galaxy visual",
      description:
        "A 3D interactive galaxy built with Three.js, blending colorful stars, drifting camera effects, and poetic visuals",
      link: "https://ad4mjulie.github.io/galaxy-ar0718/",
      skills: ["React", "Three.js", "JavaScript"],
    },
    {
      name: "Cisco Packet Tracer Labs",
      description:
        "The labs showcase practical configurations, troubleshooting, and network design skills.",
      link: "https://github.com/ad4mjulie/cisco-packet-tracer-labs",
      skills: ["Subnetting & Addressing, Network Protocols"],
    },
  ],
  experience: [
    {
      company: "Independent Projects",
      title: "Web Developer",
      dateRange: "2022 – Present",
      bullets: [
        "Designed and developed interactive web experiences using React, Three.js, and GLSL",
        "Built and deployed personal projects like Galaxy AR0718 (3D galaxy simulation) and Tarot Cards Picker",
        "Focused on creating responsive, user-friendly interfaces with smooth functionality",
      ],
    },
    {
      company: "Self-Learning & Practice",
      title: "Networking Enthusiast",
      dateRange: "2023 – Present",
      bullets: [
        "Studying computer networking fundamentals with a focus on CCNA-level knowledge",
        "Built small-scale lab environments and simulations using Cisco Packet Tracer",
        "Developing a strong foundation in subnetting, routing, and network troubleshooting",
      ],
    },
  ],
  
  education: [
    {
      school: "INFSP (Institut National de Formation en Systèmes et Réseaux), Algeria",
      degree: "Specialized in Networking Administration & Security",
      dateRange: "2023 – Present",
      achievements: [
        "Focused on routing, switching, and secure network configuration",
        "Developing skills in managing and securing enterprise-level infrastructures",
        "Preparing for certifications such as Cisco CCNA",
      ],
    },
    {
      school: "Self-Taught",
      degree: "Web Development & Creative Coding",
      dateRange: "2022 – Present",
      achievements: [
        "Mastered modern web technologies including React, Node.js, and Three.js",
        "Built and deployed personal projects like Galaxy AR0718 and Tarot Cards Picker",
        "Blending networking knowledge with software development for full-stack solutions",
      ],
    },
  ],
  };
  