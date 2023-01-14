import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const foo = ref("bar");

  return {
    foo,
  };
});
