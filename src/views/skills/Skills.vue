<template>
    <div>
        <v-row>
            <sidebar color="red" :items="items"></sidebar>
            <v-col class="mt-0 main-padding-top" cols="6" offset-md="1">
                <router-view></router-view>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
    name: 'Skills',
    components: {
        Sidebar
    },
    data() {
        return {
            items: [
                { text: 'Backend development', url: { name: 'SkillsBackendDevelopment' } },
                { text: 'Frontend development', url: { name: 'SkillsFrontendDevelopment' } },
                { text: 'Script master', url: { name: 'SkillsScriptMaster' } },
            ]
        }
    }
}
</script>