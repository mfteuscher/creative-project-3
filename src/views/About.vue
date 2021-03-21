<template>
  <div>
    <router-link to="/" tag="img" src="/images/back_arrow.png" height=50px id="link"></router-link>
    <div id="info">
    <State :state="state" />
    </div>
  </div>
  
</template>

<script>
import State from "../components/State"
export default {
  name: "CurrentState",
  components: {
    State
  },
  computed: {
    state() {
      return this.$root.$data.currentState;
    }
  }
}
</script>

<style scoped>
  #link {
    position: absolute;
    left: 0;
    padding-left: 10px;
    padding-top: 10px;
  }
  #info {
    width: 80%;
    display: flex;
    margin: 0 auto;
    padding: 10px;
  }
</style>

