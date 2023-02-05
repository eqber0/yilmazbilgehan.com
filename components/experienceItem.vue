<template>
  <div class="experience-item">
    <div class="experience-item__date txt txt--rem32 txt--font700 c-white">
      <!-- 2023-2019 -->
      {{ date }}
    </div>
    <div class="experience-item__content">
      <div
        class="experience-item__content-title txt txt--rem32 txt--font700 c-white"
      >
        <!-- BACHELORS DEGREE -->
        {{ title }}
        <br />
        <span
          class="experience-item__content-text txt txt--rem24 txt--font400 c-paragraph"
        >
          <!-- Atatürk University / Advertising Managament -->
          {{ text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["date", "title", "text"],
};
</script>
