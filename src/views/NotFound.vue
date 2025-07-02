<template>

    <div class="about-container">
        <br />
        <h1> 404 </h1>
        
        <p>דף לא נמצא</p>
        <br />
        <form action="">

            <label for="google-search">חפש באתר ע"י גוגל :</label>
            <input type="text" placeholder="חפש באתר על ידי גוגל" id="google-search" v-model="search">

            <button @click.prevent="handleclick()" id="btn"> חפש</button>
        </form>
        <br />


    </div>
    <div class="banner">
        <b>תפילה תשובה וצדקה</b>
        <b>מעבירים את רוע הגזירה</b>
    </div>
    <Circle />
</template>

<script setup>

import Circle from '../components/Circle.vue'
import { ref } from 'vue'
const search = ref('')
const handleclick = (e) => {
    console.log(e, search)
    window.location.href =
        `https://www.google.com/search?q=site:https://pitron-halomot.org "${search.value}"`
}

</script>

<style></style>