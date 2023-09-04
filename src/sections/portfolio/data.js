import Image2 from "../../assets/portfolio.avif";
import Image3 from "../../assets/student_portal.avif";
import Image8 from "../../assets/expenses_app.avif";

const data = [
  {
    id: 2,
    category: "frontend",
    image: Image2,
    title: "Personal Portfolio",
    desc: "A responsive personal portfolio project, developed with React. It provides an optimal user experience while highlighting my work, projects, and expertise in a visually appealing manner.",
    demo: "http://egatortutorials.com",
    technologies_used: "React.js, HTML, CSS, JavaScript",
    github: "https://github.com/santoshi-1/react-portfolio",
  },
  {
    id: 3,
    category: "frontend",
    image: Image3,
    title: "Student Information Portal",
    desc: "Designed and created an engaging university website featuring distinct roles for administrators and students",
    technologies_used: "HTML, CSS, JavaScript, PHP, MySQL",
    demo: "http://egatortutorials.com",
    // github: "https://github.com/egattor",
  },
  {
    id: 8,
    category: "backend",
    image: Image8,
    title: "Expense Manager Application",
    desc: "Developed a comprehensive Spring Boot application for expense management, allowing users to seamlessly add, delete, update, and view expenses.",
    demo: "http://egatortutorials.com",
    technologies_used: "Java, Spring Boot, MySQL",
    github: "https://github.com/santoshi-1/expensetrackerapi",
  },
];

export default data;
