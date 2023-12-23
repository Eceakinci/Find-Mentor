<template>
  <select
    :name="name"
    :id="id"
    :required="isRequired"
    @click="toggleSelect"
    :class="isOpened ? 'transition-[height]' : ''"
  >
    <option value="" disabled selected>{{ placeholder }}</option>
    <option v-for="item in data" :value="item.value">
      {{ item.value }}
    </option>
  </select>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["name", "id", "placeholder", "data", "isRequired"],
  setup() {
    const isOpened = ref(false);

    function toggleSelect() {
      isOpened.value = !isOpened.value;
    }
    return { toggleSelect, isOpened };
  },
};
</script>
