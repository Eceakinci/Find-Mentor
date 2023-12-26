<template>
  <div class="flex justify-center">
    <form @submit.prevent="addMentor" class="flex w-96 flex-col items-start">
      <label for="name">Name</label>
      <input
        class="h-12 rounded-lg border-2 border-indigo-400/50 focus:outline-0"
        type="text"
        v-model="name"
        id="name"
        required
      />
      <label for="lastname">Last name</label>
      <input
        class="h-12 rounded-lg border-2 border-indigo-400/50 focus:outline-0"
        type="text"
        v-model="lastname"
        id="lastname"
        required
      />

      <label for="username">Username</label>
      <input
        class="h-12 rounded-lg border-2 border-indigo-400/50 focus:outline-0"
        type="text"
        v-model="username"
        id="username"
        required
      />

      <label for="email">Email</label>
      <input
        class="h-12 rounded-lg border-2 border-indigo-400/50 focus:outline-0"
        type="text"
        v-model="email"
        id="email"
        required
      />

      <label for="password">Password</label>
      <input
        class="h-12 rounded-lg border-2 border-indigo-400/50 focus:outline-0"
        type="text"
        v-model="password"
        id="password"
        required
      />
      <input
        class="h-12 rounded-lg border-2 border-indigo-400/50 focus:outline-0"
        type="text"
        placeholder="Confirm password"
        required
      />

      <!--    <select-dropdown-->
      <!--      name="cities"-->
      <!--      id="city-select"-->
      <!--      placeholder="Please select a city"-->
      <!--      :data="cities"-->
      <!--      isRequired="true"-->
      <!--    ></select-dropdown>-->
      <button>Register</button>
      <div v-if="error">Error</div>
    </form>
  </div>

  <!-- TODO: Re-enter password -->
  <!-- TODO: Email check regex - Email check if there is a user that holds that mail -->
  <!-- TODO: Error handling -->
</template>

<script>
import { onMounted, ref } from "vue";
import SelectDropdown from "../components/SelectDropdown.vue";
import globalFunctions from "../globalFunctions";

export default {
  components: { SelectDropdown },
  setup() {
    const name = ref("");
    const lastname = ref("");
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const city = ref("");
    const cities = ref("");
    const error = ref("");

    function addMentor() {
      fetch(import.meta.env.VITE_APP_MENTOR_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: new Date().toISOString(),
          name: name.value,
          lastname: lastname.value,
          username: username.value,
          email: email.value,
          password: password.value,
          city: city.value,
        }),
      })
        .then((response) => {
          if (response.ok) {
            name.value = "";
            lastname.value = "";
            username.value = "";
            email.value = "";
            password.value = "";
            city.value = "";
          } else {
            throw new Error("Could not save data");
          }
        })
        .catch((error) => {
          error.value = error;
        });
    }

    const fetchCity = async () => {
      try {
        cities.value = await globalFunctions.getCityData();
        cities.value.map((item) => (item.value = item.name));
        cities.value.sort((a, b) => a.value.localeCompare(b.value));
      } catch (error) {
        // TODO: General error function goes here
        console.log(error);
      }
    };
    onMounted(() => {
      fetchCity();
    });
    return {
      name,
      lastname,
      username,
      email,
      password,
      city,
      addMentor,
      error,
      cities,
    };
  },
};
</script>
