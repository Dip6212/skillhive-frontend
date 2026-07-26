export interface Instructor {
    slug: string;
  
    name: string;
  
    designation: string;
  
    experience: string;
  
    image: string;
  
    bio: string;
  }
  
  export const instructors: Instructor[] = [
    {
      slug: "java-full-stack",
  
      name: "Rahul Sharma",
  
      designation: "Senior Java Architect",
  
      experience: "12+ Years",
  
      image: "/images/instructors/java.jpg",
  
      bio:
        "Worked with Fortune 500 companies building enterprise Java applications."
    }
  ];