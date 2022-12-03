export default {
  page_title: "Ahmet Enes Duruer - Software Engineer",
  language: {
    next_lang_title: "TR",
    change_title: "Change Language",
    CV_file: "Ahmet-Enes-Duruer-CV-EN.pdf",
  },
  nav_links: {
    about: "About",
    references: "References",
    this_website: "This Website",
  },
  bio: {
    name: "Ahmet Enes Duruer",
    status: "Mid-Level Software Engineer, <br /> Entrepreneur",
    contact_button: "Contact",
    download_cv_button: "Download CV",
    made_with:
      'Made with <span class="text-primary">❤</span> and <a href="https://svelte.dev/" target="_blank">Svelte</a>.',
  },
  pages: {
    about: {
      title: "About Me",
      description:
        "Hello, I'm Ahmet. Also known as \"Kahverengi\" in software and gaming world. An attentive, passionate mid-level Kotlin/Java Software Engineer and entrepreneur from Turkey. I'm passionate about learning and researching new technologies. In my daily life, I create and work on websites, mobile applications and personal projects. I'm developing and contributing to open-source projects in my free times.",
      interests_title: "Interests",
      skills_title: "Skills",
      interests: {
        javascript_developing: {
          name: "JavaScript Developing",
        },
        back_end_developing: {
          name: "Back-End Developing",
        },
        server: {
          name: "Server",
        },
        android: {
          name: "Android",
        },
      },
      skills: {
        kotlin: {
          name: "Kotlin",
          techs: { android: "Android", "back-end":"Back-End" },
        },
        javascript: {
          name: "JavaScript",
          techs: { svelte: "Svelte", vuejs: "Vue.js" },
        },
        java: {
          name: "Java",
          techs: { jvm_apps: "JVM Apps", web_server: "Web Server" },
        },
        linux: {
          name: "Linux",
          techs: { devops: "DevOps", server: "Server" },
        },
        database: {
          name: "Database",
          techs: { mysql: "MySQL", sqlite: "SQLite" },
        },
        others: {
          name: "Others",
          techs: { git: "Git", docker: "Docker" },
        },
      },
    },
    references: {
      page_title: "References",
      title: "Work Experiences",
      go_details: "Go Details",
      projects_title: "Projects",
    },
    work_details: {
      work: "Work",
      description: "Description",
      used_technologies: "Used Technologies",
      position: "as {position}, {start_date}-{end_date}",
      still: "present",
      between: "between ",
    },
    error_404: {
      message: "Welp, I haven't seen this page before ever...",
    },
    project_details: {
      title: "Project",
      links_title: "Links",
      date: "{start_date} - {end_date}",
      still: "still",
      images: "Images",
    },
  },
  references: {
    works: {
      "general-mobile": {
        company_name: "General Mobile Inc.",
        logo_image: "/assets/img/references/companies/gm-logo-dark.jpeg",
        start_date: "Nov 2017",
        end_date: "Aug 2018",
        web_address: "https://www.generalmobile.com",
        position: "Junior Android Developer",
        location: {
          city: "İstanbul",
          country: "Turkey",
        },
        description:
          "During my work experience I have been  working on and building stock Android applications with 6 other members in the beginning. " +
          "We were making UI in Android by design from <a href='https://www.sketch.com' target='_blank'>Sketch</a>. " +
          "In addition, I have worked on some company application projects such as <a href='https://play.google.com/store/apps/details?id=com.generalmobile.app.gallery' target='_blank'>GM Gallery Go</a>, <a href='https://play.google.com/store/apps/details?id=com.generalmobile.app.musicplayer' target='_blank'>GM Music Player</a>, <a href='https://play.google.com/store/apps/details?id=com.generalmobile.assistant' target='_blank'>GM Assistant</a> and <a href='https://play.google.com/store/apps/details?id=com.generalmobile.app.gmfilemanager' target='_blank'>GM Files</a>, " +
          "which are still available in Google Play. They have built in completely Java and Kotlin. " +
          "We have used issue tracking system in GitLab.",
        used_technologies: [
          "Kotlin",
          "Java",
          "Gradle",
          "Git",
          "GitLab",
          "Slack",
          "Jenkins",
          "Android Studio",
          "Firebase",
          "Fabric.io",
          "Dagger 2",
          "MVVM",
          "MVP",
          "MVC"
        ],
      },
      "kod-gemisi": {
        company_name: "Kod Gemisi",
        logo_image: "/assets/img/references/companies/kod-gemisi-logo.jpg",
        start_date: "Oct 2021",
        end_date: "Jan 2022",
        web_address: "https://www.linkedin.com/company/kodgemisi/?originalSubdomain=tr",
        position: "Intern",
        location: {
          city: "Remote",
          country: "Turkey",
        },
        description:
          "During my internship, I contributed in the project <a href='https://grispi.com' target='_blank'>Grispi</a>. " +
          "Grispi is an enterprise CRM application like Zendesk. I improved and added new scenario tests, optimized code base, " +
          "and developed web services for organization and group management systems.",
        used_technologies: [
          "Kotlin",
          "Java",
          "Gradle",
          "Git",
          "GitHub",
          "Telegram",
          "JIRA",
          "Docker",
          "Micronaut",
          "Hibernate",
          "Hexagonal Architecture"
        ],
      },
      "iconecwave": {
        company_name: "iConec Wave",
        logo_image: "/assets/img/references/companies/iconecwave-logo.jpg",
        start_date: "Feb 2022",
        end_date: "Present",
        web_address: "https://iconecwave.com/",
        position: "Mid Java Software Engineer",
        location: {
          city: "İstanbul/Remote",
          country: "Turkey",
        },
        description:
          "In iConec Wave, I'm contributing to development of two applications: Royal Canin and DxPathfinder. " +
          "I create, optimize and improve web services for our customer's needs.",
        used_technologies: [
          "Kotlin",
          "Java",
          "Gradle",
          "Maven",
          "AWS Cloud",
          "Spring",
          "Slack",
          "Jenkins",
          "EC2",
          "DynamoDB",
          "S3",
        ],
      },
    },
    projects: {
      "royal-canin": {
        logo_image: "/assets/img/references/projects/royal-canin-logo.png",
        project_name: "iConec Wave - Royal Canin",
        description: "A french cat & dog food producer.",
        start_date: 2022,
        end_date: "",
        details_description:
          "The Royal Canin is a famous French cat & dog food producer. " +
          "We are developing their modernization needs of business from factory formula management, " +
          "packaging, veterinary clinics, distribution, to the end user.",
        links: [
          {
            name: "Website",
            address: "https://ahmetduruer.com",
          },
        ],
        images: [
          {
            title: "Royal Canin",
            address: "/assets/img/references/projects/royal-canin-ss-1.png",
          },
        ],
      },
      "dxpathfinder": {
        logo_image: "/assets/img/references/projects/dxpathfinder-logo.jpg",
        project_name: "iConec Wave - DxPathFinder",
        description: "Online digital performance cockpit.",
        start_date: 2022,
        end_date: "",
        details_description:
          "The DxPathFinder is an online digital performance cockpit, where you will easily measure your digital performance and receive improvement recommendations for better business performance.",
        links: [
          {
            name: "Website",
            address: "https://www.dxpathfinder.com/",
          },
        ],
        images: [
          {
            title: "DxPathFinder",
            address: "/assets/img/references/projects/dxpathfinder-ss-1.png",
          },
        ],
      },
      "grispi": {
        logo_image: "/assets/img/references/projects/grispi-logo.jpg",
        project_name: "Kod Gemisi - Grispi",
        description: "Enterprise CRM management application.",
        start_date: "Oct 2021",
        end_date: "Jan 2022",
        details_description:
          "The Grispi is an enterprise CRM application like Zendesk.",
        links: [
          {
            name: "Website",
            address: "https://grispi.com/",
          },
        ],
        images: [
          {
            title: "Grispi",
            address: "/assets/img/references/projects/grispi-ss-1.png",
          },
        ],
      },
      portfolio: {
        logo_image: "/assets/img/references/projects/portfolio-en.png",
        project_name: "Portfolio",
        description: "My own portfolio website.",
        start_date: 2020,
        end_date: "",
        details_description:
          "This is my small portfolio website that I created to introduce myself. It supports Turkish and English languages as well. In this project during the development, recently I converted my project from Svelte Rollup to a Svelte Kit project with these technologies used in, <a href='https://svelte.dev' target='_blank'>Svelte 3</a> and <a href='https://kit.svelte.dev' target='_blank'>Svelte Kit</a> for coding of UI, " +
          "previously I created a Svelte 3 router for routing the project which is <a href='https://github.com/routve/routve' target='_blank'>Routve</a> library, " +
          "<a href='https://sass-lang.com' target='_blank'>SASS</a> for coding CSS, " +
          "previously I was using <a href='https://rollupjs.org' target='_blank'>RollupJS</a> as project bundler but now I use Svelte Kit framework (vite), <a href='https://github.com' target='_blank'>GitHub (Git)</a> as version controlling system, " +
          "I was also using <a href='https://babeljs.io' target='_blank'>Babel JS</a> for more browser support, <a href='https://prettier.io/' target='_blank'>Prettier</a> as code formatter, " +
          "previously I was using <a href='https://travis-ci.com' target='_blank'>Travis CI</a> for build up project but now <a href='https://netlify.com' target='_blank'>Netlify</a>, and again previously <a href='https://heroku.com' target='_blank'>Heroku</a> was used for deploy but now Netlify completes this job too and " +
          "<a href='https://cloudflare.com' target='_blank'>CloudFlare</a> for infrastructure.",
        links: [
          {
            name: "Website",
            address: "https://ahmetduruer.com",
          },
          {
            name: "GitHub",
            address: "https://github.com/duruer/portfolio",
          },
        ],
        images: [
          {
            title: "Kahverengi Portfolio",
            address: "/assets/img/references/projects/portfolio-en.png",
          },
        ],
      },
      routve: {
        logo_image: "/assets/img/references/projects/routve-logo.png",
        project_name: "Routve",
        description:
          "An advanced <a href='https://svelte.dev' target='_blank'>Svelte 3</a> router library.",
        start_date: 2020,
        end_date: "",
        details_description:
          "An advanced <a href='https://svelte.dev' target='_blank'>Svelte 3</a> router library which is based on <a href='https://visionmedia.github.io/page.js/' target='_blank'>Page.js</a> library, which supports dynamic and static component import..",
        links: [
          {
            name: "GitHub",
            address: "https://github.com/routve/routve",
          },
        ],
        images: [
          {
            title: "Routve Logo",
            address: "/assets/img/references/projects/routve-logo.png",
          },
        ],
      },
      pano: {
        logo_image: "/assets/img/references/projects/pano-logo.png",
        project_name: "Pano",
        description:
          "An advanced web platform that comfort your Minecraft server's website needs.",
        start_date: 2018,
        end_date: "",
        details_description:
          "An advanced web platform that comfort your Minecraft server's website needs and supports themes, addons and more features. " +
          "In this project, these technologies has used in, <a href='https://kotlinlang.org' target='_blank'>Kotlin</a> as back-end project language, " +
          "<a href='https://vuejs.org' target='_blank'>Vue.js</a> in front-end of website of project, " +
          "<a href='https://svelte.dev' target='_blank'>Svelte 3</a> as front-end technology in project, <a href='https://trello.com' target='_blank'>Trello</a> for project plan managements, " +
          "<a href='https://mysql.com' target='_blank'>MySQL</a> / <a href='https://mariadb.org' target='_blank'>MariaDB</a> as database, " +
          "<a href='https://docker.com' target='_blank'>Docker</a> for development environment, <a href='https://vertx.io' target='_blank'>Vert.x</a> in back-end developing, " +
          "<a href='https://sass-lang.com' target='_blank'>SASS</a> for CSS coding and <a href='https://dagger.dev' target='_blank'>Dagger 2</a> in dependency injection.",
        links: [
          {
            name: "GitHub",
            address: "https://github.com/panocms",
          },
        ],
        images: [
          {
            title: "Pano Project Screenshot 1",
            address: "/assets/img/references/projects/pano-website-ss-1.png",
          },
          {
            title: "Pano Project Panel Screenshot 1",
            address: "/assets/img/references/projects/pano-project-ss-1.png",
          },
        ],
      },
      "antik-kup": {
        logo_image: "/assets/img/references/projects/ak-logo.png",
        project_name: "Antik Küp",
        description: "A complete Turkish Minecraft MMORPG community server.",
        start_date: 2015,
        end_date: 2019,
        details_description:
          "A complete Turkish Minecraft MMORPG community server. In this project, these technologies and features has used, for code version management firstly " +
          "<a href='https://bitbucket.org' target='_blank'>BitBucket</a> then <a href='https://gitlab.com' target='_blank'>GitLab</a>, " +
          "<a href='https://onenote.com' target='_blank'>OneNote</a> for plan management, <a href='https://kotlinlang.org' target='_blank'>Kotlin</a> language for designing game play features. " +
          "In Minecraft world we have created an independent and unique taste of MMORPG.",
        links: [
          {
            name: "Gamer.com.tr",
            address:
              "https://forum.gamer.com.tr/konu/antik-kuep-tuerkce-minecraft-mmorpg-1-9-x-1-12-x.377687",
          },
          {
            name: "GitLab",
            address: "https://gitlab.com/defio-workshop/antik-kup",
          },
        ],
        images: [
          {
            title: "Antik Küp Website",
            address: "/assets/img/references/projects/ak-screenshot-1.jpg",
          },
        ],
      },
      "sosyal-okul": {
        logo_image: "/assets/img/references/projects/sosyal-okul-image.jpg",
        project_name: "Social School",
        description: "A social networking website designed for schools.",
        start_date: 2014,
        end_date: 2015,
        details_description:
          "A social networking website designed for schools (like <a href='/project/papuaya'>Papuaya</a> but for schools). " +
          "I have won 3rd place and bronze medal with this project again entering next year after <a href='/project/papuaya'>Papuaya</a> project in an international IT competition which name called E-Biko. I was in news in Turkey. " +
          "It has written in PHP language. Currently unfortunately it's not alive anymore.",
        links: [
          {
            name: "News 1",
            address:
              "https://www.haberler.com/twitter-a-rakip-olmak-istiyor-6049513-haberi/",
          },
          {
            name: "News 2",
            address:
              "http://www.hudutgazetesi.com/haber/17945/ogul-duruerden-bronz.html",
          },
          {
            name: "News 3",
            address:
              "https://www.takvim.com.tr/guncel/2014/05/21/twittera-rakip ",
          },
          {
            name: "News 4",
            address:
              "https://www.ucankus.com/detay/120658/turk-gencinin-twitter-a-altrnatif-olarak-hazirladigi-site-projesi-bilisim-olimpiyatinda-dunya-ikincisi",
          },
        ],
        images: [
          {
            title: "Social School Screenshot",
            address: "/assets/img/references/projects/sosyal-okul-image.jpg",
          },
        ],
      },
      papuaya: {
        logo_image: "/assets/img/references/projects/papuaya-image-corped.png",
        project_name: "Papuaya",
        description: "A social networking website.",
        start_date: 2013,
        end_date: 2014,
        details_description:
          "A social networking website. I have won 2nd place and silver medal with this project " +
          "in an international IT competition which name called E-Biko. I was in news in Turkey. " +
          "It has written in PHP language. Currently unfortunately it's not alive anymore.",
        links: [
          {
            name: "News 1",
            address:
              "https://www.hurriyet.com.tr/teknoloji/edirne-valisi-duruerin-oglu-twittera-rakip-olacak-23290428",
          },
          {
            name: "News 2",
            address:
              "https://www.edirneajans.com/vali-duruer-ogluna-plaket-verdi.html",
          },
          {
            name: "News 3",
            address:
              "https://www.marasgundem.com.tr/yerel-haberler/madalya-canavari-ogrencilerden-vali-duruere-ziyaret-473958h",
          },
          {
            name: "News 4",
            address:
              "https://www.yenisafak.com/teknoloji/twittera-turk-rakip-522054",
          },
        ],
        images: [
          {
            title: "Papuaya Screenshot 1",
            address: "/assets/img/references/projects/papuaya-image.png",
          },
          {
            title: "Papuaya Screenshot 2",
            address: "/assets/img/references/projects/papuaya-image-2.jpg",
          },
        ],
      },
    },
  },
};
