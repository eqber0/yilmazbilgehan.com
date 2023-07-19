<script setup>
import gsap from "gsap"

const workList = ref([
  {
    id: "0",
    name: "Chace People",
    slug: "chace-people",
    type: "Corporate",
    country: "UK, England",
    duration: "2 Months",
    desc: `Chace People is a leading specialist recruitment agency, placing
      senior support staff with high profile clients around the world. They
      connect and they match, creating the three cs of Chace; client,
      consultant and candidate. Chace people works on a project basis
      whereby our teams connect with the best candidates, creating
      opportunities for our clients to work with the most respected talent
      within their specific industries. with the use of technology and our
      in-depth interview and vetting process, we work closely with our
      clients and candidates to ensure that we match the right people with
      the right people.`,
    cover_img: "/assets/images/chace/chace-banner.png",
    heroImg: "/assets/images/chace/chace-fullpage.webp",
    sliderImgs: [],
    website: "https://chacepeople.com/en",
    content: "",
    compareImgs: [
      // { image: "/assets/images/chace/chace-fullpage.webp" },
      // { image: "/assets/images/trowas/trowas-fullpage.webp" },
    ],
    gallery: [
      "/assets/images/chace/chace-banner.png",
      "/assets/images/chace/chace-mockup-2.png",
      "/assets/images/chace/chace-mockup-3.png",
      "/assets/images/chace/chace-mockup-4.png",
      "/assets/images/chace/chace-mockup-5.png",
      "/assets/images/chace/chace-mockup-6.png",
      "/assets/images/chace/chace-mockup-7.png",
    ],
  },
  {
    id: "1",
    name: "Trowas",
    slug: "trowas",
    type: "Corporate",
    country: "Turkey",
    duration: "1 Month",
    desc: `The Trowas website, a remarkable example of innovative web design and development, showcases our commitment to providing an engaging user experience while promoting sustainable networking. Developed using a robust tech stack consisting of HTML, CSS, and Laravel backend, the website boasts a seamless, responsive, and visually appealing interface.
      <br>
      <br>
      Key features of the Trowas website include scroll-triggered animations that provide an immersive and interactive user experience. The platform supports multiple languages, catering to a diverse and global clientele. Additionally, users can customize their website experience by choosing between dark and light modes, depending on their preference or surrounding environment.
      <br>
      <br>
      To ensure a seamless and secure transaction process, the website incorporates advanced payment features, allowing customers to purchase and manage their Trowas digital business cards effortlessly. This state-of-the-art platform demonstrates the perfect blend of modern technology and eco-friendly solutions, changing the face of business networking for the better.`,
    cover_img: "/assets/images/trowas/trowas-banner.jpg",
    heroImg: "/assets/images/trowas/trowas-fullpage.webp",
    sliderImgs: [],
    website: "https://trowas.com",
    content: "",
    compareImgs: [],
    gallery: [
      "/assets/images/trowas/trowas-banner.jpg",
      "/assets/images/trowas/trowas-mockup-2.png",
      "/assets/images/trowas/trowas-mockup-3.png",
      "/assets/images/trowas/trowas-mockup-4.png",
      "/assets/images/trowas/trowas-mockup-5.png",
      "/assets/images/trowas/trowas-mockup-6.png",
      "/assets/images/trowas/trowas-mockup-7.png",
    ],
  },
  {
    id: "2",
    name: "Latro",
    slug: "latro",
    type: "Corporate",
    country: "Turkey",
    duration: "3 Months",
    desc: `The Latro website stands as a testament to our dedication to creating an inclusive and sustainable ecosystem for teams to thrive with a high level of autonomy. Developed using a powerful tech stack of HTML, CSS, and Laravel backend, the website offers a visually engaging and responsive user interface that reflects Latro's commitment to purpose-driven collaboration and customer-centricity.
      <br>
      <br>
      Key features of the Latro website include animated backgrounds that bring the platform to life, emphasizing our vibrant and adaptive ecosystem. With accessibility as a core focus, the website offers Dark Mode, High Contrast, and Greyscale settings, ensuring an inclusive experience for users with varying visual preferences and needs.
      <br>
      <br>
      In line with our sustainability values, the Latro website has been designed with a low environmental impact in mind, demonstrating our commitment to reducing our digital carbon footprint. The Latro platform serves as a beacon for like-minded "explorers" who share our passion for purposeful collaboration and collective management principles, uniting them in our mission to create a positive impact on the world.`,
    cover_img: "/assets/images/latro/latro-banner.jpg",
    heroImg: "/assets/images/latro/latro-fullpage.webp",
    sliderImgs: [],
    website: "https://latro.com.tr/en",
    content: "",
    compareImgs: [],
    gallery: [
      "/assets/images/latro/latro-banner.jpg",
      "/assets/images/latro/latro-mockup-2.png",
      "/assets/images/latro/latro-mockup-3.png",
      "/assets/images/latro/latro-mockup-4.png",
      "/assets/images/latro/latro-mockup-5.png",
      "/assets/images/latro/latro-mockup-6.png",
      "/assets/images/latro/latro-mockup-7.png",
    ],
  },
  {
    id: "3",
    name: "Dakar Aeroport",
    slug: "dakar-airport",
    type: "Corporate",
    country: "Senegal",
    duration: "3 Months",
    desc: `The Dakar Aeroport website serves as a one-stop solution for all your travel needs related to the Senegal Airport. Developed with a focus on usability and convenience, the website offers an engaging and intuitive interface that simplifies the travel process for passengers flying in and out of Dakar.
      <br>
      <br>
      Built using a robust tech stack of HTML, CSS, and Laravel backend, the website provides essential information and resources for a hassle-free journey. Key features include real-time flight information, terminal maps, transportation options, and an extensive directory of airport services such as dining, shopping, and lounges.
      <br>
      <br>
      In addition to these practical resources, the website also showcases the rich cultural heritage and tourist attractions of Senegal, inspiring travelers to explore the country's vibrant landscape. The platform supports multiple languages, ensuring a welcoming and inclusive experience for visitors from around the globe.
      <br>
      <br>
      The Dakar Aeroport website exemplifies the perfect blend of functionality and aesthetic appeal, offering an accessible and informative platform that elevates the overall travel experience for passengers at Senegal's premier international airport.`,
    cover_img: "/assets/images/dakar/dakar-banner.jpg",
    heroImg: "/assets/images/dakar/dakar-fullpage.webp",
    sliderImgs: [],
    website: "https://www.dakaraeroport.com/en",
    content: "",
    compareImgs: [],
    gallery: [
      "/assets/images/dakar/dakar-banner.jpg",
      "/assets/images/dakar/dakar-mockup-2.png",
      "/assets/images/dakar/dakar-mockup-3.png",
      "/assets/images/dakar/dakar-mockup-4.png",
      "/assets/images/dakar/dakar-mockup-5.png",
      "/assets/images/dakar/dakar-mockup-6.png",
      "/assets/images/dakar/dakar-mockup-7.png",
    ],
  },
  {
    id: "4",
    name: "Tansu Yacht",
    slug: "tansu-yacht",
    type: "Corporate",
    country: "Turkey",
    duration: "1 Month",
    desc: `This website doesn't published yet.`,
    cover_img: "/assets/images/tansu/tansu-banner.jpg",
    heroImg: "/assets/images/tansu/tansu-fullpage.webp",
    sliderImgs: [],
    website: "",
    content: "",
    compareImgs: [],
    gallery: [
      "/assets/images/tansu/tansu-banner.jpg",
      "/assets/images/tansu/tansu-mockup-2.png",
      "/assets/images/tansu/tansu-mockup-3.png",
      "/assets/images/tansu/tansu-mockup-4.png",
      "/assets/images/tansu/tansu-mockup-5.png",
      "/assets/images/tansu/tansu-mockup-6.png",
      "/assets/images/tansu/tansu-mockup-7.png",
    ],
  },
  {
    id: "5",
    name: "Trace Aerospace",
    slug: "trace-aerospace",
    type: "Corporate",
    country: "Turkey",
    duration: "1.5 Months",
    desc: `This platform is a testament to our dedication to creating visually appealing and user-friendly web experiences that showcase our client's expertise in aerospace engineering and their commitment to delivering exceptional customer satisfaction.
      <br>
      <br>
      Utilizing a state-of-the-art tech stack, including HTML, CSS, and Laravel backend, we designed the Traces Aerospace website to offer a seamless and responsive interface that caters to the needs of clients across the aviation industry. The site's key features include detailed information on the company's comprehensive range of services, such as aircraft maintenance, engineering support, and training programs.
      <br>
      <br>
      By incorporating visually striking design elements, easy navigation, and engaging content, we've crafted a website that highlights Traces Aerospace's extensive experience and capabilities. This is evident through the case studies, testimonials, and the showcase of the company's prestigious certifications and partnerships. Additionally, we've included an intuitive contact form and information on the company's locations to facilitate smooth communication and support for clients worldwide.
      <br>
      <br>
      The Traces Aerospace website is an excellent example of how frontend development can effectively merge functionality and aesthetic appeal, resulting in a professional and informative platform that positions our client as a leader in the rapidly evolving aviation landscape.`,
    cover_img: "/assets/images/trace/trace-banner.jpg",
    heroImg: "/assets/images/trace/trace-fullpage.webp",
    sliderImgs: [],
    website: "https://tracesaerospace.com/",
    content: "",
    compareImgs: [],
    gallery: ["/assets/images/trace/trace-banner.jpg"],
  },
  {
    id: "6",
    name: "Yaşalar",
    slug: "yasalar",
    type: "Corporate",
    country: "Turkey",
    duration: "2 Months",
    desc: `The Yasalar website, exemplifies the company's dedication to providing world-class products and services in the field of metal forming. Designed to create added value for customers, the website showcases Yasalar's commitment to continuous development and growth, hand-in-hand with its employees.
      <br>
      <br>
      With a vision to be a reliable and respected partner for customers, suppliers, and other stakeholders, Yasalar constantly strives to improve its production methods, positioning itself among the leading companies in the metal forming industry. The website reflects this vision by offering detailed information on the company's services, capabilities, and commitment to international quality standards.
      <br>
      <br>
      Visitors to the Yasalar website can gain valuable insights into the company's extensive experience, certifications, and innovative production techniques. The platform's seamless user interface and engaging content further emphasize the company's dedication to professionalism and customer satisfaction.
      <br>
      <br>
      The Yasalar website serves as an excellent example of how a well-designed web platform can effectively showcase a company's vision, positioning it as a trusted and respected leader in its industry.`,
    cover_img: "/assets/images/yasalar/yasalar-banner.jpg",
    heroImg: "/assets/images/yasalar/yasalar-fullpage.webp",
    sliderImgs: [],
    website: "https://yasalar.com.tr/en",
    content: "",
    compareImgs: [],
    gallery: [
      "/assets/images/yasalar/yasalar-banner.jpg",
      "/assets/images/yasalar/yasalar-mockup-1.png",
      "/assets/images/yasalar/yasalar-mockup-2.png",
      "/assets/images/yasalar/yasalar-mockup-3.png",
      "/assets/images/yasalar/yasalar-mockup-4.png",
      "/assets/images/yasalar/yasalar-mockup-5.png",
      "/assets/images/yasalar/yasalar-mockup-6.png",
    ],
  },
])

