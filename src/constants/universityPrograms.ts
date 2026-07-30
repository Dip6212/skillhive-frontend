export interface UniversityProgram {
    id: number;
    university: string;
    title: string;
    category: string;
    duration: string;
    fees: string;
    image: string;
    detailsUrl: string;
  }
  
  export const universityPrograms: UniversityProgram[] = [
    {
      id: 1,
      university: "Manipal University Jaipur",
      title: "Online MBA",
      category: "Management",
      duration: "24 Months",
      fees: "₹1,75,000",
      image: "/images/courses/mba.png",
      detailsUrl:
        "/",
    },
  
    {
      id: 2,
      university: "Manipal University Jaipur",
      title: "Online MCA",
      category: "Computer Applications",
      duration: "24 Months",
      fees: "₹1,58,000",
      image: "/images/courses/mca.png",
      detailsUrl:
        "/",
    },
  
    {
      id: 3,
      university: "Manipal University Jaipur",
      title: "Online BBA",
      category: "Management",
      duration: "36 Months",
      fees: "₹1,35,000",
      image: "/images/courses/bba.png",
      detailsUrl:
        "/",
    },
  
    {
      id: 4,
      university: "Manipal University Jaipur",
      title: "Online BCA",
      category: "Computer Applications",
      duration: "36 Months",
      fees: "₹1,35,000",
      image: "/images/courses/bca.png",
      detailsUrl:
        "/",
    },
  
    {
      id: 5,
      university: "Manipal University Sikkim",
      title: "Online MCA",
      category: "Computer Applications",
      duration: "24 Months",
      fees: "₹98,000",
      image: "/images/courses/mca.png",
      detailsUrl:
        "/",
    },
  
    {
      id: 6,
      university: "Manipal University Sikkim",
      title: "Online MBA",
      category: "Management",
      duration: "24 Months",
      fees: "₹1,10,000",
      image: "/images/courses/mba.png",
      detailsUrl:
        "/",
    },
  
    // {
    //   id: 7,
    //   university: "Manipal University Jaipur",
    //   title: "Online MSc Data Science",
    //   category: "Data Science",
    //   duration: "24 Months",
    //   fees: "₹1,40,000",
    //   image: "/images/universities/muj-msc-ds.jpg",
    //   detailsUrl:
    //     "https://tutopiapro.com/university-course-details/online-msc-data-science-muj",
    // },
  
    // {
    //   id: 8,
    //   university: "Manipal University Jaipur",
    //   title: "Online MSc AI",
    //   category: "Artificial Intelligence",
    //   duration: "24 Months",
    //   fees: "₹1,45,000",
    //   image: "/images/universities/muj-ai.jpg",
    //   detailsUrl:
    //     "https://tutopiapro.com/university-course-details/online-msc-artificial-intelligence-muj",
    // },
  ];