<template>
    <div class="index-container">
      
      <h3>
        סדר פתרון חלומות מהרב הגאון רבינו האי זצ"ל<br />
        ויוסף הצדיק ודניאל איש חמודות ורש"י ז"ל וחכמים אחרים
      </h3>
      <RouterLink to="/book">
      <img
          src="../img/haigaonpic.jpg"
          alt="עמוד שער הספר פתרון חלומות"
          href="./book.html"
      />

      
      <h4>פתרון חלומות דפוס ונציה 5383</h4>
      </RouterLink>
    </div>
    <Circle/>
    <br />
</template>

<script setup>
import {RouterLink} from 'vue-router'
import Circle from '../components/Circle.vue'
 </script>