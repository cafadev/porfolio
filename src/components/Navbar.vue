<template>
    <v-list class="navbar-list main-padding-top">
        <v-list-item-group>
            <v-list-item to="/">
                <v-list-item-content class="navbar-list__item font-weight-bold">About</v-list-item-content>
            </v-list-item>
            <v-list-item to="/skills">
                <v-list-item-content class="navbar-list__item">Skills</v-list-item-content>
            </v-list-item>
            <v-list-item to="/projects">
                <v-list-item-content class="navbar-list__item">Projects</v-list-item-content>
            </v-list-item>
            <v-list-item to="/contact">
                <v-list-item-content class="navbar-list__item">Contact</v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>