<template>
  <form @submit.prevent="addMentor">
    <input type="text" placeholder="Name" v-model="name" required />
    <input type="text" placeholder="Email" v-model="email" required />
    <input type="text" placeholder="Password" v-model="password" required />
    <select-dropdown
      name="cities"
      id="city-select"
      placeholder="Please select a city"
      :data="cities"
      isRequired="true"
    ></select-dropdown>
    <button>Register</button>
    <div v-if="error">Error</div>
  </form>
  <!--    TODO: city api? -->
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
          email: email.value,
          password: password.value,
          city: city.value,
        }),
      })
        .then((response) => {
          if (response.ok) {
            name.value = "";
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
    return { name, email, password, city, addMentor, error, cities };
  },
};
</script>
