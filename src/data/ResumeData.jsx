import { MailFilled, LinkedinFilled, GithubOutlined } from "@ant-design/icons"

export const headerData = {
  fullname: {
    label: "Full Name",
    className: "text-3xl font-semibold tracking-wide uppercase",
    value: "Bittu Kumar"
  },
  contacts: {
    label: "Contacts",
    className: "font-medium",
    value: "+91-7563872977"
  },
  links: {
    label: "Links",
    className: "flex gap-4 text-sm",
    items: [
      {
        key: "mail",
        icon: MailFilled,
        label: "Email",
        className: "flex gap-1.5 items-center",
        example: "resume@mail.com",
        value: "bk183040@gmail.com"
      },
      {
        key: "linkedin",
        icon: LinkedinFilled,
        label: "LinkedIn",
        className: "flex gap-1.5 items-center",
        value: "bittukumar183040",
        example: "https://www.linkedin.com/in/<username>",
        url: "https://www.linkedin.com/in/bittukumar183040/"
      },
      {
        key: "github",
        icon: GithubOutlined,
        label: "GitHub",
        className: "flex gap-1.5 items-center",
        value: "BittuKumar183040",
        example: "https://github.com/<username>",
        url: "https://github.com/BittuKumar183040"
      }
    ]
  }
}

export const experiencesData = [
  {
    designation: { label: "Designation", className: "tracking-wide text-sm font-semibold", value: "Full Stack Software Engineer" },
    company: { label: "Company", className: "text-xs font-medium", value: "BosonQ Psi Technology Pvt. Ltd." },
    duration: { label: "Duration", className: "italic text-sm", value: { start: "Jan 2023", end: "Present" } },
    mode: { label: "Mode", className: "italic text-xs", value: "Remote and Hybrid" },
    location: { label: "Location", className: "italic text-xs", value: "Bangalore, Karnataka, India" },
    description: {
      label: "Description", className: "list-disc pl-5 space-y-px text-sm ml-2",
      value: [
        {
          label: "Platform Architecture & Visualization",
          className: "",
          sublabel: {
            label: "Tech Stack",
            className: "",
            value: ["React", "WebGL", "Three.js", "Spring Boot", "FastAPI", "AWS S3", "PVC"]
          },
          value: [
            <li key={1}>
              Architected and delivered a <span className="font-semibold">full-stack microservices simulation platform</span> serving 1,000+ active users and processing 200–500 REST API requests per day.
            </li>,
            <li key={2}>
              Engineered a <span className="font-semibold">real-time 2D and 3D visualization engine</span> using WebGL and Three.js, reducing client-side render latency by 35% through bounding-box fitting and camera auto-framing optimizations.
            </li>,
          ]
        },
        {
          label: "Backend Development & Security",
          className: "",
          sublabel: {
            label: "Tech Stack",
            className: "",
            value: ["Java", "Spring Boot", "FastAPI", "JWT", "RBAC", "bcrypt", "Keycloak"]
          },
          value: [
            <li key={3}>
              Implemented <span className="font-semibold">JWT-based authentication and role-based access control (RBAC)</span> with bcrypt password hashing, securing multi-tenant user data across all microservices.
            </li>,
            <li key={4}>
              Developed scalable <span className="font-semibold">REST APIs</span> for distributed microservices using FastAPI and Spring Boot.
            </li>,
          ]
        },
        {
          label: "Frontend & Application Development",
          className: "",
          sublabel: {
            label: "Tech Stack",
            className: "",
            value: ["React", "SPA Architecture", "TypeScript", "REST Integration"]
          },
          value: [
            <li key={5}>
              Built a <span className="font-semibold">responsive single-page application (SPA)</span> for a cloud-native microservices platform with scalable UI architecture.
            </li>,
          ]
        },
        {
          label: "Database Optimization",
          className: "",
          sublabel: {
            label: "Tech Stack",
            className: "",
            value: ["PostgreSQL", "Hibernate", "ORM", "Indexing"]
          },
          value: [
            <li key={6}>
              Optimized <span className="font-semibold">PostgreSQL database schemas and ORM-based migrations</span>, improving query performance by 40% through indexing strategies and efficient data-access patterns.
            </li>,
          ]
        },
        {
          label: "DevOps & Deployment",
          className: "",
          sublabel: {
            label: "Tech Stack",
            className: "",
            value: ["Docker", "Podman", "AWS", "Kubernetes", "CI/CD", "GitOps"]
          },
          value: [
            <li key={7}>
              Containerized and deployed cloud-native microservices using <span className="font-semibold">Docker and Podman on AWS</span>, with exposure to Kubernetes orchestration and GitOps-based CI/CD pipelines.
            </li>,
          ]
        },
        {
          label: "Code Quality & Design",
          className: "",
          sublabel: {
            label: "Concepts",
            className: "",
            value: ["OOP", "SOLID Principles", "Code Reviews", "Modular Architecture"]
          },
          value: [
            <li key={8}>
              Maintained high code quality through modular architecture by applying OOP and SOLID principles along with structured code review practices.
            </li>,
          ]
        }
      ]
    }
  }
]

