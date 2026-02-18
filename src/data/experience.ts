export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  location?: string;
}

export const experienceData: Experience[] = [
  {
    date: "February 2025 - May 2025",
    title: "Student Tutor (Undergraduate TA)",
    company: "BRAC University",
    description:
      "Led tutorial sessions and facilitated classroom discussions to reinforce key concepts, clarified course materials through one to one support, held consultation hours to help students with problem solving, graded quizzes/assignments with constructive feedback, and assisted in organizing course resources to improve the overall learning experience",
    // advisor: "Peter Wang",
  },
  // Add more experience entries as needed
];