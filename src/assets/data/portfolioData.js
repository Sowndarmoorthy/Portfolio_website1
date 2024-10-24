import portfolioImg01 from "../images/portfolio.png";
import portfolioImg02 from "../images/portfolio-02.png";
import portfolioImg03 from "../images/portfolio-03.png";
import portfolioImg05 from "../images/JAVA.png";
import portfolioImg06 from "../images/DB.png";
import Certificate from "../images/Certificate.png"

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Projects",
    title: "Tour-Management-Application",
    description:
      "The Tour Management Application was a project aimed at helping travel agencies manage bookings, customer information, and tour schedules. I developed it using the MERN stack—MongoDB, Express.js, React, and Node.js. ",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB","Express.js"],
    siteUrl: "https://tourister-o1md.onrender.com/home",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Projects",
    title: "Responsive webpage",
    description:
    "Create a Responsive web page by using React",
    technologies: ["React","JavaScrip"],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg03,
    category: "Projects",
    title: "Crud operation",
    description:
    "Perform a crud opertion in Django",
    technologies: ["Django","Sqlite3"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: portfolioImg05,
    category: "Certificates",
    title: "Java Concepts",
    description:
      "I Compeleted Java Concept in Infosys Springboard",
    technologies: ["JAVA", "OOPS", "Interface"],
    siteUrl: "#",
  },
 
  {
    id: "03",
    imgUrl: Certificate,
    category: "Certificates",
    title: "Python FullStack Development",
    description:
    "I compeleted my Python FullStack Course at Qtree Technology in 2023",
    technologies: ["Django","Python","numpy","bootstrap"],
    siteUrl: "https://media.licdn.com/dms/image/v2/D562DAQHl0xTcxv9oRA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1715486511286?e=1730304000&v=beta&t=kLsyjfmYvwbzZXzAF7MIkhLpV4332OdIhFrTHoGyb9U",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Certificates",
    title: "Database Management System",
    description:
      "I Completed My Database Management System Certificate in Infosys Springboard",
    technologies: ["Database","Oracle","Mysql"],
    siteUrl: "#",
  },
  {
    id: "07",
    imgUrl: portfolioImg06,
    category: "Certificates",
    title: "Software Project Management",
    description:
      "I Completed My Software Project Planing Management System Certificate in Infosys Springboard",
    technologies: ["Agile","Umbrella model"],
    siteUrl: "#",
  },
];

export default portfolios;
