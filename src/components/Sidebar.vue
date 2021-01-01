<template>
    <div class="nav pt-3" :class="color">
        <v-list class="main-padding-top" :color="color">
            <v-list-item v-for="(item, key) in items" :key="key" :to="item.url" active-class="active">
                <v-list-item-content class="navbar-list__item font-weight-bold" v-text="item.text"></v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        color: {
            type: String,
            default: () => ''
        },
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="sass" scoped>

.active
    background-color: white
    &::before
        opacity: 0
    *
        color: #37474F !important

.nav
    width: 26rem
    padding-left: 6rem
    height: 110vh

.v-list-item
    *
        color: white

</style>