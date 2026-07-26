export interface Course {
  id: number;

  slug: string;

  title: string;

  shortDescription: string;

  duration: string;

  level: "Beginner" | "Intermediate" | "Advanced";

  mode: "Online" | "Offline" | "Hybrid";

  students: number;

  image: string;

  rating: number;

  featured: boolean;

  package: "BASIC" | "ADVANCE" | "PRO";

  brochureUrl: string;
}

export const courses: Course[] = [
  {
    id: 1,
    slug: "java-full-stack",
    title: "Java Full Stack Development",
    shortDescription:
      "Become a job-ready Java Full Stack Developer with live projects.",
    duration: "6 Months",
    level: "Beginner",
    mode: "Hybrid",
    students: 1500,
    image: "/images/courses/course-1.png",
    rating: 4.9,
    featured: true,
    package: "BASIC",
    brochureUrl: "/brochures/java-full-stack.pdf",
  },

  {
    id: 2,
    slug: "mern-stack",
    title: "MERN Stack Development",
    shortDescription:
      "Master MongoDB, Express, React and Node.js from scratch.",
    duration: "6 Months",
    level: "Beginner",
    mode: "Online",
    students: 1300,
    image: "/images/courses/course-2.png",
    rating: 4.8,
    featured: true,
    package: "BASIC",
    brochureUrl: "/brochures/mern-stack.pdf",
  },

  {
    id: 3,
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDescription:
      "Learn AWS, Docker, Kubernetes and CI/CD from industry experts.",
    duration: "4 Months",
    level: "Intermediate",
    mode: "Hybrid",
    students: 900,
    image: "/images/courses/course-3.png",
    rating: 4.8,
    featured: true,
    package: "ADVANCE",
    brochureUrl: "/brochures/cloud-devops.pdf",
  },

  {
    id: 4,
    slug: "data-analytics",
    title: "Data Analytics",
    shortDescription:
      "Learn SQL, Excel, Power BI and Python for data-driven careers.",
    duration: "5 Months",
    level: "Intermediate",
    mode: "Online",
    students: 1100,
    image: "/images/courses/course-4.png",
    rating: 4.7,
    featured: true,
    package: "ADVANCE",
    brochureUrl: "/brochures/data-analytics.pdf",
  },

  {
    id: 5,
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    shortDescription:
      "Build intelligent applications using Python, Deep Learning and Generative AI.",
    duration: "8 Months",
    level: "Advanced",
    mode: "Hybrid",
    students: 700,
    image: "/images/courses/course-5.png",
    rating: 4.9,
    featured: true,
    package: "PRO",
    brochureUrl: "/brochures/ai-machine-learning.pdf",
  },

  {
    id: 6,
    slug: "ui-ux-design",
    title: "UI / UX Design",
    shortDescription:
      "Design modern web and mobile applications using Figma and design systems.",
    duration: "3 Months",
    level: "Advanced",
    mode: "Online",
    students: 600,
    image: "/images/courses/course-6.png",
    rating: 4.7,
    featured: true,
    package: "PRO",
    brochureUrl: "/brochures/ui-ux-design.pdf",
  },
];