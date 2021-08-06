export default {
  page_title: "Ahmet Enes Duruer - Yazılım Geliştiricisi",
  language: {
    next_lang_title: "EN (US)",
    change_title: "Dili Değiştir",
  },
  nav_links: {
    about: "Hakkında",
    references: "Referanslar",
    this_website: "Bu Website",
  },
  bio: {
    name: "Ahmet Enes Duruer",
    status: "Yazılım Geliştiricisi,<br />Girişimci",
    contact_button: "İletişim",
    download_cv_button: "CV'yi İndir",
    made_with:
      '<span class="text-primary">❤</span> ve <a href="https://svelte.dev/" target="_blank">Svelte</a> ile yapıldı.',
  },
  pages: {
    about: {
      title: "Hakkımda",
      description:
        'Merhaba, ben Ahmet. Ya da oyun ve yazılım dünyasında "Kahverengi". Sakarya\'dan bir yazılım geliştiricisi ve girişimci. Günlük hayatımda, websiteler, mobil uygulamalar ve kişisel projelerimle uğraşıyorum. Boş zamanlarımda, yazılımda yeni teknolojiler deniyor ve öğreniyorum. Genel olarak, bir Back-End geliştiricisiyim.',
      interests_title: "İlgi Alanlarım",
      skills_title: "Yeteneklerim",
      interests: {
        javascript_developing: {
          name: "JavaScript Geliştirme",
        },
        android: {
          name: "Android",
        },
        back_end_developing: {
          name: "Back-End Geliştirme",
        },
        server: {
          name: "Server",
        },
      },
      skills: {
        kotlin: {
          name: "Kotlin",
          techs: { android: "Android", web: "Web" },
        },
        javascript: {
          name: "JavaScript",
          techs: { svelte: "Svelte", vuejs: "Vue.js" },
        },
        java: {
          name: "Java",
          techs: { jvm_apps: "JVM Apps", web_server: "Web Sunucu" },
        },
        linux: {
          name: "Linux",
          techs: { devops: "DevOps", server: "Sunucu" },
        },
        database: {
          name: "Veritabanı",
          techs: { mysql: "MySQL", sqlite: "SQLite" },
        },
        others: {
          name: "Diğerleri",
          techs: { git: "Git", docker: "Docker" },
        },
      },
    },
    references: {
      page_title: "Referanslar",
      title: "İş Deneyimleri",
      go_details: "Detaya Git",
      projects_title: "Projeler",
    },
    work_details: {
      work: "İş",
      description: "Açıklama",
      used_technologies: "Kullanılan Teknolojiler",
      position: "{position} olarak, {start_date}-{end_date}",
      still: "hala",
      between: "",
    },
    error_404: {
      message: "Hmm, bura daha önce var mıydı ya? ...",
    },
    project_details: {
      title: "Proje",
      links_title: "Linkler",
      still: "hala",
      images: "Resimler",
    },
  },
  references: {
    works: {
      "general-mobile": {
        company_name: "General Mobile AŞ.",
        logo_image: "/assets/img/references/companies/gm-logo-dark.jpeg",
        start_date: 2017,
        end_date: 2018,
        web_address: "https://www.generalmobile.com",
        position: "Android Geliştiricisi",
        location: {
          city: "İstanbul",
          country: "Türkiye",
        },
        description:
          "Stok Android uygulamaları üzerinde çalışıyorduk. Tasarımcımız tarafından <a href='https://www.sketch.com' target='_blank'>Sketch</a>'te çizilen çizimleri Android'de UI yaptık. " +
          "Başlangıçta 6 kişilik bir geliştirici ekibiyle devam ettik. " +
          "Ben bazı şirket uygulama projelerinde yer aldım. Bunlardan bazıları <a href='https://play.google.com/store/apps/details?id=com.generalmobile.app.gallery' target='_blank'>GM Gallery Go</a>, <a href='https://play.google.com/store/apps/details?id=com.generalmobile.app.musicplayer' target='_blank'>GM Music Player</a>, <a href='https://play.google.com/store/apps/details?id=com.generalmobile.assistant' target='_blank'>GM Assistant</a> ve <a href='https://play.google.com/store/apps/details?id=com.generalmobile.app.gmfilemanager' target='_blank'>GM Files</a>. " +
          "Hala Google Play'de aktif bir şekilde bulunuyorlar. Tamamen Java ve Kotlin ile üretildiler. " +
          "GitLab'taki issue takip etme sistemini kullandık.",
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
        ],
      },
    },
    projects: {
      portfolio: {
        logo_image: "/assets/img/references/projects/portfolio-tr.png",
        project_name: "Portfolio",
        description: "Kendi portfolyo websitem.",
        start_date: 2020,
        end_date: "",
        details_description:
          "Kendimi tanıtmak için oluşturmuş olduğum küçük Türkçe ve İngilizce destekleyen portfolyo websitem. Bu projede geliştirilirken arayüz kodlaması" +
          " için <a href='https://svelte.dev' target='_blank'>Svelte 3</a>, Svelte 3'te routing için kendi geliştirmiş olduğum <a href='https://github.com/routve/routve' target='_blank'>Routve</a> kütüphanesi, " +
          "CSS kodlamak için <a href='https://sass-lang.com' target='_blank'>SASS</a>, " +
          "proje bundler'ı olarak <a href='https://rollupjs.org' target='_blank'>RollupJS</a>, versiyon kontrol sistemi olarak <a href='https://github.com' target='_blank'>GitHub (Git)</a>, " +
          "daha fazla tarayıcı desteği için <a href='https://babeljs.io' target='_blank'>Babel JS</a>, kod formatlayıcısı olarak <a href='https://prettier.io/' target='_blank'>Prettier</a>," +
          "build için <a href='https://travis-ci.com' target='_blank'>Travis CI</a>, altyapı için <a href='https://cloudflare.com' target='_blank'>CloudFlare</a>, deploy ve yayın için <a href='https://heroku.com' target='_blank'>Heroku</a> teknolojileri kullanıldı.",
        links: [
          {
            name: "Website",
            address: "https://ahmetduruer.com",
          },
          {
            name: "GitHub",
            address: "https://github.com/kahverengi001/portfolio",
          },
        ],
        images: [
          {
            title: "Kahverengi Portfolio",
            address: "/assets/img/references/projects/portfolio-tr.png",
          },
        ],
      },
      routve: {
        logo_image: "/assets/img/references/projects/routve-logo.png",
        project_name: "Routve",
        description:
          "Gelişmiş bir <a href='https://svelte.dev' target='_blank'>Svelte 3</a> router kütüphanesi.",
        start_date: 2020,
        end_date: "",
        details_description:
          "<a href='https://visionmedia.github.io/page.js/' target='_blank'>Page.js</a> kütüphane tabanlı, dinamik ve statik component yüklemeyi destekleyen, gelişmiş bir <a href='https://svelte.dev' target='_blank'>Svelte 3</a> router kütüphanesi.",
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
          "Minecraft sunucunuzun website ihtiyaçlarını karşılayan gelişmiş bir web platform.",
        start_date: 2018,
        end_date: "",
        details_description:
          "Minecraft sunucunuzun website ihtiyaçlarını karşılayan, tema, eklentiler ve daha bir çok özelliği destekleyen gelişmiş bir web platform. " +
          "Bu projede back-end dili olarak <a href='https://kotlinlang.org' target='_blank'>Kotlin</a>, " +
          "websitesinde front-end için <a href='https://vuejs.org' target='_blank'>Vue.js</a>, " +
          "projede front-end için <a href='https://svelte.dev' target='_blank'>Svelte 3</a>, plan yönetimi için <a href='https://trello.com' target='_blank'>Trello</a>, " +
          "veritabanı olarak <a href='https://mysql.com' target='_blank'>MySQL</a> / <a href='https://mariadb.org' target='_blank'>MariaDB</a>, " +
          "geliştirme ortamı için <a href='https://docker.com' target='_blank'>Docker</a>, back-end'in geliştirilmesinde <a href='https://vertx.io' target='_blank'>Vert.x</a>, " +
          "dependency injection için <a href='https://dagger.dev' target='_blank'>Dagger 2</a> ve CSS kodlayabilmek için <a href='https://sass-lang.com' target='_blank'>SASS</a> " +
          "teknolojileri kullanıldı.",
        links: [
          {
            name: "GitHub",
            address: "https://github.com/panocms",
          },
        ],
        images: [
          {
            title: "Pano Website Ekran Görüntüsü 1",
            address: "/assets/img/references/projects/pano-website-ss-1.png",
          },
          {
            title: "Pano Proje Panel Ekran Görüntüsü 1",
            address: "/assets/img/references/projects/pano-project-ss-1.png",
          },
        ],
      },
      "antik-kup": {
        logo_image: "/assets/img/references/projects/ak-logo.png",
        project_name: "Antik Küp",
        description: "Türkçe Minecraft MMORPG topluluk sunucusu.",
        start_date: 2015,
        end_date: 2019,
        details_description:
          "Türkçe Minecraft MMORPG topluluk sunucusu. Bu projede kod yönetimi için önce " +
          "<a href='https://bitbucket.org' target='_blank'>BitBucket</a> sonra <a href='https://gitlab.com' target='_blank'>GitLab</a>, " +
          "plan yönetimi için <a href='https://onenote.com' target='_blank'>OneNote</a>, oyun özellikleri için <a href='https://kotlinlang.org' target='_blank'>Kotlin</a> " +
          "dilini ve teknolojilerini kullandık. Minecraft'ta bağımsız eşsiz bir MMORPG tadı yarattık.",
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
        project_name: "Sosyal Okul",
        description:
          "Okullar için tasarlanmış bir sosyal medya paylaşım sitesi.",
        start_date: 2014,
        end_date: 2015,
        details_description:
          "Okullar için tasarlanmış bir sosyal medya paylaşım sitesi (<a href='/project/papuaya'>Papuaya</a> gibi ama okullar için). " +
          "<a href='/project/papuaya'>Papuaya</a>'dan sonraki yıl tekrar E-Biko adlı uluslararası bilişim yarışmasında 3. sıraya yerleştim ve bronz madalya kazanmaya hak sahibi oldum. Tüm Türkiye'de haber oldum. " +
          "Proje PHP ile yazılmıştı. Şu an maalesef artık yayında değil.",
        links: [
          {
            name: "Haber 1",
            address:
              "https://www.haberler.com/twitter-a-rakip-olmak-istiyor-6049513-haberi/",
          },
          {
            name: "Haber 2",
            address:
              "http://www.hudutgazetesi.com/haber/17945/ogul-duruerden-bronz.html",
          },
          {
            name: "Haber 3",
            address:
              "https://www.takvim.com.tr/guncel/2014/05/21/twittera-rakip ",
          },
          {
            name: "Haber 4",
            address:
              "https://www.ucankus.com/detay/120658/turk-gencinin-twitter-a-altrnatif-olarak-hazirladigi-site-projesi-bilisim-olimpiyatinda-dunya-ikincisi",
          },
        ],
        images: [
          {
            title: "Sosyal Okul Ekran Görüntüsü",
            address: "/assets/img/references/projects/sosyal-okul-image.jpg",
          },
        ],
      },
      papuaya: {
        logo_image: "/assets/img/references/projects/papuaya-image-corped.png",
        project_name: "Papuaya",
        description: "Bir sosyal medya paylaşım sitesi.",
        start_date: 2013,
        end_date: 2014,
        details_description:
          "Bir sosyal medya paylaşım sitesi. E-Biko adlı uluslararası bilişim yarışmasında 2. sıraya " +
          "yerleştim ve gümüş madalya kazanmaya hak sahibi oldum. Tüm Türkiye'de haber oldum. " +
          "Proje PHP ile yazılmıştı. Şu an maalesef artık yayında değil. ",
        links: [
          {
            name: "Haber 1",
            address:
              "https://www.hurriyet.com.tr/teknoloji/edirne-valisi-duruerin-oglu-twittera-rakip-olacak-23290428",
          },
          {
            name: "Haber 2",
            address:
              "https://www.edirneajans.com/vali-duruer-ogluna-plaket-verdi.html",
          },
          {
            name: "Haber 3",
            address:
              "https://www.marasgundem.com.tr/yerel-haberler/madalya-canavari-ogrencilerden-vali-duruere-ziyaret-473958h",
          },
          {
            name: "Haber 4",
            address:
              "https://www.yenisafak.com/teknoloji/twittera-turk-rakip-522054",
          },
        ],
        images: [
          {
            title: "Papuaya Ekran Görüntüsü 1",
            address: "/assets/img/references/projects/papuaya-image.png",
          },
          {
            title: "Papuaya Ekran Görüntüsü 2",
            address: "/assets/img/references/projects/papuaya-image-2.jpg",
          },
        ],
      },
    },
  },
};
