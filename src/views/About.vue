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

            <label for="google-search">חפש באתר ע"י גוגל :</label>
            <input type="text" placeholder="חפש באתר על ידי גוגל" id="google-search" v-model="search">

            <button @click.prevent="handleclick()" id="btn"> <i class="fa-brands fa-google"></i></button>
        </form>
        <br />
        <!-- start of freefind search box html -->

        <!-- <form style="margin:0px; margin-top:4px;" action="https://search.freefind.com/find.html" method="get" accept-charset="utf-8" target="_self">
      <label for="">חפש באתר:</label>
		<input type="hidden" name="si" value="59885561">
		<input type="hidden" name="pid" value="r">
		<input type="hidden" name="n" value="0">
		<input type="hidden" name="_charset_" value="">
		<input type="hidden" name="bcd" value="&#247;">
		<input type="text" name="query" size="15" placeholder="חפש באתר"> 
		<input type="submit" value="חפש">
		</form> -->

        <!-- end of freefind search box html -->

    </div>
    <div class="in">
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
    
    window.location.href =
        `https://www.google.com/search?q=site:https://pitron-halomot.org "${search.value}"`
}

</script>

<style></style>