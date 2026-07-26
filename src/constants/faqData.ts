export interface FAQ {
    id: number;
    question: string;
    answer: string;
  }
  
  export const faqs: FAQ[] = [
    {
      id: 1,
      question: "Do you provide placement assistance?",
      answer:
        "Yes. We provide resume building, aptitude preparation, technical mock interviews, HR interview training and placement assistance."
    },
    {
      id: 2,
      question: "Are the classes live or recorded?",
      answer:
        "Most classes are conducted live. Recordings are also provided for revision."
    },
    {
      id: 3,
      question: "Will I receive certificates after completion?",
      answer:
        "Yes. Every successful learner receives a course completion certificate."
    },
    {
      id: 4,
      question: "Can beginners join these courses?",
      answer:
        "Absolutely. Most of our career programs are designed for beginners and gradually move to advanced concepts."
    },
    {
      id: 5,
      question: "How long are the courses?",
      answer:
        "Course duration varies from 3 to 8 months depending on the program."
    }
  ];