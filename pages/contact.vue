<template>
    <card>
      <div class="title">Contacts</div>
      <p>I can get in touch via my email - <a href="mailto:hsbhatia765@outlook.com">hsbhatia765@outlook.com</a> or shoot me a text on my <a href="tel:+917223076640">phone number</a>!</p>
      <hr />
      <div class="title">Social media</div>
      <p>I also use multiple social media platforms such as <a href="https://instagram.com/thedrone_7" target="_blank">Instagram</a>, <a href="https://twitter.com/TheDrone_7" target="_blank">Twitter</a> and <a href="https://discord.gg/4mmeuEV" target="_blank">Discord</a>. You can also contact me via WhatsApp using the same phone number as above.</p>
      <template v-slot:buttons>
        <card-button link="/about">Go back</card-button>
        <card-button link="/">Home</card-button>
        <card-button link="/projects">My projects</card-button>
      </template>
    </card>
</template>

<script>
  import Card from '../components/card'
  import CardButton from '../components/cardButton'
  export default {
    name: 'contact',
    components: { CardButton, Card }
  }
</script>

<style scoped>
  p {
    font-size: 1.1rem;
    font-family: 'Overpass', sans-serif;
  }
  .title {
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
  }
</style>
