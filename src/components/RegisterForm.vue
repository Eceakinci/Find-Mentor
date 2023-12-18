<template>
  <form class="container" @submit.prevent="addMentor">
    <input type="text" placeholder="Name" v-model="name" required>
    <input type="text" placeholder="Email" v-model="email" required>
    <input type="text" placeholder="Password" v-model="password" required>
    <input type="text" placeholder="City" v-model="city" required>
<!--    TODO: city api? -->
    <!-- TODO: Re-enter password -->
    <!-- TODO: Email check regex - Email check if there is a user that holds that mail -->
    <button>Register</button>
    <!-- TODO: Error handling -->
    <div v-if="error">Error</div>
  </form>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const city = ref('')

    const error = ref('')
    function addMentor() {
      fetch(import.meta.env.VITE_APP_MENTOR_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
              id: new Date().toISOString(),
              name: name.value,
              email: email.value,
              password: password.value,
              city: city.value
        })
      }).then(response => {
        if (response.ok) {
          name.value = ''
          email.value = ''
          password.value = ''
          city.value = ''
        } else {
          throw new Error('Could not save data')
        }
      }).catch((error) => {
        error.value = error
      })
    }
    return { name, email, password, addMentor, error }
  }
}
</script>

<style scoped>
.container {

}
</style>