import { defineStore } from "pinia";

const useCounter = defineStore("counter", {
  state: () => {
    return {
      counter: 1,
    };
  },
  getters: {
    current: (state) => state.counter,
    // 带参数的getter
    double: (state) => {
      return (num: number) => state.counter * num;
    },
  },
  actions: {
    async funcXXX() {
      // await xxx
    },
  },
});

export default useCounter;
