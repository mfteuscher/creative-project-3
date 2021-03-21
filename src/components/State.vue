<template>
    <div id="all">
        <img :src="'/images/flags/'+state.abbreviation.toLowerCase()+'.png'">
        <div id="main">
            <h1> {{ state.name }} </h1>
            <h2> "{{ state.nickname }}" </h2>
            Established: {{ state.date }} <br>
            Capital: {{ state.capital }} <br>
            Flower: {{ state.flower }} <br>
            <div :data="data" v-for="value,property in data" :key="property">
                {{property}}: {{ value }}
            </div>
        </div>
        <div id="add">
            <h3>Add a New Fact</h3>
            <form>
                <input type="text" placeholder="Fact Type" id="facttype"> : 
                <input type="text" placeholder="Fact" id="fact"> <br><br>
                <input type="button" value="Submit" @click="addFact(state)">
            </form>
        </div>
    </div>
</template>


<script>
export default {
    name: "StateInfo",
    props: {
        state: Object,
    },
    computed: {
        data() {
            if (this.$root.$data.currentState.name === "initial") return "null";
            else return this.$root.$data.currentState.additional_data;
        }
    },
    methods: {
        addFact(state) {
            let factType = document.getElementById("facttype").value;
            let fact = document.getElementById("fact").value;
            if (factType === "" || fact === "") return;
            state.additional_data[factType] = fact;
            let data = this.$root.$data.states;
            let i;
            for (i = 0; i < data.length; ++i) {
                if (state.name === data[i].name) break;
            }
            this.$root.$data.states[i] = state;
            this.$root.$data.state = state;
            document.getElementById("facttype").value = "";
            document.getElementById("fact").value = "";
            this.$forceUpdate();
        }
    }
}
</script>

<style scoped>
    #all {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        width: 100%;
    }
    h1 {
        font-size: 70px;
        margin: 0;
    }
    h2 {
        margin: 0;
    }
    #main {
        text-align: center;
        width: 40%;
    }
    img {
        float: left;
        height: 300px;
        border: 5px solid grey;
    }
    #add {
        padding: 10px;
    }
</style>