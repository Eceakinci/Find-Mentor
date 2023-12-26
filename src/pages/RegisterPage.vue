<template>
  <base-card>
    <register-form></register-form>
  </base-card>
</template>

<script>
import RegisterForm from "../components/RegisterForm.vue";
import BaseCard from "../components/BaseCard.vue";
export default {
  components: {
    BaseCard,
    RegisterForm,
  },
  setup() {},
};
</script>
