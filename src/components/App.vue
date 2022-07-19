<script lang="ts">

    import * as vue from "vue";
    import ComponenteH1 from "./ComponenteH1.vue";
    import ComponenteP from "./ComponenteP.vue";
    import ComponenteEjWatch from "./ComponenteEjWatch.vue";
    import ComponenteClicksButton from "./ComponenteClicksButton.vue";
    import ComponentePropComputada from "./ComponentePropComputada.vue";
    import ComponenteTableData from "./ComponenteTableData.vue";
    import ComponenteTableProperty from "./ComponenteTableProperty.vue";

    //Leer fichero de datos
    import todoObject from "./todoObject.json";

    //Interfaces
    import { ITodoDTO } from "./ITodoDTO";

    export default vue.defineComponent( {
        name : "App",
        components: {
            ComponenteH1: ComponenteH1,
            ComponenteP: ComponenteP,
            ComponenteEjWatch: ComponenteEjWatch,
            ComponenteClicksButton,
            ComponentePropComputada,
            ComponenteTableData,
            ComponenteTableProperty
        },
        beforeCreate: function(){
            console.log('dentro de la función beforeCreate');
            console.log(this);
        },
        created: function(){
            console.log('dentro de la función created!');
            console.log(this.$props);
            // setInterval( () => {
            //     this.persona1.age = Math.random();
            // }, 500);
        },
        data() {
            return {
                persona1: { 
                    name: 'Laia',
                    surname: 'Apellido',
                    age: 36
                },
                persona2: { 
                    name: 'David',
                    surname: 'Apellido',
                    age: 37
                },
                tasks: todoObject as ITodoDTO[],
                data: "" as string,
                idRow: "" as string
            }
        },
        methods: {
            updateFila(data:string):void {
                console.log('DENTRO DE UPDATE FILA');
                console.info('DATA: ');
                console.info(data);

                if(data[0] == 'delete'){
                    console.info('DELETE ROW!');
                    this.deleteRow(data[1]);
                } else if(data[0] == 'update'){
                    console.info('UPDATE ROW!');
                    this.updateRow(data[1]);
                }
            },
            deleteRow(idRow){
                console.log('dentro del método delete Row '+idRow);
                
            },
            updateRow(idRow){
                console.log('dentro del método update Row '+idRow); 
            }
        },
    });

</script>

<template>
    
    <div>

        <!-- <ComponenteClicksButton text="Texto desde App.vue!"></ComponenteClicksButton> -->
        <!-- <ComponenteP v-bind:thePerson=persona1></ComponenteP> -->
        <!-- <ComponenteP v-bind:thePerson=persona2></ComponenteP> -->
        <!-- <ComponenteH1 text="Texto desde App.vue para H1 Component!"></ComponenteH1> -->
        <!-- <ComponenteEjWatch></ComponenteEjWatch> -->
        <!-- <ComponentePropComputada v-bind:thePerson=persona1></ComponentePropComputada> -->
        <!-- <ComponentePropComputada v-bind:thePerson=persona2></ComponentePropComputada> -->
        <!-- <ComponenteTableData></ComponenteTableData> -->
        <ComponenteTableProperty v-bind:theTasksList="tasks" v-on:evento_fila_padre="updateFila"></ComponenteTableProperty>

    </div> 

</template>


<style>
    #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }
</style>
