export interface CourseDetails {
    slug: string;
  
    overview: string;
  
    highlights: string[];
  }
  
  export const courseDetails: CourseDetails[] = [
    {
      slug: "java-full-stack",
  
      overview:
        "This program is designed to make you a complete Full Stack Java Developer. You will learn programming fundamentals, backend development using Spring Boot, frontend development using React, database management, deployment, real-world projects and interview preparation.",
  
      highlights: [
        "Live Instructor-Led Classes",
        "20+ Real World Projects",
        "Interview Preparation",
        "Resume Building",
        "Placement Assistance",
        "Industry Mentorship"
      ]
    },
  
    {
      slug: "mern-stack",
  
      overview:
        "Master modern JavaScript development with MongoDB, Express, React and Node.js.",
  
      highlights: [
        "Live Projects",
        "React",
        "Node.js",
        "MongoDB",
        "Interview Preparation",
        "Placement Support"
      ]
    },
  
    {
      slug: "cloud-devops",
  
      overview:
        "Learn AWS, Docker, Kubernetes, Linux and DevOps pipelines.",
  
      highlights: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Linux",
        "Placement Assistance"
      ]
    },
  
    {
      slug: "data-analytics",
  
      overview:
        "Become a Data Analyst using SQL, Excel, Python and Power BI.",
  
      highlights: [
        "Power BI",
        "Python",
        "Excel",
        "SQL",
        "Projects",
        "Placement"
      ]
    },
  
    {
      slug: "ai-machine-learning",
  
      overview:
        "Build Machine Learning and AI applications using Python.",
  
      highlights: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "Projects",
        "Placement"
      ]
    },
  
    {
      slug: "ui-ux-design",
  
      overview:
        "Learn complete UI UX Design using Figma and modern design systems.",
  
      highlights: [
        "Figma",
        "Wireframes",
        "Prototypes",
        "Design Systems",
        "Portfolio",
        "Placement"
      ]
    }
  ];