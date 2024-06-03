import battoro from '../assets/projects/battoro.PNG'
import blog from '../assets/projects/blog.PNG'
import fradis from '../assets/projects/fradis.jpg'
import lacasa from '../assets/projects/lacasa.PNG'
import QueenBeeManager from '../assets/projects/QueenBeeManager.png'

import WordPressIcon from '../assets/projects/wordpress.svg';
import css from '../assets/projects/css.svg'


const projectsData = [
    {
      id: 1,
      title: "La Casa Del Mastro",
      description: "La Casa del Mastro is a WordPress-powered booking site, enabling users to check availability and make reservations. The platform features an integrated calendar for smooth booking management.",
      image: lacasa,
      tags: [
        { label: "wordpress", icon: <img src={WordPressIcon} alt="WordPress" style={{ width: 20, height: 20 }} /> },
        { label: "custom css", icon: <img src={css} alt="CSS" style={{ width: 20, height: 20 }} /> }
    ],
      link: "http://www.lacasadelmastro.com",
      github: ""
    },
    {
      id: 2,
      title: "QueenBeeManager",
      description: "Android application designed for beekeepers to manage their apiaries and hives. It helps track various apiaries, hives, and visits, providing a simple overview of the status and productivity.",
      image: QueenBeeManager,
      tags: ["android", "javascript","react native","firebase","native paper"],
      link: "",
      github: "https://github.com/Sventrip86/QueenBeeManager"
    },
    {
      id: 3,
      title: "GuideHub2",
      description: "Note/blog application developed with Angular on the front end and Spring Boot on the back end. It features CRUD operations for managing blog posts and categories, with user authentication, MySQL for persistence, and Hibernate for database interaction, using a RESTful architecture.",
      image: blog,
      tags: ["spring boot", "angular","java"],
      link: "",
      github: "https://github.com/Sventrip86/GuideHub2"
    },
    {
      id: 4,
      title: "Website Portfolio",
      description: "My portfolio, built with Reactjs and material ui library for its components",
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
      description: "The Fradis Minoris website, built with WordPress, features multilingual functionality and integrates WooCommerce for seamless reservations and contact forms.",
      image: fradis,
      tags: ["wordpress", "woocommerce", "multilingual"],
      link: "http://www.fradisminoris.it",
      github: ""
    },
    // {
    //   id: 7,
    //   title: "Into The Net - Blog",
    //   description: "Blog dedicated to computer science and security with guides and tutorials.",
    //   image: blog,
    //   tags: ["wordpress", "blog", "security"],
    //   link: "http://www.blog.fabriziosebis.com",
    //   github: ""
    // }
  ];

  
export default projectsData