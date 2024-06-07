import blog from '../assets/projects/blog.PNG';
import fradis from '../assets/projects/fradis.jpg';
import lacasa from '../assets/projects/lacasa.PNG';
import QueenBeeManager from '../assets/projects/QueenBeeManager.png';
import android from '../assets/projects/android-color-svgrepo-com.svg'
import WordPressIcon from '../assets/projects/wordpress.svg';
import cssIcon from '../assets/projects/css.svg';
import angular from '../assets/projects/angular-icon-svgrepo-com.svg'
import calendar from '../assets/projects/calendar-svgrepo-com.svg'
import firebase from '../assets/projects/firebase-svgrepo-com.svg'
import javascript from '../assets/projects/javascript-svgrepo-com.svg'
import language from '../assets/projects/languages-svgrepo-com.svg'
import spring from '../assets/projects/spring-icon-svgrepo-com.svg'
import mysql from '../assets/projects/mysql-logo-svgrepo-com.svg'
import woo from '../assets/projects/woocommerce-icon-svgrepo-com.svg'
import reactjs from '../assets/projects/react-svgrepo-com.svg'
import native from '../assets/projects/native.svg'
import java from '../assets/projects/java-svgrepo-com.svg'
import material from '../assets/projects/material-ui-svgrepo-com.svg'
import portfolio from '../assets/projects/portfolio.PNG'

const projectsData = [
  {
    id: 1,
    title: "La Casa Del Mastro",
    description: "La Casa del Mastro is a WordPress-powered booking site, enabling users to check availability and make reservations. The platform features an integrated calendar for smooth booking management.",
    image: lacasa,
    tags: [
      { label: "WORDPRESS", icon: <img src={WordPressIcon} alt="WordPress" style={{ width: 20, height: 20 }} /> },
      { label: "CSS", icon: <img src={cssIcon} alt="CSS" style={{ width: 20, height: 20 }} /> },
      { label: "BOOKING", icon: <img src={calendar} alt="calendar" style={{ width: 20, height: 20 }} /> }
    ],
    link: "http://www.lacasadelmastro.com",
    github: ""
  },
  {
    id: 2,
    title: "QueenBeeManager",
    description: "Android application designed for beekeepers to manage their apiaries and hives. It helps track various apiaries, hives, and visits, providing a simple overview of the status and productivity.",
    image: QueenBeeManager,
    tags: [
      { label: "ANDROID", icon: <img src={android} alt="Android" style={{ width: 20, height: 20 }} /> },
      { label: "JAVASCRIPT", icon: <img src={javascript} alt="JavaScript" style={{ width: 20, height: 20 }} /> },
      { label: "REACT NATIVE", icon: <img src={reactjs} alt="React Native" style={{ width: 20, height: 20 }} /> },
      { label: "FIREBASE", icon: <img src={firebase} alt="Firebase" style={{ width: 20, height: 20 }} /> },
      { label: "NATIVE PAPER", icon: <img src={native} alt="Native Paper" style={{ width: 20, height: 20 }} /> }
    ],
    link: "",
    github: "https://github.com/Sventrip86/QueenBeeManager"
  },
  {
    id: 3,
    title: "GuideHub2",
    description: "Note/blog application developed with Angular on the front end and Spring Boot on the back end. It features CRUD operations for managing blog posts and categories, with user authentication, MySQL for persistence, and Hibernate for database interaction, using a RESTful architecture.",
    image: blog,
    tags: [
      { label: "SPRING BOOT", icon: <img src={spring} alt="Spring Boot" style={{ width: 20, height: 20 }} /> },
      { label: "ANGULAR", icon: <img src={angular} alt="Angular" style={{ width: 20, height: 20 }} /> },
      { label: "JAVA", icon: <img src={java} alt="Java" style={{ width: 20, height: 20 }} /> },
      { label: "MYSQL", icon: <img src={mysql} alt="Mysql" style={{ width: 20, height: 20 }} /> }
    ],
    link: "",
    github: "https://github.com/Sventrip86/GuideHub2"
  },
  {
    id: 4,
    title: "Website Portfolio",
    description: "My portfolio, built with Reactjs and material ui library for its components",
    image: portfolio,
    tags: [
      { label: "REACT", icon: <img src={reactjs} alt="React" style={{ width: 20, height: 20 }} /> },
      { label: "MATERIAL UI", icon: <img src={material} alt="JavaScript" style={{ width: 20, height: 20 }} /> },
      { label: "CSS", icon: <img src={cssIcon} alt="CSS" style={{ width: 20, height: 20 }} /> }
    ],
    link: "http://www.fabriziosebis.com",
    github: "https://github.com/Sventrip86/Portfolio2024"
  },
  {
    id: 5,
    title: "Into the Net - Blog",
    description: "IntoTheNet is a personal blog dedicated to computer science and security, featuring guides, tutorials, and documentation. Built with WordPress, it provides valuable insights and resources for tech enthusiasts.",
    image: blog,
    tags: [
      { label: "WORDPRESS", icon: <img src={WordPressIcon} alt="WordPress" style={{ width: 20, height: 20 }} /> },
      { label: "CSS", icon: <img src={cssIcon} alt="CSS" style={{ width: 20, height: 20 }} /> }
    ],
    link: "https://www.blog.fabriziosebis.com",
    github: ""
  },
  {
    id: 6,
    title: "Ristorante Fradis Minoris",
    description: "The Fradis Minoris website, built with WordPress, features multilingual functionality and integrates WooCommerce for seamless reservations and contact forms.",
    image: fradis,
    tags: [
      { label: "WORDPRESS", icon: <img src={WordPressIcon} alt="WordPress" style={{ width: 20, height: 20 }} /> },
      { label: "WOOCOMMERCE", icon: <img src={woo} alt="WooCommerce" style={{ width: 20, height: 20 }} /> },
      { label: "MULTILINGUAL", icon: <img src={language} alt="Multilingual" style={{ width: 20, height: 20 }} /> }
    ],
    link: "http://www.fradisminoris.it",
    github: ""
  }
];

export default projectsData;
