<template>
  <footer class="section">
    <div class="container">
      <div class="columns is-multiline" style="border-bottom: 1px solid #dee2e6;">
        <!-- Logo -->
        <div class="column is-3 mb-5">
          <a class="mb-4 is-inline-block" href="#">
            Creader
          </a>
          <p class="has-text-grey-dark mb-6">Where your journay starts <br /> and dream comes true</p>
          <div>
            <a class="mr-3 is-inline-block" href="#">
              <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
            </a>
            <a class="mr-3 is-inline-block" href="#">
              <font-awesome-icon :icon="['fab', 'facebook']"  size="lg"/>
            </a>
            <a class="mr-3 is-inline-block" href="#">
              <font-awesome-icon :icon="['fab', 'youtube']"  size="lg"/>
            </a>
            <a class="mr-3 is-inline-block" href="#">
              <font-awesome-icon :icon="['fab', 'linkedin']"  size="lg"/>
            </a>
            <a class="is-inline-block" href="#">
              <font-awesome-icon :icon="['fab', 'twitter']"  size="lg"/>
            </a>
          </div>
        </div>
        <!-- Links -->
        <div class="column is-9">
          <div class="columns is-multiline">
            <div class="column is-6 is-3-desktop mb-5">
              <h4 class="is-size-4 has-text-weight-bold mb-4">Company</h4>
              <ul>
                <li class="mb-2"><a class="button is-white" href="#" @click="toRouter('about')">About Us</a></li>
                <li class="mb-2"><a class="button is-white" href="#">Careers</a></li>
                <li class="mb-2"><a class="button is-white" href="#">Press</a></li>
                <li><a class="button is-white" href="#">Blog</a></li>
              </ul>
            </div>
            <div class="column is-6 is-3-desktop mb-5">
              <h4 class="is-size-4 has-text-weight-bold mb-4">Pages</h4>
              <ul>
                <li class="mb-2"><a class="button is-white" href="#">Login</a></li>
                <li class="mb-2"><a class="button is-white" href="#">Register</a></li>
                <li class="mb-2"><a class="button is-white" href="#">Add list</a></li>
                <li><a class="button is-white" href="#">Contact</a></li>
              </ul>
            </div>
            <div class="column is-6 is-3-desktop mb-5">
              <h4 class="is-size-4 has-text-weight-bold mb-4">Legal</h4>
              <ul>
                <li class="mb-2"><a class="button is-white" href="#">Terms</a></li>
                <li class="mb-2"><a class="button is-white" href="#">About Us</a></li>
                <li class="mb-2"><a class="button is-white" href="#">Team</a></li>
                <li><a class="button is-white" href="#">Privacy</a></li>
              </ul>
            </div>
            <div class="column is-6 is-3-desktop mb-5">
              <h4 class="is-size-4 has-text-weight-bold mb-4">Resources</h4>
              <ul>
                <li class="mb-2"><a class="button is-white" href="#">Blog</a></li>
                <li class="mb-2"><a class="button is-white" href="#">Service</a></li>
                <li class="mb-2"><a class="button is-white" href="#">Product</a></li>
                <li><a class="button is-white" href="#">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Bottom -->
      <div class="pt-5 has-text-centered">
        <p>All rights reserved © TheBookShelf Limited 2021</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer_component",

  methods: {

    toRouter(dest) {
      // to router destination
      this.$router.push({name: dest});
    }
  }
}
</script>

<style scoped>

</style>