onMounted(() => {
  initHomeWork()
})

const carousel_tl = ref()
const carouselGroup = ref()
const carouselSpinner = ref()
const thumbWrap = ref()
function initHomeWork() {
  var carouselOn = true
  var startRot
  var cTot
  var cSpeed
  var rotLoop
  var cRot = 13
  var startRot = -26
  var cTot = thumbWrap.value.length
  var cSpeed = 25
  var rotLoop = -cTot * cRot

  thumbWrap.value.forEach((element, index) => {
    gsap.set(element, { rotation: cRot * index })
  })

  const clonedGroup = carouselGroup.value.cloneNode(true)
  clonedGroup.classList.add("loop")

  carouselSpinner.value.appendChild(clonedGroup)
  gsap.set(clonedGroup, {
    rotation: startRot + cRot * cTot,
  })

  carouselOn = true
  carousel_tl.value = gsap.timeline({ repeat: -1 }).to($(".carousel-spinner"), {
    duration: cSpeed,
    rotation: rotLoop,
    ease: "none",
  })
}
function moveCarousel() {
  carousel_tl.value.play()
}
function stopCarousel() {
  carousel_tl.value.pause()
}
</script>

<template>
  <section class="section index-works">
    <div class="container">
      <div class="index-works__wrapper">
        <div ref="indexWorksSlider" class="index-works__slider">
          <div class="work-carousel" data-min="900" style="" data-height="1140">
            <div ref="carouselSpinner" id="mod-swiper" class="carousel-spinner">
              <div ref="carouselGroup" class="carousel-group">
                <div
                  ref="thumbWrap"
                  v-for="(item, i) in workList.slice(0, 5)"
                  :key="i"
                  class="thumb-wrap"
                >
                  <div
                    class="work-thumb"
                    @mouseover="stopCarousel()"
                    @mouseleave="moveCarousel()"
                  >
                    <NuxtLink
                      :to="{
                        path: `work-detail/${item.slug}`,
                      }"
                      class="index-works__slider-item"
                    >
                      <div class="index-works__slider-item__image">
                        <img loading="lazy" :src="item.heroImg" alt="" />
                      </div>
                      <div class="index-works__slider-item__content">
                        <div class="index-works__slider-item__content-title">
                          <h3 class="txt txt--rem32 txt--font900 c-white">
                            {{ item.name }}
                          </h3>
                          <p class="txt txt--rem20 txt--font300 c-white">
                            {{ item.type }}
                          </p>
                        </div>
                        <div
                          class="index-works__slider-item__content-button c-white"
                        >
                          <svg-icon name="iconArrow" />
                        </div>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="index-works__mobile">
            <NuxtLink
              v-for="(item, index) in workList.slice(0, 3)"
              :key="index"
              :to="{
                path: `work-detail/${item.slug}`,
              }"
              class="index-works__slider-item"
            >
              <div class="index-works__slider-item__image">
                <img quality="80" format="webp" :src="item.heroImg" />
              </div>
              <div class="index-works__slider-item__content">
                <div class="index-works__slider-item__content-title">
                  <h3 class="txt txt--rem32 txt--font900 c-white">
                    {{ item.name }}
                  </h3>
                  <p class="txt txt--rem20 txt--font300 c-white">
                    {{ item.type }}
                  </p>
                </div>
                <div class="index-works__slider-item__content-button c-white">
                  <svg-icon name="iconArrow" />
                </div>
              </div>
            </NuxtLink>
          </div>
          <v-button
            element="nuxt-link"
            href="/works"
            color=""
            icon="iconArrow"
            hover="primary"
            text="More Work"
            type="centered"
          />
        </div>
      </div>
    </div>
  </section>
</template>
