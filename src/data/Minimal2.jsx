import { MailFilled, LinkedinFilled } from "@ant-design/icons"

export const headerData = {
  fullname: {
    label: "Full Name",
    className: "text-3xl font-semibold tracking-wide uppercase",
    value: "Ishika Aggarwal"
  },
  contacts: {
    label: "Contacts",
    className: "font-medium",
    value: "+91 9910150257"
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
        value: "ishikaagg1325@gmail.com"
      },
      {
        key: "linkedin",
        icon: LinkedinFilled,
        label: "LinkedIn",
        className: "flex gap-1.5 items-center",
        value: "LinkedIn Profile",
        url: "https://www.linkedin.com/in/"
      }
    ]
  }
}

export const educationData = [
  {
    degree: {
      label: "Degree",
      className: "text-sm font-medium",
      value: "B.Tech in Computer Science | CGPA: 9.5 | Dept. Rank: 5/60"
    },
    location: {
      label: "Location",
      className: "italic text-sm",
      value: "Delhi, India"
    },
    college: {
      label: "College",
      className: "font-medium text-xs",
      value: "DR Akhilesh Das Gupta Institute of Technology and Management"
    },
    duration: {
      label: "Duration",
      className: "italic text-xs",
      value: "Aug 2020 - Jun 2025"
    }
  }
]

export const experiencesData = [
  {
    designation: {
      label: "Designation",
      className: "tracking-wide text-sm font-semibold",
      value: "Full Stack Developer"
    },
    company: {
      label: "Company",
      className: "text-xs font-medium",
      value: "BosonQPsi"
    },
    duration: {
      label: "Duration",
      className: "italic text-sm",
      value: { start: "April 2024", end: "Present" }
    },
    location: {
      label: "Location",
      className: "italic text-xs",
      value: "Bangalore, India"
    },
    description: {
      label: "Description",
      className: "list-disc pl-5 space-y-px text-sm ml-2",
      value: [
        {
          label: "Microservices Development",
          className: "",
          sublabel: {
            label: "Teckstack",
            className: "",
            value: ["Java", "Spring Boot", "FastAPI", "Keycloak", "AWS"]
          },
          value: [
            <li key={1}>Developed and deployed microservices using Java (Spring Boot) and Python (FastAPI), including secure authentication via an APIGateway and integration with AWS file storage.</li>,
            <li key={2}>Maintained 80+ APIs across services like Project, Access Control, Tenant, License, and Identity Management using Keycloak and PostgreSQL.</li>,
          ]
        },
        {
          label: "System Optimization",
          className: "",
          value: [
            <li key={3}>Improved system performance by optimizing database queries, adding validation checks, implementing caching,and setting file size limits to reduce unnecessary API calls.</li>,
            <li key={4}>Wrote clean, maintainable, and efficient code that follows industry best practices for long-term scalability and support.</li>,
            <li key={5}> Implemented a Kafka-based queuing mechanism to decouple services and reduce redundant database hits, and integrated WebSockets for real-time status updates across microservices. Rewrote the scheduler logic using the Chain of Responsibility design pattern, enhancing flexibility and maintainability. Also explored and applied other design patterns to improve scalability and system architecture.</li>,
          ]
        },
        {
          label: "Architectural Transition",
          className: "",
          value: [
            <li key={6}> Transitioned the system from a monolithic architecture to a microservices-based architecture, improving scalability, maintainability, and debugging efficiency.</li>,
          ]
        },
        {
          label: "UI Integrationt",
          className: "",
          sublabel: {
            label: "Teckstack",
            className: "",
            value: ["TypeScript"]
          },
          value: [
            <li key={7}>Developed responsive UI screens using TypeScript, seamlessly integrating APIs from multiple microservices.</li>,
            <li key={8}>Implemented robust error handling for clear, user-friendly messages across backend and UI layers.</li>,
          ]
        },
        {
          label: "Containerization and Deployment",
          className: "",
          value: [
            <li key={9}> Containerized microservices using Docker (Dockerfile, docker-compose), deployed on AWS ECR using Helm charts and Kubernetes deployment.yaml.</li>,
            <li key={10}> Automated deployment pipelines for efficient microservices management and scalability. </li>,
          ]
        },
        {
          label: "Unit Testing and Quality Assurance",
          className: "",
          value: [
            <li key={11}>Developed unit test cases using JUnit, Mockito, and H2 Hibernate for Java-based microservices to validate functionality.</li>,
            <li key={12}>Conducted extensive testing using Pytest for Python-based microservices to ensure reliability and robustness.</li>,
          ]
        },
        {
          label: "MATLAB Toolbox and App Development",
          className: "",
          value: [
            <li key={13}>Built a custom MATLAB Toolbox integrating backend features for seamless workflow access.</li>,
            <li key={14}>Developed an intuitive MATLAB App enabling no-code interaction with backend functionalities.</li>,
            <li key={15}>Packaged as a plugin for one-click installation, boosting adoption and securing key funding.</li>,
          ]
        },
        {
          label: "Open API and Documentation",
          className: "",
          value: [
            <li key={16}> Implemented OpenAPI Specification for API versioning and YAML-based documentation using Swagger and Redoc.</li>,
            <li key={17}>Enabled multi-language client generation and seamless integration via Jupyter Notebook, allowing users to consume APIs without relying on a UI.</li>,
          ]
        }]
    }
  },
  {
    designation: {
      label: "Designation",
      className: "tracking-wide text-sm font-semibold",
      value: "Software Development Intern"
    },
    company: {
      label: "Company",
      className: "text-xs font-medium",
      value: "Grupverse"
    },
    duration: {
      label: "Duration",
      className: "italic text-sm",
      value: { start: "March 2022", end: "May 2022" }
    },
    location: {
      label: "Location",
      className: "italic text-xs",
      value: "IIT Bhubaneswar, India"
    },
    description: {
      label: "Description",
      className: "list-disc pl-5 space-y-px text-sm ml-2",
      value: [
        <li key={1}>Optimized and modularized dashboard tests to improve efficiency.</li>,
        <li key={2}>Developed a responsive and user-friendly website.</li>,
        <li key={3}>Collaborated with senior developers to maintain clean and scalable code.</li>
      ]
    }
  }
]

