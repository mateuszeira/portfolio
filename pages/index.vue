<template>
  <card>
    <img src="https://storage.googleapis.com/replit/images/1568917496694_0e7b83372ba6d598ac66619600655857.jpeg" alt="TheDrone7" class="pfp" />
    <div class="username">TheDrone7</div>
    <template v-slot:buttons>
      <card-button link="/about">About me</card-button>
      <card-button link="/projects">My projects</card-button>
    </template>
  </card>
</template>

<script>
  import card from '../components/card.vue';
  import CardButton from '../components/cardButton'
  export default {
    components: {
      CardButton,
      card
    }
  }
</script>

<style>
  .pfp {
    border-radius: 50% !important;
    width: 100%;
    max-width: 256px;
  }
  .username {
    text-align: center;
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: bold;
  }
</style>
