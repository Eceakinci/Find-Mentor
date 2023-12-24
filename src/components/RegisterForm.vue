<template>
  <div class="flex w-full justify-center">
    <form @submit.prevent="addMentor" class="flex w-96 flex-col">
      <div class="flex h-12 flex-row justify-between divide-y divide-blue-200">
        <input
          class="border-1 rounded-md border-solid border-gray-950 focus:border focus:border-pink-700 focus:outline-0"
          type="text"
          placeholder="First Name"
          v-model="name"
          required
        />
        <input type="text" placeholder="Last Name" required />
      </div>

      <input class="h-12" type="text" placeholder="Username" required />

      <input
        class="h-12"
        type="text"
        placeholder="Email"
        v-model="email"
        required
      />
      <input
        class="h-12"
        type="text"
        placeholder="Password"
        v-model="password"
        required
      />
      <input class="h-12" type="text" placeholder="Confirm password" required />

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
