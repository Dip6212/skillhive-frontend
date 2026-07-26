import {
    FileText,
    BrainCircuit,
    Code2,
    Users,
    BriefcaseBusiness,
    BadgeCheck,
  } from "lucide-react";
  
  export interface PlacementStep {
    id: number;
    title: string;
    description: string;
    icon: any;
  }
  
  export const placementSteps: PlacementStep[] = [
    {
      id: 1,
      title: "Resume Building",
      description:
        "Create an ATS-friendly resume with guidance from industry experts.",
      icon: FileText,
    },
    {
      id: 2,
      title: "Aptitude Preparation",
      description:
        "Practice quantitative aptitude, reasoning and verbal ability.",
      icon: BrainCircuit,
    },
    {
      id: 3,
      title: "Technical Mock Interviews",
      description:
        "Face real interview scenarios with experienced interviewers.",
      icon: Code2,
    },
    {
      id: 4,
      title: "HR Interview Training",
      description:
        "Improve communication and confidence with HR mock interviews.",
      icon: Users,
    },
    {
      id: 5,
      title: "Placement Support",
      description:
        "Receive referrals, interview opportunities and placement assistance.",
      icon: BriefcaseBusiness,
    },
    {
      id: 6,
      title: "Career Success",
      description:
        "Get continuous career guidance even after placement.",
      icon: BadgeCheck,
    },
  ];