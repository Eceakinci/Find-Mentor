<template>
  <container-card>
    <base-card
      v-for="mentor in mentors"
      :key="mentor.id"
      additionalClasses="min-w-64"
    >
      <mentor-item
        :name="mentor.name"
        :id:="mentor.id"
        :email="mentor.email"
      ></mentor-item>
      <router-link :to="'/mentors/' + mentor.id">Contact Mentor</router-link>
    </base-card>
  </container-card>
</template>

<script>
import { onMounted, ref } from "vue";
import MentorItem from "../components/MentorItem.vue";
import BaseCard from "../components/BaseCard.vue";
import globalFunctions from "../globalFunctions";
import ContainerCard from "../components/ContainerCard.vue";

export default {
  components: { ContainerCard, BaseCard, MentorItem },
  setup() {
    const mentors = ref(null);
    const fetchData = async () => {
      try {
        mentors.value = await globalFunctions.getData();
      } catch (error) {
        // TODO: General error function goes here
        console.log(error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return { mentors };
  },
};
</script>
