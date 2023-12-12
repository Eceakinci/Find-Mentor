<template>
  <form class="container" @submit.prevent="addMentor">
    <input type="text" placeholder="Name" v-model="name" required>
    <input type="text" placeholder="Email" v-model="email" required>
    <input type="text" placeholder="Password" v-model="password" required>
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

    const error = ref('')
    function addMentor() {
      fetch(process.env.VUE_APP_MENTOR_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
              id: new Date().toISOString(),
              name: name.value,
              email: email.value,
              password: password.value
        })
      }).then(response => {
        if (response.ok) {
          console.log('selam')
          name.value = ''
          email.value = ''
          password.value = ''
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