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
