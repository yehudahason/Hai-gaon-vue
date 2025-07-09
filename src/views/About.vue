<template>
    <div class="about-container">
        <br />
        <p>מהדורת אינטרנט לספר סדר פתרון חלומות</p>
        <br />

        <p>
            אפשר לצור קשר
            <a href="mailto:yehudah29@gmail.com">באימייל הזה.</a>
        </p>
        <br />
        <form action="">

            <label for="google-search">חפש באתר ע"י גוגל </label>
            <input type="text" placeholder=" חפש .." id="google-search" v-model="search">

            <button @click.prevent="handleclick()" id="btn">חפש</button>
        </form>
        <br />
        <br />
       

        <br />
        <br />
        <br />
        <br />
        <br />

    </div>
    <br />
    <br />
    <div class="banner">
        <b>תפילה תשובה וצדקה</b>
        <b>מעבירים את רוע הגזירה</b>
        <b>-בראשית רבה</b>
    </div>
    <Circle />
</template>

<script setup>

import Circle from '../components/Circle.vue'
import { ref } from 'vue'
const search = ref('')
const handleclick = (e) => {

    window.location.href =
        `https://www.google.com/search?q=site:https://pitron-halomot.org "${search.value}"`
}

</script>

<style></style>