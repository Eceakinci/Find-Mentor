<template>
  <div>
    <base-card>
      <div>{{ mentor.name }}</div>
      <div>{{ mentor.email }}</div>
    </base-card>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import BaseCard from "../components/BaseCard.vue";
import globalFunctions from "../globalFunctions";

export default {
  components: { BaseCard },
  props: ["id"],
  setup(props) {
    const mentorId = ref(props.id);

    watch(props, () => {
      mentorId.value = props.id;
    });

    const mentor = ref({
      name: "",
      email: "",
    });

    const fetchData = async () => {
      try {
        let data = await globalFunctions.getData();
        data = Object.keys(data).map((k) => data[k]);
        data = data.find((mentor) => {
          return mentor.id === mentorId.value;
        });
        mentor.value.name = data.name;
        mentor.value.email = data.email;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return { mentor };
  },
};
</script>
