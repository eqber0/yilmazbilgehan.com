<!-- <template>
  <div class="container">
    <div class="footer__profiles">
      <div
        class="footer__profiles__item"
        v-for="(profile, index) in profiles"
        :key="index"
        :class="
          index == 0
            ? 'footer__profiles__item--left'
            : 'footer__profiles__item--right'
        "
      >
        <div class="footer__profiles__item-bg">
          <img :src="profile.bgImage" alt="" />
        </div>
        <div class="footer__profiles__item-image">
          <img :src="profile.image" alt="" />
        </div>
        <div class="footer__profiles__item-author c-white">
          <div
            class="footer__profiles__item-author__name txt txt--rem32 txt--font300"
          >
            {{ profile.name }}
          </div>
          <div
            class="footer__profiles__item-author__sector txt txt--rem24 txt--font300 c-paragraph"
          >
            {{ profile.author }}
          </div>
        </div>
        <div class="footer__profiles__item-button">
          <v-button
            :color="index == 0 ? 'primary' : 'secondary'"
            :hover="index == 0 ? 'primary' : 'secondary'"
            :text="index == 0 ? 'contact me' : ' contact him'"
            icon="iconArrow"
            type="centered"
            :element="index == 0 ? 'div' : 'a'"
            :href="index == 0 ? undefined : 'http://tolunaykurttutar.com'"
            :target="true"
          />
        </div>
      </div>
    </div>
  </div>
</template> -->
