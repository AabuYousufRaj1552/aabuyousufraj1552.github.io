export interface Education {
  year: string;
  institution: string;
  degree: string;
  cgpa?: string;
  notableCourses?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "September 2022 - January 2026",
    institution: "BRAC University",
    degree: "B.Sc. in Computer Science",
    cgpa: "3.88/4.00 (Graduated with Highest Distinction)",
    notableCourses: "Notable Courses: Advanced Algorithms, Artificial Intelligence, Machine Learning, Data Science, Natural Language Processing-II, Image Processing, Computer Vision, Neural Networks, Operating Systems, Database Systems, Software Engineering, Computer Networks, Compiler Design",
  },
];
