<script lang="ts">

    import * as vue from "vue";
    import { IUserDTO } from "./IUserDTO";

    export default vue.defineComponent( {

        name : "ComponentePropComputada",
        data(){
            return {
                clicks: 0 as number,
                textColor:{
                    color: 'black',
                    backgroundColor: 'silver'
                },
                todojunto: "" as string,
            }
        },
        props : {
            thePerson: {
                type : Object as vue.PropType<IUserDTO>,
                required: true
            }
        },
        computed: {
            nombreyapellidos: function():string {
                return this.thePerson.name + "_" + this.thePerson.surname + "_" + this.thePerson.age + "_" + Math.random()
            },
            clicksnumber: function():string{

                if(this.clicks % 2 == 0){
                    //es par
                    console.log(this.clicks);
                    return this.thePerson.name + "_" + this.thePerson.surname + "_" + this.thePerson.age + "_" + Math.random();
                } else {
                    //es impar
                    console.log(this.clicks);
                    return this.thePerson.surname + "_" + this.thePerson.name + "_" + this.thePerson.age + "_" + Math.random();
                }
            }
        },
    });

</script>

<template>

    <div>
        <h1 :style="textColor">Ejercicio PROPIEDAD COMPUTADA</h1>
        <br />

        <p>DATOS DEL OBJETO:</p>
        <p>{{ thePerson.name }}</p>
        <p>{{ thePerson.surname }}</p>
        <p>{{ thePerson.age }}</p>

        <br/>
        <p>Nombre y apellidos des de propiedad computada: "{{ nombreyapellidos }}"</p>

        <br/>
        <p>El orden de los atributos del objeto saldrá diferente según el número de clicks sea PAR o IMPAR:</p>
        <button v-on:click="clicks++">Num clicks: {{clicks}}</button>
        <br /><br />
        <div>{{clicksnumber}}</div>

    </div>       

</template>