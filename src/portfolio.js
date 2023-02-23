/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Felippe George Haeitmann",
  title: "Hi, I'm Felippe",
  subTitle: emoji(
    "A passionate Software Developer from Brazil 🇧🇷 Currently developing technology to help the world see better! 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1COLDONTRUfepYucPR-1tE40TON3GCVJE/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/felippegh",
  linkedin: "https://www.linkedin.com/in/felippegeorge/",
  gmail: "felippehaeitmann@gmail.com",
  instagram: "https://www.instagram.com/felippegh/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I AM A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly maintanable web applications, following the current best software engineering practices"
    ),
    emoji(
      "⚡ Integration of third party services such as AWS / GitHub / Google APIs"
    ),
    emoji("⚡ RESTFul APIs development")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Nest.js",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University - Northridge",
      logo: require("./assets/images/csun.png"),
      subHeader: "Exchange program  in Computer Science",
      duration: "April 2014 - September 2015",
      desc: "Brazil Scientific Mobility Program scholarship recipient, offered by the Brazilian government in partnership with Fulbright and IIE to undergraduate STEM students, with outstanding academic records, to study at universities in the United States.",
      descBullets: [
        "Took courses about Software Engineering, Web Security, Operating Systems, Artificial Intelligence and User Experience"
      ]
    },
    {
      schoolName: "Universidade Tecnológica Federal do Paraná",
      logo: require("./assets/images/utfpr.jpg"),
      subHeader: "Bachelor of Technology in Systems Analysis and Development",
      duration: "January 2012 - December 2017 ",
      desc: "Ranked between the best universities in Latin America.",
      descBullets: [
        "Final paper presentation on machine learning and bioinformatics using python, entitled: Applying TensorFlow in the implementation of an RNA classifier using support vector machine."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "EyeCarePro",
      bgColor: "90, 124, 184",
      companylogo: require("./assets/images/ecp2.png"),
      date: "April 2021 – Present",
      desc: "",
      descBullets: [
        "Develop highly maintainable web applications and RESTFul APIs;",
        "Apply best software engineering practices, such as automated testing, continuous integration, code review and gitflow model;",
        "Prepared the company to move towards scalable growth, improving integration processes and by developing a ticketing tool which increased the team’s capacity by 3-fold;",
        "Refactored legacy CRM modules for a better architectural design;",
        "Third-party services integration such as AWS / GitHub / Google APIs."
      ]
    },
    {
      role: ["Systems Development Analyst", " | ", "Software Consultant"],
      company: "Atos",
      bgColor: "42, 102, 156",
      companylogo: require("./assets/images/atos.jpg"),
      date: "Jan 2016 – Apr 2021",
      desc: "",
      descBullets: [
        "Lead analyst for Sanofi Brazil and France, answering CRM Dynamics, Coupa, SAP Concur/Ariba application incidents and code enhancements, coordinating solutions with teams in Asia, Europe, Latin America and the US;",
        "Lecturer at Sanofi headquarters in Paris, France for 3 months mentoring analysts about SAP Concur and e-Procurement Coupa;",
        "Software Consultant for global companies as Nidec, Sanofi and Swarovski on SAP ECC and SAP S/4HANA Incidents and enhancements;",
        "Designed functional specifications and developed ABAP code to create/improve SAP transactions."
      ]
    },
    {
      role: "Back End Developer",
      company: "Hayamax",
      bgColor: "191, 10, 37",
      companylogo: require("./assets/images/hayamax.png"),
      date: "Oct 2015 – Dec 2015",
      desc: "",
      descBullets: [
        "Development of internal tools using PHP with MySQL database and weekly front-end enhancements in the company’s web marketplace."
      ]
    },
    {
      role: "Summer Research Assistant",
      company: "Utexas at Austin",
      bgColor: "191, 87, 0",
      companylogo: require("./assets/images/icesbg.jpg"),
      date: "Jun 2015 – Sep 2015",
      desc: "Institute for Computational Engineering and Sciences",
      descBullets: [
        "Contributed as research assistant on neuromodeling, aiding graduation students in performing experiments about the relationship between neuron structure and function to determine the roles that geometric shapes and spatial interrelationships play in the functional abilities and constraints on brain activity."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ecp.png"),
      projectName: "Eyecarepro",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.eyecarepro.com/',"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/atos.png"),
      projectName: "Atos",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://atos.net/en/"
        }
      ]
    },
    {
      image: require("./assets/images/sanofi.png"),
      projectName: "Sanofi",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.sanofi.com/"
        }
      ]
    },
    {
      image: require("./assets/images/swarovski.png"),
      projectName: "Swarovski",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.swarovski.com/"
        }
      ]
    },
    {
      image: require("./assets/images/embraco.png"),
      projectName: "Embraco",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.embraco.com/en/"
        }
      ]
    },
    {
      image: require("./assets/images/utexas.png"),
      projectName: "Utexas",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.ices.utexas.edu/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "felippehaeitmann@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
