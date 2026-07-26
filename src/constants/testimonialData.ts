export interface Testimonial {
    id: number;
  
    name: string;
  
    course: string;
  
    company: string;
  
    package: string;
  
    rating: number;
  
    image: string;
  
    review: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
  
      name: "Rahul Sharma",
  
      course: "Java Full Stack",
  
      company: "TCS",
  
      package: "₹8.5 LPA",
  
      rating: 5,
  
      image: "/images/students/student1.jpg",
  
      review:
        "The mentors guided me throughout the placement process. The projects and mock interviews boosted my confidence tremendously.",
    },
  
    {
      id: 2,
  
      name: "Priya Das",
  
      course: "Cloud & DevOps",
  
      company: "Infosys",
  
      package: "₹10 LPA",
  
      rating: 5,
  
      image: "/images/students/student2.jpg",
  
      review:
        "The curriculum is completely industry focused. I received multiple interview opportunities within weeks.",
    },
  
    {
      id: 3,
  
      name: "Ankit Roy",
  
      course: "AI & Machine Learning",
  
      company: "IBM",
  
      package: "₹12 LPA",
  
      rating: 5,
  
      image: "/images/students/student3.jpg",
  
      review:
        "Every mentor was supportive. The placement team continuously prepared us until we secured our jobs.",
    },
  ];