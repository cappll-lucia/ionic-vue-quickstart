<template>
  <ion-page>
      <div id="container">
        <strong>Welcome to Ionic Vue Quickstart</strong>
        <p>
          This is an example of a simple app using Ionic Vue.
        </p>
        <p>
          For more information on how to get started, check out the
          <a href="https://ionicframework.com/docs/vue/quickstart">Ionic Vue Quickstart Guide</a>.
        </p>
        <hr>
        <p>Check out components page to test vue-router
        <router-link to="/components">Components</router-link>
        </p>
      </div>
  </ion-page>
</template>

<script setup>
import {IonPage } from '@ionic/vue';
</script>

<style scoped>
#container {
  text-align: center;
  color: rgb(55, 160, 87);
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
