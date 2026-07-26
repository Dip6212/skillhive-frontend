import {
    BookOpen,
    GraduationCap,
    Laptop,
    Briefcase,
    Award,
  } from "lucide-react";
  
  export interface JourneyStep {
    id: number;
    title: string;
    description: string;
    icon: any;
  }
  
  export const journeySteps: JourneyStep[] = [
    {
      id: 1,
      title: "Enroll",
      description: "Choose your career program and enroll with our counselors.",
      icon: BookOpen,
    },
    {
      id: 2,
      title: "Live Learning",
      description: "Attend live classes with experienced industry mentors.",
      icon: GraduationCap,
    },
    {
      id: 3,
      title: "Projects",
      description: "Build real-world industry projects to strengthen your skills.",
      icon: Laptop,
    },
    {
      id: 4,
      title: "Mock Interviews",
      description: "Practice technical and HR interviews with experts.",
      icon: Award,
    },
    {
      id: 5,
      title: "Placement Support",
      description: "Get resume assistance, referrals and placement guidance.",
      icon: Briefcase,
    },
  ];