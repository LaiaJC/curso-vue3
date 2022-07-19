<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "ComponenteH1",
        data(){
            return {
                textColor:{
                    color: 'black',
                    backgroundColor: 'silver'
                }
            }
        },
        props : {
            text : {
                type : String as vue.PropType<string>,
                required: true
            }
        }
    } );

</script>

<template>
    <h1 :style="textColor">Ejercicio H1</h1>
    <br />
    <h3>{{ text }}!</h3>
</template>