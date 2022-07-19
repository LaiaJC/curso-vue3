<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "ComponenteClicksButton",
        data(){
            return {
                clicks: 0 as number,
                cliks: 0 as number,
                contador: 0 as number,
                textColor:{
                    color: 'black',
                    backgroundColor: 'silver'
                }
            }
        },
        props : {
            text : {
                type : String as vue.PropType<string>,
                // required: true
            }
        },
        methods: {

            userClick(){
                this.clicks += 1;
            },
            doLogic(){
                console.log('entra a do logic!');
                console.log(this.thePerson.name);
                this.todojunto = this.thePerson.name + "_" + this.thePerson.surname + "_" + this.thePerson.age + "_" + Math.random();
                console.log(this.todojunto);
                return this.todojunto;

            }
        }
    });

</script>

<template>

    <div>
        
        <h1 :style="textColor">{{text}} Texto (desde el componente)!</h1>

        <br/>
        <h3>@click="contador++"</h3>
        <hr />
        <p>Contador del usuario: {{ contador }}</p>
        <button @click="contador++;" class="classCssVue">Count is: {{ contador }}</button>

        <br/><br/><br/>
        <h3>v-on:clivk="userClick()"</h3>
        <hr />
        <p>Clicks del usuario: {{ clicks }}</p>
        <button v-on:click="userClick()">Haz click, porfa!</button> 

    </div>
  
</template>

<style scoped>
.classCssVue {
  font-weight: bolder;
}

.trendingBox {
    border: 1px solid blue;
    background: #fff;
    margin: 0 1px 0 0;
    width: calc(100% / 3 - 3px);
    float: left;
}
</style>