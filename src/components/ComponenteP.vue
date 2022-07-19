<script lang="ts">

    import * as vue from "vue";
    import { IUserDTO } from "./IUserDTO";

    export default vue.defineComponent( {

        name : "ComponenteP",
        data(){
            return {
                contador: -1 as number,
                textColor:{
                    color: 'black',
                    backgroundColor: 'silver'
                },
                todojunto: "" as string,
                name: "LaiaD" as string,
                surname: "ApellidoD" as string,
                age: 40 as number,
            }
        },
        
        created: function(){
            console.log('dentro de la función created');
            console.log(this.$props);
            //setInterval( () => {
                // this.contador += 1;
                console.log('DENTRO DEL MÉTODO CREATED!');
                this.contador++;
            //}, 2000);
        },
        props : {
            thePerson: {
                type : Object as vue.PropType<IUserDTO>,
                required: true
            }
        },

        methods: {
            doLogic(){
                console.log('entra a do logic!');
                console.log(this.thePerson.name);
                this.todojunto = this.thePerson.name + "_" + this.thePerson.surname + "_" + this.thePerson.age + "_" + Math.random();
                console.log(this.todojunto);
                return this.todojunto;

            }
        }

    } );

</script>

<template>

    <div>
    
      <h1 :style="textColor">Ejercicio P</h1>
      
      <br/>
      <p>Datos des del data() --> return:</p>
      <p>{{name + "____" + surname + "____" + age + "____" + Math.random()}}</p>

      <br/>
      <p>DATOS DEL OBJETO:</p>
      <p>{{ thePerson.name }}</p>
      <p>{{ thePerson.surname }}</p>
      <p>{{ thePerson.age }}</p>

      <br />
      <button type="button" class="btn btn-primary" v-on:click="doLogic()">Haz click, porfa!</button>

      <br/><br/>
      <p>{{ todojunto }}</p>
        
    </div>

  
</template>