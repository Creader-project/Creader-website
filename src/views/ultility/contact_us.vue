<template>
  <section class="section">
    <div class="container">
      <div class="is-vcentered columns is-multiline">
        <div class="column is-6 mb-5">
          <h2 class="mb-5 is-size-3-mobile has-text-weight-bold is-size-2">We believe that everyone can produce a good
            IP.</h2>
          <h4 class="is-size-5 has-text-weight-bold">Contact Us</h4>
          <p class="has-text-grey-dark mb-1">contact.us@creader.io</p>
          <h4 class="is-size-5 has-text-weight-bold">Follow US!</h4>
          <div class="mb-1">
            <a class="mr-3 is-inline-block" href="#">
              <font-awesome-icon :icon="['fab', 'instagram']" size="lg"/>
            </a>
            <a class="mr-3 is-inline-block" href="#">
              <font-awesome-icon :icon="['fab', 'facebook']" size="lg"/>
            </a>
            <a class="mr-3 is-inline-block" href="#">
              <font-awesome-icon :icon="['fab', 'youtube']" size="lg"/>
            </a>
            <a class="mr-3 is-inline-block" href="#">
              <font-awesome-icon :icon="['fab', 'linkedin']" size="lg"/>
            </a>
            <a class="is-inline-block" href="#">
              <font-awesome-icon :icon="['fab', 'twitter']" size="lg"/>
            </a>
          </div>
        </div>
        <div class="column is-5 ml-auto">
          <form action="#">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Name"></div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input" type="email" placeholder="E-mail"></div>
            </div>
            <div class="field">
              <div class="control"><textarea class="textarea has-fixed-size" name="message" cols="30" rows="10"
                                             placeholder="Your Message..."></textarea></div>
            </div>
            <button class="button is-primary is-fullwidth">Action</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact_us"
}
</script>

<style scoped>

</style>