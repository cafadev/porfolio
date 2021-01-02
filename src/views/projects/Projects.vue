<template>
    <div>
        <v-row>
            <sidebar color="blue" :items="items"></sidebar>
            <v-col class="mt-0 main-padding-top" cols="6" offset-md="1">
                <router-view></router-view>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
    name: 'Projects',
    components: {
        Sidebar
    },
    data() {
        return {
            items: [
                { text: 'Gestor de productos de Tarjeta', url: { name: 'ProjectsGPTC' } },
                { text: 'SUVIDO', url: { name: 'SkillsFrontendDevelopment' } },
                { text: 'Priora', url: { name: 'SkillsFrontendDevelopment' } },
                { text: 'Xlsx Report', url: { name: 'SkillsScriptMaster' } },
            ]
        }
    }
}
</script>