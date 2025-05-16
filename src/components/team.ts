interface Member {
  name: string;
  roles: string[];
  image: string;
  bio?: string;
}

export const team = [
  {
    name: "Reecher",
    roles: ["Lead Director", "Curriculum Developer", "Instructor"],
    image: "/assets/founders/richard.gif",
    bio: "I’m dedicated to providing all students at GFA fun, engaging, and helpful learning. I enjoy playing badminton and studying. Professional Eater.",
  },
  {
    name: "Schmikal",
    roles: ["Technical Director", "Web Developer", "Instructor"],
    image: "/assets/founders/michael.webp",
    bio: "I’ve been using low level programming languages ever since I was a wee little boy. I’m an expert in Java, C, C++, and most importantly, RUST.",
  },
  {
    name: "Peethan",
    roles: ["Co-Lead", "Instructor"],
    image: "/assets/founders/ethan.webp",
  },
  {
    name: "Mote",
    roles: ["Curriculum Developer", "Instructor", "Disciplinary Lead"],
    image: "/assets/founders/matt.webp",
    bio: "<b>The chance of precipitation is quite high.</b>",
  },
  {
    name: "Rav",
    roles: ["Technical", "Instructor"],
    image: "/assets/founders/aarav.webp",
  },
  {
    name: "Jog",
    roles: ["Event Coordinator", "Partnership Manager"],
    image: "/assets/founders/josh.webp",
  },
  {
    name: "Gayr",
    roles: ["Curriculum Developer", "Instructor"],
    image: "/assets/founders/gary.webp",
  },
  {
    name: "Mi",
    roles: ["Course Moderator"],
    image: "/assets/founders/whotfisthis.webp",
  },
  {
    name: "Jasper Springs",
    roles: ["Instructor"],
    image: "/assets/founders/jasper.webp",
    bio: "I’m an excellent student and a wonderful teacher, I’m very talented in mathematics and a fan of clash royal.",
  },
  {
    name: "Ega",
    roles: ["Advertising Manager", "Course Moderator"],
    image: "/assets/founders/megan.webp",
  },
  {
    name: "Zoon Minotaur",
    roles: ["Advertising Manager", "Course Moderator"],
    image: "/assets/founders/zoon.webp",
    bio: "<s style=\"color: black; text-decoration-thickness: 3px\"><span style=\"color: red\">The Minotaur, one of the oldest known surviving demons, was sculpted by ████ ██████ as a gift for the then Judge of Hell, Minos, in an attempt to form some kind of rapport.</span></s>",
  },
];

export type { Member };
