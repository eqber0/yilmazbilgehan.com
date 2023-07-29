<script setup>
// Form
const formData = ref({
  name: "",
  slug: "",
  type: "",
  website: "",
  duration: "",
  country: "",
  description: "",
  awarded: false,
  awardName: "",
  awardImage: "",
  cover: "",
  fullpage: "",
  gallery: [],
  compareLeft: "",
  compareRight: "",
})
async function addNewProject() {
  try {
    // Call the addProject function with the new project data
    const newProjectId = await addProject(formData)
    console.log("New project added with ID:", newProjectId)
  } catch (error) {
    console.error("Error adding new project:", error)
  }
}
</script>

<template>
  <div class="admin-page">
    <div class="container">
      <form class="admin-page__form row g-2 g-md-3">
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              v-model="formData.name"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="Slug"
              id="slug"
              name="slug"
              v-model="formData.slug"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="Type"
              id="type"
              name="type"
              v-model="formData.type"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="Website"
              id="website"
              name="website"
              v-model="formData.website"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="Duration"
              id="duration"
              name="name"
              v-model="formData.duration"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="Country"
              id="country"
              name="country"
              v-model="formData.country"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="Description"
              id="description"
              name="description"
              v-model="formData.description"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="Awarded"
              id="awarded"
              name="awarded"
              v-model="formData.awarded"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="Award Name"
              id="awardName"
              name="awardName"
              v-model="formData.awardName"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="AwardImage (Link)"
              id="awardImage"
              name="awardImage"
              v-model="formData.awardImage"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="Cover Image (Link)"
              id="cover"
              name="cover"
              v-model="formData.cover"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="Fullpage"
              id="fullpage"
              name="fullpage"
              v-model="formData.fullpage"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="Gallery ( Array Link )"
              id="gallery"
              name="gallery"
              v-model="formData.gallery"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="Compare Image Left (Link)"
              id="compareLeft"
              name="compareLeft"
              v-model="formData.compareLeft"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-item">
            <input
              type="text"
              placeholder="Compare Image Right (Link)"
              id="compareRight"
              name="compareRight"
              v-model="formData.compareRight"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <v-button
            element="buttpn"
            href=""
            color=""
            icon="iconArrow"
            hover="primary"
            text="Submit"
            type="centered"
            @submit="addNewProject()"
          />
        </div>
      </form>
    </div>
  </div>
</template>
