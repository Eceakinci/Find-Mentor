<template>
  <div
    :name="name"
    :id="id"
    :required="isRequired"
    @click="toggleSelect"
    class="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-pink-900 focus:border-blue-500 focus:ring-blue-500"
  >
    <ul v-if="opened">
      <li value="">{{ placeholder }}</li>
      <li v-for="item in data" :value="item.value">
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["name", "id", "placeholder", "data", "isRequired"],
  setup() {
    const opened = ref(false);

    function toggleSelect() {
      opened.value = !opened.value;
    }
    return { toggleSelect, opened };
  },
};
</script>
