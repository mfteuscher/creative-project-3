<template>
<div class="wrapper">
    <table>
        <thead>
            <th>State</th>
            <th>Abbr.</th>
            <th>Founded</th>
        </thead>
        <tr v-for="state in states" :key="state.name" @click="goToAbout(state)">
            <td>{{ state.name }}</td>
            <td>{{ state.abbreviation }}</td>
            <td> {{ state.date }}</td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    name: 'StateList',
    props: {
        states: Array
    },
    methods: {
        goToAbout(state) {
            this.$root.$data.currentState = state;
            this.$router.push("/about");
        }
    }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

th, td {
  padding: 10px;
  text-align: left;
}

table, th, td {
    border-bottom: 2px solid black;
    border-collapse: collapse;
}
table {
    width: 60%;
}
tr:hover {
    background-color: #42b983;

}


</style>