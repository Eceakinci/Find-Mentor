<template>
  <form class="container" @submit.prevent="addMentor">
    <input type="text" placeholder="Name" v-model="name">
    <input type="text" placeholder="Email" v-model="email">
    <input type="text" placeholder="Password" v-model="password">
    <!-- TODO: Re-enter password -->
    <button>Register</button>
  </form>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')

    function addMentor() {
      fetch(process.env.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
              id: new Date().toISOString(),
              name: name.value,
              email: email.value,
              password: password.value
        }
        )
      }).then(response => {
        if (response.ok) {
          // this.$emit('submitted')
        } else {
          throw new Error('Could not save data')
        }
      }).catch((error) => {
        console.log(error.message);
      })
    }
    return { name, email, password, addMentor }
  }

}
</script>

<style scoped>
.container {

}
</style>