import battoro from '../assets/projects/battoro.PNG'
import blog from '../assets/projects/blog.PNG'
import fradis from '../assets/projects/fradis.jpg'
import lacasa from '../assets/projects/lacasa.PNG'

const projectsData = [
    {
      id: 1,
      title: "La Casa Del Mastro",
      description: "Booking website",
      image: battoro,
      tags: ["wordpress", "css"],
      link: "http://www.lacasadelmastro.com",
      github: ""
    },
    {
      id: 2,
      title: "QueenBeeManager",
      description: "Android application designed for beekeepers to manage their apiaries and hives. It helps track various apiaries, hives, and visits, providing a simple overview of the status and productivity.",
      image: blog,
      tags: ["android", "javascript","react native","firebase","native paper"],
      link: "",
      github: "https://github.com/Sventrip86/QueenBeeManager"
    },
    {
      id: 3,
      title: "GuideHub2",
      description: "Web application for technical support. Backend developed with Spring Boot and frontend with Angular.",
      image: blog,
      tags: ["spring boot", "angular","java"],
      link: "",
      github: "https://github.com/Sventrip86/GuideHub2"
    },
    {
      id: 4,
      title: "Personal Website",
      description: "Developed with React.js and custom css.",
      image: blog,
      tags: ["react", "javascript","css"],
      link: "http://www.fabriziosebis.com",
      github: ""
    },
    {
      id: 5,
      title: "La Casa del Mastro",
      description: "Website with booking and payment system, developed with WordPress.",
      image: lacasa,
      tags: ["wordpress", "booking system",],
      link: "https://www.lacasadelmastro.com",
      github: ""
    },
    {
      id: 6,
      title: "Ristorante Fradis Minoris",
      description: "Restaurant website with WooCommerce integration and multilingual functionality.",
      image: fradis,
      tags: ["wordpress", "woocommerce", "multilingual"],
      link: "http://www.fradisminoris.it",
      github: ""
    },
    {
      id: 7,
      title: "Into The Net - Blog",
      description: "Blog dedicated to computer science and security with guides and tutorials.",
      image: blog,
      tags: ["wordpress", "blog", "security"],
      link: "http://www.blog.fabriziosebis.com",
      github: ""
    }
  ];

  
export default projectsData