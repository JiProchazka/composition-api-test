<template>
  <div>{{ hub.message }}</div>
</template>
<script>
import { inject } from "@vue/composition-api";
export default {
  name: "test",
  setup() {
    const hub = inject("HUB");

    return { hub };
  },
};
</script>
