<template>
    <div>
        <h2 class="display-1 font-weight-regular">UI/UX come hand in hand</h2>
        <p class="font-weight-light blue-grey--text text--darken-3">
            Aliquam eu volutpat lectus, in consequat ex. Proin dapibus dictum mauris,
            a ultrices dui convallis egestas. Nulla eu est blandit, elementum mauris id,
            posuere mi. Etiam mattis ipsum odio, et pulvinar neque aliquam nec.
            Nunc iaculis libero erat, at consectetur sem bibendum varius.
            Maecenas sodales lorem sit amet eros tincidunt malesuada.
        </p>
        <div class="d-flex justify-space-around align-center pt-5">
            <v-img src="@/assets/imgs/html.png" max-width="70" contain></v-img>
            <v-img src="@/assets/imgs/css.png" max-width="80" contain></v-img>
            <v-img src="@/assets/imgs/vue.png" max-width="80" contain></v-img>
            <v-img src="@/assets/imgs/react.png" max-width="80" contain></v-img>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SkillsFrontendDevelopment'
}
</script>


<style lang="sass" scoped>
.nav
    width: 26rem
    padding-left: 6rem
    height: 110vh
</style>