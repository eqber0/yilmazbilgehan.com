export const useProjectStore = defineStore("projects", {
  state: () => ({
    projects: [
      {
        id: "0",
        slug: "chace-people",
        name: "Chace People",
        type: "Corporate",
        description: `Chace People is a leading specialist recruitment agency, placing
        senior support staff with high profile clients around the world. They
        connect and they match, creating the three cs of Chace; client,
        consultant and candidate. Chace people works on a project basis
        whereby our teams connect with the best candidates, creating
        opportunities for our clients to work with the most respected talent
        within their specific industries. with the use of technology and our
        in-depth interview and vetting process, we work closely with our
        clients and candidates to ensure that we match the right people with
        the right people.`,
        cover:
          "https://media.yilmaz-bilgehan.workers.dev/chace/chace-banner.png",
        fullpage:
          "https://media.yilmaz-bilgehan.workers.dev/chace/chace-fullpage.webp",
        video:
          "https://media.yilmaz-bilgehan.workers.dev/chace/chace-video.mp4",
        website: "https://chacepeople.com/en",
        gallery: [
          "https://media.yilmaz-bilgehan.workers.dev/chace/chace-banner.png",
          "https://media.yilmaz-bilgehan.workers.dev/chace/chace-mockup-2.png",
          "https://media.yilmaz-bilgehan.workers.dev/chace/chace-mockup-3.png",
          "https://media.yilmaz-bilgehan.workers.dev/chace/chace-mockup-4.png",
          "https://media.yilmaz-bilgehan.workers.dev/chace/chace-mockup-5.png",
          "https://media.yilmaz-bilgehan.workers.dev/chace/chace-mockup-6.png",
          "https://media.yilmaz-bilgehan.workers.dev/chace/chace-mockup-7.png",
        ],
        awarded: true,
        awardName: "Horizon Gold Award",
        awardImage: "https://media.yilmaz-bilgehan.workers.dev/horizon.png",
      },
      {
        id: "1",
        name: "Trowas",
        slug: "trowas",
        type: "Corporate",
        description: `The Trowas website, a remarkable example of innovative web design and development, showcases our commitment to providing an engaging user experience while promoting sustainable networking. Developed using a robust tech stack consisting of HTML, CSS, and Laravel backend, the website boasts a seamless, responsive, and visually appealing interface.
        <br>
        <br>
        Key features of the Trowas website include scroll-triggered animations that provide an immersive and interactive user experience. The platform supports multiple languages, catering to a diverse and global clientele. Additionally, users can customize their website experience by choosing between dark and light modes, depending on their preference or surrounding environment.
        <br>
        <br>
        To ensure a seamless and secure transaction process, the website incorporates advanced payment features, allowing customers to purchase and manage their Trowas digital business cards effortlessly. This state-of-the-art platform demonstrates the perfect blend of modern technology and eco-friendly solutions, changing the face of business networking for the better.`,
        cover:
          "https://media.yilmaz-bilgehan.workers.dev/trowas/trowas-banner.jpg",
        fullpage:
          "https://media.yilmaz-bilgehan.workers.dev/trowas/trowas-fullpage.webp",
        video:
          "https://media.yilmaz-bilgehan.workers.dev/trowas/trowas-video.mp4",
        website: "https://trowas.com",
        gallery: [
          "https://media.yilmaz-bilgehan.workers.dev/trowas/trowas-banner.jpg",
          "https://media.yilmaz-bilgehan.workers.dev/trowas/trowas-mockup-2.png",
          "https://media.yilmaz-bilgehan.workers.dev/trowas/trowas-mockup-3.png",
          "https://media.yilmaz-bilgehan.workers.dev/trowas/trowas-mockup-4.png",
          "https://media.yilmaz-bilgehan.workers.dev/trowas/trowas-mockup-5.png",
          "https://media.yilmaz-bilgehan.workers.dev/trowas/trowas-mockup-6.png",
          "https://media.yilmaz-bilgehan.workers.dev/trowas/trowas-mockup-7.png",
        ],
        awarded: true,
        awardName: "Altin Orumcek Finalist",
        awardImage:
          "https://media.yilmaz-bilgehan.workers.dev/altin-orumcek.png",
      },
      {
        id: "3",
        name: "Dakar Aeroport",
        slug: "dakar-airport",
        type: "Corporate",
        description: `The Dakar Aeroport website serves as a one-stop solution for all your travel needs related to the Senegal Airport. Developed with a focus on usability and convenience, the website offers an engaging and intuitive interface that simplifies the travel process for passengers flying in and out of Dakar.
        <br>
        <br>
        Built using a robust tech stack of HTML, CSS, and Laravel backend, the website provides essential information and resources for a hassle-free journey. Key features include real-time flight information, terminal maps, transportation options, and an extensive directory of airport services such as dining, shopping, and lounges.
        <br>
        <br>
        In addition to these practical resources, the website also showcases the rich cultural heritage and tourist attractions of Senegal, inspiring travelers to explore the country's vibrant landscape. The platform supports multiple languages, ensuring a welcoming and inclusive experience for visitors from around the globe.
        <br>
        <br>
        The Dakar Aeroport website exemplifies the perfect blend of functionality and aesthetic appeal, offering an accessible and informative platform that elevates the overall travel experience for passengers at Senegal's premier international airport.`,
        cover:
          "https://media.yilmaz-bilgehan.workers.dev/dakar/dakar-banner.jpg",
        fullpage:
          "https://media.yilmaz-bilgehan.workers.dev/dakar/dakar-fullpage.webp",
        video:
          "https://media.yilmaz-bilgehan.workers.dev/dakar/dakar-video.mp4",
        website: "https://www.dakaraeroport.com/en",
        gallery: [
          "https://media.yilmaz-bilgehan.workers.dev/dakar/dakar-banner.jpg",
          "https://media.yilmaz-bilgehan.workers.dev/dakar/dakar-mockup-2.png",
          "https://media.yilmaz-bilgehan.workers.dev/dakar/dakar-mockup-3.png",
          "https://media.yilmaz-bilgehan.workers.dev/dakar/dakar-mockup-4.png",
          "https://media.yilmaz-bilgehan.workers.dev/dakar/dakar-mockup-5.png",
          "https://media.yilmaz-bilgehan.workers.dev/dakar/dakar-mockup-6.png",
          "https://media.yilmaz-bilgehan.workers.dev/dakar/dakar-mockup-7.png",
        ],
        awarded: true,
        awardName: "Horizon Bronze Award",
        awardImage:
          "https://media.yilmaz-bilgehan.workers.dev/horizon-bronze.png",
      },
      {
        id: "4",
        name: "Tansu Yacht",
        slug: "tansu-yacht",
        type: "Corporate",
        description: `This website doesn't published yet.`,
        cover:
          "https://media.yilmaz-bilgehan.workers.dev/tansu/tansu-banner.jpg",
        fullpage:
          "https://media.yilmaz-bilgehan.workers.dev/tansu/tansu-fullpage.webp",
        video:
          "https://media.yilmaz-bilgehan.workers.dev/tansu/tansu-video.mp4",
        website: "",
        gallery: [
          "https://media.yilmaz-bilgehan.workers.dev/tansu/tansu-banner.jpg",
          "https://media.yilmaz-bilgehan.workers.dev/tansu/tansu-mockup-2.png",
          "https://media.yilmaz-bilgehan.workers.dev/tansu/tansu-mockup-3.png",
          "https://media.yilmaz-bilgehan.workers.dev/tansu/tansu-mockup-4.png",
          "https://media.yilmaz-bilgehan.workers.dev/tansu/tansu-mockup-5.png",
          "https://media.yilmaz-bilgehan.workers.dev/tansu/tansu-mockup-6.png",
          "https://media.yilmaz-bilgehan.workers.dev/tansu/tansu-mockup-7.png",
        ],
      },
      {
        id: "5",
        name: "Trace Aerospace",
        slug: "trace-aerospace",
        type: "Corporate",
        description: `This platform is a testament to our dedication to creating visually appealing and user-friendly web experiences that showcase our client's expertise in aerospace engineering and their commitment to delivering exceptional customer satisfaction.
        <br>
        <br>
        Utilizing a state-of-the-art tech stack, including HTML, CSS, and Laravel backend, we designed the Traces Aerospace website to offer a seamless and responsive interface that caters to the needs of clients across the aviation industry. The site's key features include detailed information on the company's comprehensive range of services, such as aircraft maintenance, engineering support, and training programs.
        <br>
        <br>
        By incorporating visually striking design elements, easy navigation, and engaging content, we've crafted a website that highlights Traces Aerospace's extensive experience and capabilities. This is evident through the case studies, testimonials, and the showcase of the company's prestigious certifications and partnerships. Additionally, we've included an intuitive contact form and information on the company's locations to facilitate smooth communication and support for clients worldwide.
        <br>
        <br>
        The Traces Aerospace website is an excellent example of how frontend development can effectively merge functionality and aesthetic appeal, resulting in a professional and informative platform that positions our client as a leader in the rapidly evolving aviation landscape.`,
        cover:
          "https://media.yilmaz-bilgehan.workers.dev/trace/trace-banner.jpg",
        fullpage:
          "https://media.yilmaz-bilgehan.workers.dev/trace/trace-fullpage.webp",
        video:
          "https://media.yilmaz-bilgehan.workers.dev/trace/trace-video.mp4",
        website: "https://tracesaerospace.com/",
        gallery: [
          "https://media.yilmaz-bilgehan.workers.dev/trace/trace-banner.jpg",
          "https://media.yilmaz-bilgehan.workers.dev/trace/trace-mockup-2.png",
          "https://media.yilmaz-bilgehan.workers.dev/trace/trace-mockup-3.png",
          "https://media.yilmaz-bilgehan.workers.dev/trace/trace-mockup-4.png",
          "https://media.yilmaz-bilgehan.workers.dev/trace/trace-mockup-5.png",
          "https://media.yilmaz-bilgehan.workers.dev/trace/trace-mockup-6.png",
        ],
      },
      {
        id: "6",
        name: "Yaşalar",
        slug: "yasalar",
        type: "Corporate",
        description: `The Yasalar website, exemplifies the company's dedication to providing world-class products and services in the field of metal forming. Designed to create added value for customers, the website showcases Yasalar's commitment to continuous development and growth, hand-in-hand with its employees.
        <br>
        <br>
        With a vision to be a reliable and respected partner for customers, suppliers, and other stakeholders, Yasalar constantly strives to improve its production methods, positioning itself among the leading companies in the metal forming industry. The website reflects this vision by offering detailed information on the company's services, capabilities, and commitment to international quality standards.
        <br>
        <br>
        Visitors to the Yasalar website can gain valuable insights into the company's extensive experience, certifications, and innovative production techniques. The platform's seamless user interface and engaging content further emphasize the company's dedication to professionalism and customer satisfaction.
        <br>
        <br>
        The Yasalar website serves as an excellent example of how a well-designed web platform can effectively showcase a company's vision, positioning it as a trusted and respected leader in its industry.`,
        cover:
          "https://media.yilmaz-bilgehan.workers.dev/yasalar/yasalar-banner.jpg",
        fullpage:
          "https://media.yilmaz-bilgehan.workers.dev/yasalar/yasalar-fullpage.webp",
        video:
          "https://media.yilmaz-bilgehan.workers.dev/yasalar/yasalar-video.mp4",
        website: "https://yasalar.com.tr/en",
        gallery: [
          "https://media.yilmaz-bilgehan.workers.dev/yasalar/yasalar-banner.jpg",
          "https://media.yilmaz-bilgehan.workers.dev/yasalar/yasalar-mockup-1.png",
          "https://media.yilmaz-bilgehan.workers.dev/yasalar/yasalar-mockup-2.png",
          "https://media.yilmaz-bilgehan.workers.dev/yasalar/yasalar-mockup-3.png",
          "https://media.yilmaz-bilgehan.workers.dev/yasalar/yasalar-mockup-4.png",
          "https://media.yilmaz-bilgehan.workers.dev/yasalar/yasalar-mockup-5.png",
          "https://media.yilmaz-bilgehan.workers.dev/yasalar/yasalar-mockup-6.png",
        ],
      },
      {
        id: "7",
        name: "NSK Group",
        slug: "nsk-group",
        type: "Corporate",
        description: `NSK Group website, a platform designed to showcase the company's manufacturing prowess in steering, suspension, hydraulic, and forged parts for various industries, including commercial, agricultural, and construction vehicles.
        <br>
        <br>
        The website, developed with a focus on usability and user experience, highlights the company's commitment to quality and innovation in manufacturing. By employing a cutting-edge tech stack, including HTML, CSS, and Laravel backend, we have created a visually appealing and responsive platform that caters to clients from around the world.
        <br>
        <br>
        Key features of the NSK Group website include detailed information on the company's wide range of products and services, an overview of its manufacturing facilities, and insights into its global presence. The seamless user interface and engaging content make it easy for visitors to understand the company's value proposition and dedication to customer satisfaction.
        <br>
        <br>
        The NSK Group website demonstrates how effective frontend development can bring a company's vision to life, creating a professional and informative platform that positions them as a global leader in their industry.`,
        cover: "https://media.yilmaz-bilgehan.workers.dev/nsk/nsk-banner.jpg",
        fullpage:
          "https://media.yilmaz-bilgehan.workers.dev/nsk/nsk-fullpage.webp",
        video: "https://media.yilmaz-bilgehan.workers.dev/nsk/nsk-video.mp4",
        website: "https://nskgroup.com.tr/en",
        gallery: [
          "https://media.yilmaz-bilgehan.workers.dev/nsk/nsk-banner.jpg",
          "https://media.yilmaz-bilgehan.workers.dev/nsk/nsk-mockup-1.png",
          "https://media.yilmaz-bilgehan.workers.dev/nsk/nsk-mockup-2.png",
          "https://media.yilmaz-bilgehan.workers.dev/nsk/nsk-mockup-3.png",
          "https://media.yilmaz-bilgehan.workers.dev/nsk/nsk-mockup-4.png",
          "https://media.yilmaz-bilgehan.workers.dev/nsk/nsk-mockup-5.png",
          "https://media.yilmaz-bilgehan.workers.dev/nsk/nsk-mockup-6.png",
        ],
      },
      {
        id: "8",
        name: "FCB Interiors",
        slug: "fcb-interiors",
        type: "Corporate",
        description: `FCB Interiors website, an exceptional platform designed to highlight the company's expertise in interior design for residential and commercial spaces. Based in Bursa, FCB Interiors is a specialist in crafting and implementing unique interior designs, providing comprehensive services from conception to production and completion.
        <br>
        <br>
        The website, developed with a focus on usability and user experience, showcases the company's commitment to transforming dreams into reality for clients' homes and offices. Utilizing a cutting-edge tech stack, including HTML, CSS, and Laravel backend, we have created a visually appealing and responsive platform that caters to a diverse clientele.
        <br>
        <br>
        Key features of the FCB Interiors website include an impressive portfolio showcasing the company's stunning designs, detailed information about their design and implementation process, and an overview of the services they offer. The seamless user interface and engaging content make it easy for visitors to appreciate the company's artistic vision and dedication to customer satisfaction.
        <br>
        <br>
        The FCB Interiors website exemplifies how effective frontend development can bring a company's unique value proposition to life, creating a professional and visually striking platform that positions them as a leader in the competitive world of interior design.`,
        cover: "https://media.yilmaz-bilgehan.workers.dev/fcb/fcb-banner.jpg",
        fullpage:
          "https://media.yilmaz-bilgehan.workers.dev/fcb/fcb-fullpage.webp",
        video: "https://media.yilmaz-bilgehan.workers.dev/fcb/fcb-video.mp4",
        website: "http://www.fcbinteriors.com/tr",
        gallery: [
          "https://media.yilmaz-bilgehan.workers.dev/fcb/fcb-banner.jpg",
          "https://media.yilmaz-bilgehan.workers.dev/fcb/fcb-mockup-1.png",
          "https://media.yilmaz-bilgehan.workers.dev/fcb/fcb-mockup-2.png",
          "https://media.yilmaz-bilgehan.workers.dev/fcb/fcb-mockup-3.png",
          "https://media.yilmaz-bilgehan.workers.dev/fcb/fcb-mockup-4.png",
          "https://media.yilmaz-bilgehan.workers.dev/fcb/fcb-mockup-5.png",
          "https://media.yilmaz-bilgehan.workers.dev/fcb/fcb-mockup-6.png",
        ],
      },
      {
        id: "9",
        name: "Elkon",
        slug: "elkon",
        type: "Corporate",
        description: `This website doesn't published yet.`,
        cover:
          "https://media.yilmaz-bilgehan.workers.dev/elkon/elkon-banner.jpg",
        fullpage:
          "https://media.yilmaz-bilgehan.workers.dev/elkon/elkon-fullpage.webp",
        video:
          "https://media.yilmaz-bilgehan.workers.dev/elkon/elkon-video.mp4",
        website: "",
        gallery: [
          "https://media.yilmaz-bilgehan.workers.dev/elkon/elkon-banner.jpg",
          "https://media.yilmaz-bilgehan.workers.dev/elkon/elkon-mockup-1.png",
          "https://media.yilmaz-bilgehan.workers.dev/elkon/elkon-mockup-2.png",
          "https://media.yilmaz-bilgehan.workers.dev/elkon/elkon-mockup-3.png",
          "https://media.yilmaz-bilgehan.workers.dev/elkon/elkon-mockup-4.png",
          "https://media.yilmaz-bilgehan.workers.dev/elkon/elkon-mockup-5.png",
          "https://media.yilmaz-bilgehan.workers.dev/elkon/elkon-mockup-6.png",
        ],
      },
      {
        id: "10",
        name: "Madamnica",
        slug: "madamnica",
        type: "Corporate",
        description: `Madam Niça website, a captivating platform designed to share the unique culinary story that began in Bozcaada in 2016. The founders, Oya Terzioğlu and Saada Delen, have breathed new life into an old winery once owned by a Greek woman named Dominiça Yusufiz, creating a charming dining experience that embraces the richness of various food cultures.
        <br>
        <br>
        Developed with a focus on usability and user experience, the website showcases Madam Niça's commitment to offering delicious recipes inspired by nature and the diverse culinary heritage of their surroundings. Utilizing a cutting-edge tech stack, including HTML, CSS, and Laravel backend, we have created a visually engaging and responsive platform that caters to a wide audience.
        <br>
        <br>
        Key features of the Madam Niça website include an enticing showcase of the establishment's mouthwatering dishes, an overview of the history and inspiration behind their unique culinary approach, and information about the founders' passion for celebrating ethnic cuisine. The seamless user interface and captivating content make it easy for visitors to immerse themselves in the warm and inviting atmosphere that Madam Niça offers its guests.
        <br>
        <br>
        The Madam Niça website exemplifies how effective frontend development can bring a company's unique vision to life, creating a visually appealing and informative platform that positions them as a standout in the world of gastronomy.`,
        cover:
          "https://media.yilmaz-bilgehan.workers.dev/madamnica/madamnica-banner.jpg",
        fullpage:
          "https://media.yilmaz-bilgehan.workers.dev/madamnica/madamnica-fullpage.webp",
        video:
          "https://media.yilmaz-bilgehan.workers.dev/madamnica/madamnica-video.mp4",
        website: "https://madamnica.com.tr/",
        gallery: [
          "https://media.yilmaz-bilgehan.workers.dev/madamnica/madamnica-banner.jpg",
          "https://media.yilmaz-bilgehan.workers.dev/madamnica/madamnica-mockup-1.png",
          "https://media.yilmaz-bilgehan.workers.dev/madamnica/madamnica-mockup-2.png",
          "https://media.yilmaz-bilgehan.workers.dev/madamnica/madamnica-mockup-3.png",
          "https://media.yilmaz-bilgehan.workers.dev/madamnica/madamnica-mockup-4.png",
          "https://media.yilmaz-bilgehan.workers.dev/madamnica/madamnica-mockup-5.png",
          "https://media.yilmaz-bilgehan.workers.dev/madamnica/madamnica-mockup-6.png",
        ],
      },
      {
        id: "11",
        name: "SKT",
        slug: "skt",
        type: "Corporate",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, aliquid.`,
        cover: "https://media.yilmaz-bilgehan.workers.dev/skt/skt-mockup-1.png",
        fullpage:
          "https://media.yilmaz-bilgehan.workers.dev/skt/skt-fullpage.png",
        video: "https://media.yilmaz-bilgehan.workers.dev/skt/skt-video.mp4",
        website: "https://skt.com.tr",
        gallery: [
          "https://media.yilmaz-bilgehan.workers.dev/skt/skt-mockup-1.png",
          "https://media.yilmaz-bilgehan.workers.dev/skt/skt-mockup-2.png",
          "https://media.yilmaz-bilgehan.workers.dev/skt/skt-mockup-3.png",
          "https://media.yilmaz-bilgehan.workers.dev/skt/skt-mockup-5.png",
          "https://media.yilmaz-bilgehan.workers.dev/skt/skt-mockup-7.png",
        ],
        awarded: true,
        awardName: "Horizon Bronze Award",
        awardImage:
          "https://media.yilmaz-bilgehan.workers.dev/horizon-bronze.png",
      },
    ],
  }),
})
