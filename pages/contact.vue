<template>
  <main class="detail-page">
    <div class="container">
      <div class="subheader">
        <div class="subheader__title">
          <mainTitle title="Contact Me" />
        </div>
      </div>
    </div>
    <section>
      <div class="container">
        <div class="contact__info row g-4 g-md-5">
          <div class="col-12 col-lg-4">
            <div class="about__image">
              <img src="~/static/images/bilgehan.png" alt="" />
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <div class="about__info c-white">
              <authorCard name="Bilgehan Yılmaz" title="Frontend Developer" />
              <div class="contact__info-cards mt-5">
                <infoCard title="email" value="eqber00@gmail.com" />
                <infoCard title="adress" value="Bursa / Nilüfer" />
                <infoCard type="socials" title="socials" :socials="socials" />
                <infoCard title="phone" value="0555 685 77 45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="contact-form">
          <h2 class="txt txt--rem48 txt--font300 c-white text-center mb-5">
            Tell me about your Dream <b>Website</b>
          </h2>
          <form
            ref="contactForm"
            class="row g-4 g-md-5"
            id="contactForm"
            @submit.prevent="onSubmit"
          >
            <div class="col-12 col-lg-6">
              <div class="input-item">
                <input
                  type="text"
                  placeholder="Name Surname"
                  id="name"
                  name="name"
                  v-model="name"
                  required
                />
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="input-item">
                <input
                  type="text"
                  placeholder="Company Name"
                  id="company"
                  name="company"
                  v-model="company"
                />
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="input-item">
                <input
                  type="text"
                  placeholder="Email"
                  v-model="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="input-item">
                <input
                  type="text"
                  placeholder="Phone"
                  v-model="phoneNumber"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                />
              </div>
            </div>
            <div class="col-12">
              <div class="input-item input-item--textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  id="message"
                  name="message"
                  v-model="message"
                >
                </textarea>
              </div>
            </div>
          </form>
          <div class="col-12">
            <v-button
              color=""
              icon="iconArrow"
              hover="primary"
              text="submit"
              type="centered"
              element="button"
              :submit="true"
              form="contactForm"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      socials: [
        {
          icon: "iconLinkedin",
          link: "https://www.linkedin.com/in/bilgehan-y%C4%B1lmaz-a723b0220/",
        },
        {
          icon: "iconGithub",
          link: "https://github.com/eqber0",
        },
        {
          icon: "iconTwitter",
          link: "https://twitter.com/eqbeR_",
        },
        {
          icon: "iconInstagram",
          link: "https://www.instagram.com/eqber_/",
        },
      ],
      name: "",
      email: "",
      phoneNumber: "",
      company: "",
      message: "",
      submitSuccess: false,
    };
  },
  methods: {
    onSubmit(e) {
      try {
        emailjs
          .sendForm(
            "service_ns9zwo9",
            "template_6ekpnv9",
            this.$refs.contactForm,
            "YoA8yYQZfRNA85jP6"
          )
          .then(
            (result) => {
              if (result.status == 200) {
                this.submitSuccess = true;
                this.name = "";
                this.email = "";
                this.company = "";
                this.phoneNumber = "";
                this.message = "";
                setTimeout(() => {
                  alert("Your message sent succesfully.");
                }, 1000);
              }
            },
            (error) => {
              // console.log("FAILED...", error.text);
            }
          );
      } catch (error) {
        console.log({ error });
      }
    },
  },
};
</script>
