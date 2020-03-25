import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '@/views/List'
import Post from '@/views/Post'
import Entry from '@/views/Entry'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: List
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
    props: true
  },
  {
    path: '/entry',
    name: 'entry',
    component: Entry
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
