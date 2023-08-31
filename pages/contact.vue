<script setup>
// import emailjs from "emailjs-com"
import emailjs from "@emailjs/browser"
const contactForms = ref()

// Form Data
const name = ref()
const phoneNumber = ref()
const mail = ref()
const company = ref()
const message = ref()
const submitSuccess = ref(false)

function onSubmit(e) {
  try {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        contactForms.value,
        import.meta.env.VITE_EMAILJS_AUTH_ID
      )
      .then(
        (result) => {
          if (result.status == 200) {
            submitSuccess.value = true
            name.value = ""
            mail.value = ""
            company.value = ""
            phoneNumber.value = ""
            message.value = ""

            setTimeout(() => {
              alert("Your message sent succesfully.")
            }, 250)
          }
        },
        (error) => {
          // console.log("FAILED...", error.text);
        }
      )
  } catch (error) {
    console.log({ error })
  }
}
</script>

<template>
  <main class="detail-page">
    <div class="container">
      <div class="subheader">
        <div class="subheader__title">
          <mainTitle title="Contact Me" />
        </div>
      </div>
    </div>
    <section class="section section--pt0">
      <div class="container">
        <div class="contact-form">
          <h2 class="txt txt--rem48 txt--font300 c-white text-center mb-5">
            Tell me about your Dream <b>Website</b>
          </h2>
          <form
            ref="contactForms"
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
                  type="email"
                  placeholder="Mail Address"
                  v-model="mail"
                  id="mail"
                  name="mail"
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
          <div class="col-12 mt-5">
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
