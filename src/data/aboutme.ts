export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Aabu Yousuf Raj",
  institution: "",
  title: "Aspiring AI Researcher and Engineer",
  description:
    "Hello, I am Aabu Yousuf Raj (I go by Yousuf, pronounced yOO-suuf), a Computer Science graduate from BRAC University, Dhaka, Bangladesh. I have also served as a Student Tutor (Undergraduate TA) at BRAC University. Currently, I am <b>looking for thesis-based Master’s or PhD opportunities</b> in <b>AI, Machine Learning, Computer Vision, and NLP</b>, as well as <b>AI related roles</b> where I can contribute and grow as a researcher and engineer.<br><br> I completed my undergraduate thesis under the supervision of <a href='https://sites.google.com/site/jannatun0abigzero/home'>Dr. Jannatun Noor</a> where we focused on building a <b>computer vision based cattle monitoring ecosystem</b> for low resource settings, integrating <b>disease classification with severity grading</b>, <b>individual cattle identification across multiple viewpoints</b>, and <b>body weight estimation</b> using low shot RGB images and a custom curated dataset. Beyond my thesis, I have worked on a wide range of <b>hands on academic and research oriented projects</b> across <b>Machine Learning</b>, <b>Deep Learning</b>, <b>Computer Vision</b>, <b>NLP</b>, and <b>Data Science</b> which include <b>multi-task medical image segmentation and classification</b>, <b>real-time image-based traffic analysis</b>, <b>token-level named entity recognition</b>, <b>symptom-based multi-class disease prediction</b>, and <b>unsupervised multi-modal music clustering using Variational Autoencoders</b>. Through these experiences, I have developed strong practical skills in <b>model design</b>, <b>evaluation</b>, and <b>experimentation</b>, with a focus on building robust systems that generalize well and are realistic for real world deployment.<br><br> Outside research, I’m unapologetically sporty and into almost every kind of sport, especially football (the European kind). You can call me a huge Real Madrid fan and a die hard supporter of Cristiano Ronaldo. In my leisure time, you will usually find me enjoying chess or relaxing with mobile games like PUBG, COC, and PES, or diving into movies, series, and k-dramas. I’m also someone who loves rewatching fan favorites like The Big Bang Theory (my all time favorite), and have a soft spot for old Bollywood romantic films.<br>",
  email: "aabuyousufraj@gmail.com",
  imageUrl:
    "/assets/images/photo.jpg",
  githubUsername: "AabuYousufRaj1552",
  linkedinUsername: "aabuyousufraj",
  // blogUrl: "https://",
  //googleScholarUrl: "https://scholar.google.com/citations?user=07812345678901234567890123456789",
  //twitterUsername: "YousufRaj1552",
  cvUrl: "/assets/pdf/cv.pdf",
  altName: "Prospective MS or PhD candidate",
  secretDescription: "Cristiano Ronaldo dos Santos Aveiro is the greatest footballer of all time.",
};
