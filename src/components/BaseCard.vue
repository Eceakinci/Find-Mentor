<template>
  <div :class="'mx-8 my-auto rounded-md p-4 shadow-md ' + additionalClasses">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["additionalClasses"],
  setup() {},
};
</script>
