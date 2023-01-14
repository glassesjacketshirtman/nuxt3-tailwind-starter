<template>
  <button class="bg-rose-500" v-bind="$attrs">
    <slot />
  </button>
</template>

<script lang="ts" setup>
type Props = {
  loading: boolean;
  variant?: "primary" | "secondary";
};

withDefaults(defineProps<Props>(), {
  variant: "primary",
});
</script>
