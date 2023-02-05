export const state = () => ({
  works: [
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
      cover_img: "/images/chace-banner.png",
      heroImg: "/images/chace-fullpage.jpg",
      sliderImgs: [
        { image: "/images/chace-slider-1.jpg" },
        { image: "/images/chace-slider-2.jpg" },
        { image: "/images/chace-slider-3.jpg" },
        { image: "/images/chace-slider-4.jpg" },
        { image: "/images/chace-slider-5.jpg" },
      ],
      website: "https://chacepeople.com/en",
      content: "",
      compareImgs: [{ image: "" }, { image: "" }],
      gallery: [
        "/images/chace-banner.png",
        "/images/chace-banner.png",
        "/images/chace-banner.png",
        "/images/chace-banner.png",
        "/images/chace-banner.png",
      ],
      awarded: true,
      awardText: "Kristal Elma Silver Award",
      awardImage: "/images/chace-award-img.png",
    },
    {
      id: "1",
      name: "Trowas",
      slug: "trowas",
      type: "Corporate",
      country: "Turkey",
      duration: "1 Month",
      desc: ``,
      cover_img: "/images/trowas-banner.png",
      heroImg: "/images/trowas-fullpage.jpg",
      sliderImgs: [
        { image: "/images/trowas-slider-1.jpg" },
        { image: "/images/trowas-slider-2.jpg" },
        { image: "/images/trowas-slider-3.jpg" },
        { image: "/images/trowas-slider-4.jpg" },
      ],
      website: "https://trowas.com",
      content: "",
      compareImgs: [{ image: "" }, { image: "" }],
      gallery: [
        "/images/trowas-banner.png",
        "/images/trowas-banner.png",
        "/images/trowas-banner.png",
        "/images/trowas-banner.png",
        "/images/trowas-banner.png",
      ],
      awarded: true,
      awardText: "Altın Örümcek Finalist",
      awardImage: "/images/trowas-award-img.png",
    },
    {
      id: "2",
      name: "Latro",
      slug: "latro",
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
      cover_img: "/images/latro-banner.png",
      heroImg: "/images/latro-fullpage.jpg",
      sliderImgs: [
        { image: "/images/lato-slider-1.jpg" },
        { image: "/images/lato-slider-2.jpg" },
        { image: "/images/lato-slider-3.jpg" },
        { image: "/images/lato-slider-4.jpg" },
        { image: "/images/lato-slider-5.jpg" },
      ],
      website: "https://chacepeople.com/en",
      content: "",
      compareImgs: [{ image: "" }, { image: "" }],
      gallery: [
        "/images/latro-banner.png",
        "/images/latro-banner.png",
        "/images/latro-banner.png",
        "/images/latro-banner.png",
        "/images/latro-banner.png",
      ],
      awarded: true,
      awardText: "Horizon Silver Award",
      awardImage: "/images/latro-award-img.png",
    },
    {
      id: "3",
      name: "Dakar Aeroport",
      slug: "dakar-airport",
      type: "Corporate",
      country: "Senegal",
      duration: "3 Months",
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
      cover_img: "images/chace-banner.png",
      heroImg: "images/work-chace.jpg",
      sliderImgs: [
        { image: "/images/chace-slider-img-1.jpg" },
        { image: "/images/chace-slider-img-1.jpg" },
        { image: "/images/chace-slider-img-1.jpg" },
        { image: "/images/chace-slider-img-1.jpg" },
        { image: "/images/chace-slider-img-1.jpg" },
        { image: "/images/chace-slider-img-1.jpg" },
      ],
      website: "https://chacepeople.com/en",
      content: "",
      compareImgs: [{ image: "" }, { image: "" }],
      gallery: [
        "/images/chace-banner.png",
        "/images/chace-banner.png",
        "/images/chace-banner.png",
        "/images/chace-banner.png",
        "/images/chace-banner.png",
      ],
    },
  ],
});

export const getters = {
  works: (state) => state.works,
};

export const mutations = {};

export const actions = {};
