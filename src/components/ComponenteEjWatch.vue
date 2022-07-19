<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "ComponenteEjWatch",
        data(){
            return {
              textColor:{
                    color: 'black',
                    backgroundColor: 'silver'
                },
                num1: 5 as number,
                num2: 10 as number,
                question: "" as string,
                answer: "" as string
            }
        },

        watch: {

          question: function(newOperacion:string) {

            console.info('Observando la operación...');
            console.info(`new Operation: ${newOperacion}`);

            switch (newOperacion) {
              case 'sumar':
                this.getOperacion(newOperacion);
                break;
              case 'restar':
                this.getOperacion(newOperacion);
                break;
              case 'multiplicar':
                this.getOperacion(newOperacion);
                break;
              case 'dividir':
                this.getOperacion(newOperacion);
                break;
            }
          },
        },
        methods: {

            getOperacion(newOperacion){
              this.answer = 'Esperando la respuesta de la API...';
              setTimeout(() => {

                console.log('---------------');
                console.log(this.answer);
                console.log(newOperacion);
                console.log('---------------');
                
                if(newOperacion == 'sumar'){
                  console.log(this.num1 + this.num2);
                  this.answer = this.num1 + this.num2;
                  return this.answer;
                } else if(newOperacion == 'restar'){
                  console.log(this.num1 - this.num2);
                  this.answer = this.num1 - this.num2;
                  return this.answer;
                } else if(newOperacion == 'multiplicar'){
                  console.log(this.num1 * this.num2);
                  this.answer = this.num1 * this.num2;
                  return this.answer;
                } else if(newOperacion == 'dividir'){
                  console.log(this.num1 / this.num2);
                  this.answer = this.num1 / this.num2;
                  return this.answer;
                }
              }, 1500);
            },
        }
    });

</script>

<template>

    <div>
    <h1 :style="textColor">Ejercicio WATCH</h1>

    <br />
    <input type="text" v-model="question">
    <br /><br />
    <div>Respuesta: {{answer}}</div>
    </div>
  
</template>