export const projectsData = [
  {
    title: {
      label: "Title",
      className: "font-semibold",
      value: "Hotel Booking Management"
    },
    technology: {
      label: "Technology",
      className: "text-xs italic",
      value: ["Java", "Spring Boot", "MySQL", "ReactJS", "AWS (S3)"]
    },
    live: {
      label: "Live URL",
      className: "font-medium",
      value: ""
    },
    github: {
      label: "GitHub",
      className: "font-medium",
      value: ""
    },
    date: {
      label: "Date",
      className: "text-xs italic",
      value: ""
    },
    description: {
      label: "Description",
      className: "list-disc pl-5 space-y-px ml-2 text-sm",
      value: [
        <li key={1}>Developed a hotel booking system with search, booking, and admin features.</li>,
        <li key={2}>Integrated secure payment gateway and deployed using AWS S3.</li>
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
      value: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "MATLAB", "OpenAPI", "Jupyter"]
    }
  },
  {
    category: { label: "Category", className: "font-semibold text-sm", value: "Frameworks and Libraries" },
    items: {
      label: "Items",
      className: "text-sm",
      value: ["Django", "FastAPI", "Spring Boot", "ReactJS", "JUnit", "Mockito", "Pytest", "Alembic"]
    }
  },
  {
    category: { label: "Category", className: "font-semibold text-sm", value: "Cloud & Deployment" },
    items: {
      label: "Items",
      className: "text-sm",
      value: ["AWS (S3)", "Docker", "Helm Charts", "Ingress", "ECR"]
    }
  },
  {
    category: { label: "Category", className: "font-semibold text-sm", value: "Databases" },
    items: {
      label: "Items",
      className: "text-sm",
      value: ["PostgreSQL", "SQL"]
    }
  },
  {
    category: { label: "Category", className: "font-semibold text-sm", value: "Tools" },
    items: {
      label: "Items",
      className: "text-sm",
      value: ["Git", "CI/CD", "GitHub Actions", "Redis", "Firebase", "Shell", "Postman"]
    }
  }
]

export const certificationsData = []