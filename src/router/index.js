import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'

import Skills from '../views/skills/Skills'
import BackendDevelopment from '../views/skills/BackendDevelopment'
import FrontendDevelopment from '../views/skills/FrontendDevelopment'
import ScriptMaster from '../views/skills/ScriptMaster'

import Projects from '../views/projects/Projects'
import GPTC from '../views/projects/GPTC'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  }, {
    path: '/skills',
    name: 'Skills',
    component: Skills,
    redirect: { name: 'SkillsBackendDevelopment' },
    children: [
      { path: 'backend-development', name: 'SkillsBackendDevelopment', component: BackendDevelopment },
      { path: 'frontend-development', name: 'SkillsFrontendDevelopment', component: FrontendDevelopment },
      { path: 'script-master', name: 'SkillsScriptMaster', component: ScriptMaster },
    ]
  }, {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    redirect: { name: 'ProjectsGPTC' },
    children: [
      { path: 'gptc', name: 'ProjectsGPTC', component: GPTC },
      // { path: 'frontend-development', name: 'SkillsFrontendDevelopment', component: FrontendDevelopment },
      // { path: 'script-master', name: 'SkillsScriptMaster', component: ScriptMaster },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
