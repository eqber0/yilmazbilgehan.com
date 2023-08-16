import { defineStore } from "pinia"

export const useProjectStore = defineStore("projects", {
  state: () => ({
    //   {
    //     id: "5",
    //     name: "Trace Aerospace",
    //     slug: "trace-aerospace",
    //     type: "Corporate",
    //     country: "Turkey",
    //     duration: "1.5 Months",
    //     desc: `This platform is a testament to our dedication to creating visually appealing and user-friendly web experiences that showcase our client's expertise in aerospace engineering and their commitment to delivering exceptional customer satisfaction.
    //   <br>
    //   <br>
    //   Utilizing a state-of-the-art tech stack, including HTML, CSS, and Laravel backend, we designed the Traces Aerospace website to offer a seamless and responsive interface that caters to the needs of clients across the aviation industry. The site's key features include detailed information on the company's comprehensive range of services, such as aircraft maintenance, engineering support, and training programs.
    //   <br>
    //   <br>
    //   By incorporating visually striking design elements, easy navigation, and engaging content, we've crafted a website that highlights Traces Aerospace's extensive experience and capabilities. This is evident through the case studies, testimonials, and the showcase of the company's prestigious certifications and partnerships. Additionally, we've included an intuitive contact form and information on the company's locations to facilitate smooth communication and support for clients worldwide.
    //   <br>
    //   <br>
    //   The Traces Aerospace website is an excellent example of how frontend development can effectively merge functionality and aesthetic appeal, resulting in a professional and informative platform that positions our client as a leader in the rapidly evolving aviation landscape.`,
    //     cover_img: "/assets/images/trace/trace-banner.jpg",
    //     heroImg: "/assets/images/trace/trace-fullpage.webp",
    //     sliderImgs: [],
    //     website: "https://tracesaerospace.com/",
    //     content: "",
    //     compareImgs: [],
    //     gallery: ["/assets/images/trace/trace-banner.jpg"],
    //   },
    //   {
    //     id: "6",
    //     name: "Yaşalar",
    //     slug: "yasalar",
    //     type: "Corporate",
    //     country: "Turkey",
    //     duration: "2 Months",
    //     desc: `The Yasalar website, exemplifies the company's dedication to providing world-class products and services in the field of metal forming. Designed to create added value for customers, the website showcases Yasalar's commitment to continuous development and growth, hand-in-hand with its employees.
    //   <br>
    //   <br>
    //   With a vision to be a reliable and respected partner for customers, suppliers, and other stakeholders, Yasalar constantly strives to improve its production methods, positioning itself among the leading companies in the metal forming industry. The website reflects this vision by offering detailed information on the company's services, capabilities, and commitment to international quality standards.
    //   <br>
    //   <br>
    //   Visitors to the Yasalar website can gain valuable insights into the company's extensive experience, certifications, and innovative production techniques. The platform's seamless user interface and engaging content further emphasize the company's dedication to professionalism and customer satisfaction.
    //   <br>
    //   <br>
    //   The Yasalar website serves as an excellent example of how a well-designed web platform can effectively showcase a company's vision, positioning it as a trusted and respected leader in its industry.`,
    //     cover_img: "/assets/images/yasalar/yasalar-banner.jpg",
    //     heroImg: "/assets/images/yasalar/yasalar-fullpage.webp",
    //     sliderImgs: [],
    //     website: "https://yasalar.com.tr/en",
    //     content: "",
    //     compareImgs: [],
    //     gallery: [
    //       "/assets/images/yasalar/yasalar-banner.jpg",
    //       "/assets/images/yasalar/yasalar-mockup-1.png",
    //       "/assets/images/yasalar/yasalar-mockup-2.png",
    //       "/assets/images/yasalar/yasalar-mockup-3.png",
    //       "/assets/images/yasalar/yasalar-mockup-4.png",
    //       "/assets/images/yasalar/yasalar-mockup-5.png",
    //       "/assets/images/yasalar/yasalar-mockup-6.png",
    //     ],
    //   },
    //   {
    //     id: "7",
    //     name: "NSK Group",
    //     slug: "nsk-group",
    //     type: "Corporate",
    //     country: "Turkey",
    //     duration: "3 Months",
    //     desc: `NSK Group website, a platform designed to showcase the company's manufacturing prowess in steering, suspension, hydraulic, and forged parts for various industries, including commercial, agricultural, and construction vehicles.
    //   <br>
    //   <br>
    //   The website, developed with a focus on usability and user experience, highlights the company's commitment to quality and innovation in manufacturing. By employing a cutting-edge tech stack, including HTML, CSS, and Laravel backend, we have created a visually appealing and responsive platform that caters to clients from around the world.
    //   <br>
    //   <br>
    //   Key features of the NSK Group website include detailed information on the company's wide range of products and services, an overview of its manufacturing facilities, and insights into its global presence. The seamless user interface and engaging content make it easy for visitors to understand the company's value proposition and dedication to customer satisfaction.
    //   <br>
    //   <br>
    //   The NSK Group website demonstrates how effective frontend development can bring a company's vision to life, creating a professional and informative platform that positions them as a global leader in their industry.`,
    //     cover_img: "/assets/images/nsk/nsk-banner.jpg",
    //     heroImg: "/assets/images/nsk/nsk-fullpage.webp",
    //     sliderImgs: [],
    //     website: "https://nskgroup.com.tr/en",
    //     content: "",
    //     compareImgs: [],
    //     gallery: [
    //       "/assets/images/nsk/nsk-banner.jpg",
    //       "/assets/images/nsk/nsk-mockup-1.png",
    //       "/assets/images/nsk/nsk-mockup-2.png",
    //       "/assets/images/nsk/nsk-mockup-3.png",
    //       "/assets/images/nsk/nsk-mockup-4.png",
    //       "/assets/images/nsk/nsk-mockup-5.png",
    //       "/assets/images/nsk/nsk-mockup-6.png",
    //     ],
    //   },
    //   {
    //     id: "8",
    //     name: "FCB Interiors",
    //     slug: "fcb-interiors",
    //     type: "Corporate",
    //     country: "Turkey",
    //     duration: "3 Months",
    //     desc: `FCB Interiors website, an exceptional platform designed to highlight the company's expertise in interior design for residential and commercial spaces. Based in Bursa, FCB Interiors is a specialist in crafting and implementing unique interior designs, providing comprehensive services from conception to production and completion.
    //   <br>
    //   <br>
    //   The website, developed with a focus on usability and user experience, showcases the company's commitment to transforming dreams into reality for clients' homes and offices. Utilizing a cutting-edge tech stack, including HTML, CSS, and Laravel backend, we have created a visually appealing and responsive platform that caters to a diverse clientele.
    //   <br>
    //   <br>
    //   Key features of the FCB Interiors website include an impressive portfolio showcasing the company's stunning designs, detailed information about their design and implementation process, and an overview of the services they offer. The seamless user interface and engaging content make it easy for visitors to appreciate the company's artistic vision and dedication to customer satisfaction.
    //   <br>
    //   <br>
    //   The FCB Interiors website exemplifies how effective frontend development can bring a company's unique value proposition to life, creating a professional and visually striking platform that positions them as a leader in the competitive world of interior design.`,
    //     cover_img: "/assets/images/fcb/fcb-banner.jpg",
    //     heroImg: "/assets/images/fcb/fcb-fullpage.webp",
    //     sliderImgs: [],
    //     website: "http://www.fcbinteriors.com/tr",
    //     content: "",
    //     compareImgs: [],
    //     gallery: [
    //       "/assets/images/fcb/fcb-banner.jpg",
    //       "/assets/images/fcb/fcb-mockup-1.png",
    //       "/assets/images/fcb/fcb-mockup-2.png",
    //       "/assets/images/fcb/fcb-mockup-3.png",
    //       "/assets/images/fcb/fcb-mockup-4.png",
    //       "/assets/images/fcb/fcb-mockup-5.png",
    //       "/assets/images/fcb/fcb-mockup-6.png",
    //     ],
    //   },
    //   {
    //     id: "9",
    //     name: "Elkon",
    //     slug: "elkon",
    //     type: "Corporate",
    //     country: "Turkey",
    //     duration: "1 Month",
    //     cover_img: "/assets/images/elkon/elkon-banner.jpg",
    //     heroImg: "/assets/images/elkon/elkon-fullpage.webp",
    //     desc: `This website doesn't published yet.`,
    //     sliderImgs: [],
    //     website: "",
    //     content: "",
    //     compareImgs: [],
    //     gallery: [
    //       "/assets/images/elkon/elkon-banner.jpg",
    //       "/assets/images/elkon/elkon-mockup-1.png",
    //       "/assets/images/elkon/elkon-mockup-2.png",
    //       "/assets/images/elkon/elkon-mockup-3.png",
    //       "/assets/images/elkon/elkon-mockup-4.png",
    //       "/assets/images/elkon/elkon-mockup-5.png",
    //       "/assets/images/elkon/elkon-mockup-6.png",
    //     ],
    //   },
    //   {
    //     id: "10",
    //     name: "Madamnica",
    //     slug: "madamnica",
    //     type: "Corporate",
    //     country: "Turkey",
    //     duration: "1.5 Months",
    //     desc: `Madam Niça website, a captivating platform designed to share the unique culinary story that began in Bozcaada in 2016. The founders, Oya Terzioğlu and Saada Delen, have breathed new life into an old winery once owned by a Greek woman named Dominiça Yusufiz, creating a charming dining experience that embraces the richness of various food cultures.
    //   <br>
    //   <br>
    //   Developed with a focus on usability and user experience, the website showcases Madam Niça's commitment to offering delicious recipes inspired by nature and the diverse culinary heritage of their surroundings. Utilizing a cutting-edge tech stack, including HTML, CSS, and Laravel backend, we have created a visually engaging and responsive platform that caters to a wide audience.
    //   <br>
    //   <br>
    //   Key features of the Madam Niça website include an enticing showcase of the establishment's mouthwatering dishes, an overview of the history and inspiration behind their unique culinary approach, and information about the founders' passion for celebrating ethnic cuisine. The seamless user interface and captivating content make it easy for visitors to immerse themselves in the warm and inviting atmosphere that Madam Niça offers its guests.
    //   <br>
    //   <br>
    //   The Madam Niça website exemplifies how effective frontend development can bring a company's unique vision to life, creating a visually appealing and informative platform that positions them as a standout in the world of gastronomy.`,
    //     cover_img: "/assets/images/madamnica/madamnica-banner.jpg",
    //     heroImg: "/assets/images/madamnica/madamnica-fullpage.webp",
    //     sliderImgs: [],
    //     website: "https://madamnica.com.tr/",
    //     content: "",
    //     compareImgs: [],
    //     gallery: [
    //       "/assets/images/madamnica/madamnica-banner.jpg",
    //       "/assets/images/madamnica/madamnica-mockup-1.png",
    //       "/assets/images/madamnica/madamnica-mockup-2.png",
    //       "/assets/images/madamnica/madamnica-mockup-3.png",
    //       "/assets/images/madamnica/madamnica-mockup-4.png",
    //       "/assets/images/madamnica/madamnica-mockup-5.png",
    //       "/assets/images/madamnica/madamnica-mockup-6.png",
    //     ],
    //   },
    //   {
    //     id: "11",
    //     name: "SKT",
    //     slug: "skt",
    //     type: "Corporate",
    //     country: "Turkey",
    //     duration: "2,5 Months",
    //     desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, aliquid.`,
    //     cover_img: "/assets/images/skt/skt-mockup-1.png",
    //     heroImg: "/assets/images/skt/skt-fullpage.png",
    //     sliderImgs: [],
    //     website: "https://skt.com.tr",
    //     content: "",
    //     compareImgs: [],
    //     gallery: [
    //       "/assets/images/skt/skt-mockup-1.png",
    //       "/assets/images/skt/skt-mockup-2.png",
    //       "/assets/images/skt/skt-mockup-3.png",
    //       "/assets/images/skt/skt-mockup-5.png",
    //       "/assets/images/skt/skt-mockup-7.png",
    //     ],
    //   },
    // ],
    projects: null,
    awardedProjects: null,
  }),
  actions: {
    async fetchProjects() {
      const nuxtApp = useNuxtApp()
      const projects = await nuxtApp.$projects
      this.projects = projects
      this.awardedProjects = projects.filter((item) => {
        console.log(item.awarded == true)
        if (item.awarded == true) {
          return item
        }
      })
      console.log(this.projects)
    },
  },
})