export const projectsData = [
  {
    title: { label: "Title", className: "font-semibold", value: "3D Model Visualization" },
    technology: { label: "Technology", className: "text-xs italic", value: ["React", "WebGL", "Three.js", "JavaScript", "File Processing", "Performance Optimization"] },
    live: { label: "Live URL", className: "font-medium", value: "https://3drr.betoo.co.in" },
    github: { label: "GitHub", className: "font-medium", value: "https://github.com/BittuKumar183040/3DRenderer" },
    date: { label: "Date", className: "text-xs italic", value: "March 2025" },
    description: {
      label: "Description", className: "list-disc pl-5 space-y-px ml-2 text-sm",
      value: [
        <li key={1}>Designed and developed a <span className="font-semibold">browser-based 2D and 3D model visualization tool</span> using React, WebGL, and Three.js, supporting multiple mesh file formats.</li>,
        <li key={2}>Implemented advanced <span className="font-semibold">scene controls</span> including orbit controls, axis helpers, mesh isolation, and dynamic lighting for interactive model inspection.</li>,
      ]
    }
  },
  {
    title: { label: "Title", className: "font-semibold", value: "Windows" },
    technology: { label: "Technology", className: "text-xs italic", value: ["React", "Redux", "Express.js", "Spring Boot", "Microservices", "JWT Authentication", "PostgreSQL"] },
    live: { label: "Live URL", className: "font-medium", value: "https://betoo.co.in" },
    github: { label: "GitHub", className: "font-medium", value: "https://github.com/BittuKumar183040?tab=repositories&q=windoes" },
    date: { label: "Date", className: "text-xs italic", value: "November 2025" },
    description: {
      label: "Description",
      className: "list-disc pl-5 space-y-px ml-2 text-sm",
      value: [
        <li key={1}>Built a <span className="font-semibold">pixel-perfect Windows 11 style web application</span> with a highly interactive UI and native-like window management behavior using React and Redux Toolkit.</li>,
        <li key={2}>Designed a <span className="font-semibold">distributed microservices architecture</span> comprising an Authentication service, Identity service, API Gateway, and domain-specific backend services.</li>,
        <li key={3}>Implemented <span className="font-semibold">centralized JWT validation at the API Gateway</span> to enforce consistent authorization and eliminate redundant token verification across services.</li>,
        <li key={4}>Integrated <span className="font-semibold">Persistent Volume Claim (PVC)</span> object storage for scalable and portable file storage migration.</li>,
        <li key={5}>Delivered comprehensive <span className="font-semibold">REST API documentation</span> using OpenAPI specification and Swagger UI.</li>,
        <li key={6}>Improved client-side performance through <span className="font-semibold">browser memory management and Redux state optimizations</span>.</li>
      ]
    }
  }
]

export const skillsData = [
  {
    category: { label: "Category", className: "font-semibold text-sm", value: "Programming Languages" },
    items: {
      label: "Items",
      className: "text-sm",
      value: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML", "CSS"]
    }
  },
  {
    category: { label: "Category", className: "font-semibold text-sm", value: "Frameworks and Libraries" },
    items: {
      label: "Items",
      className: "text-sm",
      value: ["React", "Redux", "Node.js", "Express.js", "FastAPI", "Spring Boot", "Three.js", "WebGL", "Tailwind CSS"]
    }
  },
  {
    category: { label: "Category", className: "font-semibold text-sm", value: "Databases" },
    items: {
      label: "Items",
      className: "text-sm",
      value: ["PostgreSQL", "SQL", "ORM", "Database Schema Design", "Query Optimization"]
    }
  },
  {
    category: { label: "Category", className: "font-semibold text-sm", value: "Cloud and DevOps" },
    items: {
      label: "Items",
      className: "text-sm",
      value: ["AWS", "AWS S3", "Docker", "Podman", "Kubernetes", "CI/CD", "GitOps", "SonarQube", "Penetration Testing"]
    }
  },
  {
    category: { label: "Category", className: "font-semibold text-sm", value: "Developer Tools" },
    items: {
      label: "Items",
      className: "text-sm",
      value: ["Git", "GitHub", "Azure Repos", "VS Code", "IntelliJ IDEA", "PyCharm", "Bruno", "Swagger UI", "OpenAPI"]
    }
  },
  {
    category: { label: "Category", className: "font-semibold text-sm", value: "Architecture and Methodologies" },
    items: {
      label: "Items",
      className: "text-sm",
      value: ["Microservices", "Distributed Systems", "REST APIs", "API Gateway", "JWT", "RBAC"]
    }
  }
]

export const educationData = [
  {
    degree: { label: "Degree", className: "text-sm font-medium", value: "Master of Computer Applications (MCA)" },
    location: { label: "Location", className: "italic text-sm", value: "Bhopal, Madhya Pradesh, India" },
    college: { label: "College", className: "font-medium text-xs", value: "Lakshmi Narain College of Technology (LNCT)" },
    duration: { label: "Duration", className: "italic text-xs", value: "2021 - 2023" }
  }
]

export const certificationsData = [
  {
    title: { label: "Title", className: "font-medium", value: "Full Stack Development Certification" },
    year: { label: "Year", className: "italic", value: "" },
    issuer: { label: "Issuer", className: "", value: "Mentorkart" }
  }
]
