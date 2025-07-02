import { createRouter, createWebHistory } from 'vue-router'
import Book from '../views/Book.vue'
import Book2 from '../views/Book-2.vue'
import Book3 from '../views/Book-3.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Roe1 from '../views/Roe1.vue'
import Roe2 from '../views/Roe2.vue'
import Roe3 from '../views/Roe3.vue'
import Roe4 from '../views/Roe4.vue'
import Roe5 from '../views/Roe5.vue'
import Roe6 from '../views/Roe6.vue'
import Roe7 from '../views/Roe7.vue'
import Roe8 from '../views/Roe8.vue'
import Homepagenew from '../views/Homepagenew.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path : "/" ,
    name : "Home" ,
    component : Homepagenew
    },
  
  {
    path : "/book" ,
    name : "Book" ,
    component : Book ,
    alias : "/book.html"
  }
  
  ,

  {
    path : "/book-2" ,
    name : "Book2" ,
    component : Book2 ,
    alias: "/book-2.html"
  },
   
  
  {
    path : "/book-3" ,
    name : "Book3" ,
    component : Book3 ,
    alias : "/book-3.html"
  },
   {
    path : "/about" ,
    name : "About" ,
    component : About,
    alias : "/about.html"
  } ,
  {
    path : "/roe1" ,
    name : "Roe1" ,
    component : Roe1,
    alias : "/roe1.html"
  } ,
  {
    path : "/roe2" ,
    name : "Roe2" ,
    component : Roe2,
    alias : "/roe2.html"
  } ,
  {
    path : "/roe3" ,
    name : "Roe3" ,
    component : Roe3,
    alias: "/roe3.html"
  } ,
  {
    path : "/roe4" ,
    name : "Roe4" ,
    component : Roe4 ,
    alias : "/roe4.html"
  } ,
  {
    path : "/roe5" ,
    name : "Roe5" ,
    component : Roe5 ,
    alias : "/roe5.html"
  } ,
  {
    path : "/roe6" ,
    name : "Roe6" ,
    component : Roe6 ,
    alias : "/roe6.html"
    } ,
  {
    path : "/roe7" ,
    name : "Roe7" ,
    component : Roe7,
    alias : "/roe7.html"
  } ,
  {
    path : "/roe8" ,
    name : "Roe8" ,
    component : Roe8 , 
    alias : "/roe8.html"
  } ,
    
   {
    path: "/:pathMatch(.*)*",
    name :"NotFound",
   component: NotFound
  }
   

    
  ],
})

export default router
