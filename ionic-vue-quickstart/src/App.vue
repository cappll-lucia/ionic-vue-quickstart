<script setup>
import { IonApp, IonPage } from '@ionic/vue';
import Header from './components/Header.vue';
import router from './router';
import { useBackButton } from '@ionic/vue';

useBackButton(10, () => {
  router.replace('/');
})


</script>


<template>
  <ion-app>
    <ion-page>
      <Header />
      <router-view :key="$route.fullPath" />
    </ion-page>
  </ion-app>
</template>



<style>
@import './theme/variables.css';
</style>