<template>
  <base-card v-for="mentor in mentors" :key="mentor.id">
    <mentor-item
        :name="mentor.name"
        :id:="mentor.id"
        :email="mentor.email"
    ></mentor-item>
    <router-link :to="'/mentors/' + mentor.id">Contact Mentor</router-link>
  </base-card>
  <div class="text-3xl font-bold underline">ANAN</div>

  <div v-for="city in cities" :key="city.id" class="text-3xl font-bold underline">{{city.name}}</div>
</template>

<script>
import { onMounted, ref} from "vue";
import MentorItem from "../components/MentorItem.vue";
import BaseCard from "../components/BaseCard.vue";
import globalFunctions from "../globalFunctions";
export default {
  components: { BaseCard, MentorItem },
  setup() {
    const mentors = ref(null)
    const cities = ref('')
    const fetchData = async () => {
      try {
        mentors.value = await globalFunctions.getData()
      } catch (error) {
        // TODO: General error function goes here
        console.log(error)
      }
    }
    const fetchCity = async () => {
      try {
        cities.value = await globalFunctions.getCityData()
      } catch (error) {
        // TODO: General error function goes here
        console.log(error)
      }
    }
    onMounted(() => {
      fetchData()
      fetchCity()
    })

    return { mentors, cities }
  }
}
</script>