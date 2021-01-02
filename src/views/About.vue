<template>
  <div class="about main-padding-top">
    <v-row>
      <v-col cols="7">
        <h1 class="display-3">I'm Christopher Flores</h1>
        <p class="about-text font-weight-light blue-grey--text text--darken-4">
          Donec at sapien est. Sed fermentum accumsan turpis.
          Mauris porta, ipsum a cursus mollis, ex elit lobortis metus,
          sit amet fermentum turpis quam at ipsum. Curabitur sed facilisis lacus,
          vitae porta velit. Vestibulum vulputate nisi nec enim imperdiet pretium.
          Nullam enim dui, tempor et dolor sed, tincidunt varius nibh.
        </p>
        <ul class="social-networks d-flex">
          <li class="social-networks__item"><v-icon large>mdi-facebook</v-icon></li>
          <li class="social-networks__item"><v-icon large>mdi-instagram</v-icon></li>
          <li class="social-networks__item"><v-icon large>mdi-fiverr</v-icon></li>
        </ul>
      </v-col>
      <v-col class="profile-wrapper" cols="5">
        <!-- <div class="rounded circle-1"></div> -->
        <img class="profile-wrapper__image" src="@/assets/imgs/man.png"/>
        <v-sheet class="circle circle-1" color="blue" height="400" width="400"></v-sheet>
        <v-sheet class="circle circle-3" color="red" height="400" width="400"></v-sheet>
        <v-sheet class="circle circle-2" color="orange" height="250" width="250"></v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="sass" scoped>

.about
  padding-top: 10rem !important
  padding-left: 2rem
.about-text
  margin-top: 2rem !important

.social-networks
  list-style: none
  padding: 0

.social-networks__item
  padding-right: 2rem

.profile-wrapper
  position: relative
  height: 100vh

.profile-wrapper__image
  position: absolute
  bottom: 16vh
  left: -20vw
  height: 40rem
  z-index: 2

.circle
  border-radius: 100%

.circle-1
  position: absolute
  left: -10rem
  bottom: 9rem

.circle-2
  position: absolute
  right: 5rem
  top: 20rem

.circle-3
  position: absolute
  bottom: 5rem
  right: -2.5rem

</style>