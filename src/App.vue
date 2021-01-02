<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2" class="pr-0"><navbar></navbar></v-col>
          <v-col cols="10">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
html
  overflow: hidden

*
  color: #37474F

main
  padding-left: 10rem !important

p
  font-size: 1.3em
  line-height: 3

.main-padding-top
  padding-top: 2rem !important

.navbar-list
    &::before
        content: ''
        height: 100%
        width: 2px
        background-color: orange
        position: absolute

.navbar-list__item
    $padding-y: 3rem
    padding-left: 1rem
    padding-bottom: $padding-y
    padding-top: $padding-y

</style>
