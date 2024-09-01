<script setup>
const birth = new Date('10/22/1999');
const check = new Date();
const milliDay = 1000 * 60 * 60 * 24; // a day in milliseconds;
const ageInDays = (check - birth) / milliDay;
const ageInYears = ref(Math.floor(ageInDays / 365 ));
</script>
<template>
    {{ ageInYears }}
</template>