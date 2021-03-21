<template>
  <div class="home">
    <StateList :states="states" />
  </div>
</template>

<script>
// @ is an alias to /src
import StateList from "@/components/StateList.vue";
export default {
  name: "Home",
  components: {
    StateList
  },
  computed: {
    states() {
      return this.$root.$data.states;
    }
  }
};

</script>
