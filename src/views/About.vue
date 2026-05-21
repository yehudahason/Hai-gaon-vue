<template>
  <div class="about-container">
    <h1>אודות</h1>
    <p>
      מהדורת אינטרנט לספר סדר פתרון חלומות מרב האי גאון זצ"ל נעתק כלשונו ללא
      שינוי. נוסף פרק הרואה ממסכת ברכות לפירוש חלומות.
    </p>

    <p class="kesher">
      צור קשר:
      <a href="mailto:admin@pitron-halomot.org">admin@pitron-halomot.org</a>
    </p>

    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="business" value="WY3UA9TDCE5KA" />
      <input type="hidden" name="no_recurring" value="1" />
      <input
        type="hidden"
        name="item_name"
        value="For pitron-halomot.org support"
      />
      <input type="hidden" name="currency_code" value="USD" />
      <label for="submit">
        <p>תרום לתמיכה באתר</p>
      </label>
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
    </form>
  </div>

  <div class="hai-img-con">
    <img src="../img/haigaonpic.jpg" alt="" />
  </div>
</template>

<script setup></script>

<style></style>
