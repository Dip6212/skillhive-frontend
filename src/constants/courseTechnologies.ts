export interface CourseTechnology {
    slug: string;
  
    technologies: string[];
  }
  
  export const courseTechnologies: CourseTechnology[] = [
    {
      slug: "java-full-stack",
  
      technologies: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Git",
        "Docker",
        "AWS"
      ]
    },
  
    {
      slug: "mern-stack",
  
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "JWT",
        "Redux",
        "Docker"
      ]
    },
  
    {
      slug: "cloud-devops",
  
      technologies: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Linux",
        "Terraform",
        "Jenkins"
      ]
    },
  
    {
      slug: "data-analytics",
  
      technologies: [
        "Excel",
        "SQL",
        "Python",
        "Power BI",
        "Tableau"
      ]
    },
  
    {
      slug: "ai-machine-learning",
  
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "Pandas",
        "NumPy"
      ]
    },
  
    {
      slug: "ui-ux-design",
  
      technologies: [
        "Figma",
        "Adobe XD",
        "Photoshop",
        "Illustrator"
      ]
    }
  ];