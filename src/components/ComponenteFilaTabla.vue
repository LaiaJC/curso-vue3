<script lang="ts">

    import * as vue from "vue";

    //Interfaces
    import { ITodoDTO } from "./ITodoDTO";

    //Leer fichero de datos
    import toDoObject from "./todoObject.json";

    export default vue.defineComponent( {

        name : "ComponenteFilaTabla",
        props : {
            currentaction : {
                type: String as vue.PropType<string>,
                required: false,
                default: ""
            }
        },
        data() {
            return {
                tasks: toDoObject as ITodoDTO[],
                action: "" as string
            }
        },
        emit: ['evento_fila'],
        methods: {
            print( id, event : Event ) : void {
                // console.log(id);
                // console.log(event);
            },

            doActionFila(id,currAc){
                console.log('Dentro de do Action Fila');
                console.info('id '+id);
                return [this.action = currAc, id];
            }
        }
    } );

</script>

<template>
    <tr class="align-middle" v-for="task in tasks" v-bind:key="task.id">
        <td>{{ task.id }}</td>
        <td>{{ task.name }}</td>
        <td v-if="task.completed === true">
            Sí (Completada)
        </td>
        <td v-else>
            No (Por completar)
        </td>
        <!-- <td>{{ task.completed }}</td> -->
        <td><button v-bind:id="'idButtonComplete_'+task.id" v-on:click="print('idButtonComplete_'+task.id,$event);$emit('evento_fila',doActionFila('idButtonComplete_'+task.id,'update'))" class="btn btn-success">Complete</button></td>
        <td><button v-bind:id="'idButtonDelete_'+task.id" v-on:click="print('idButtonDelete_'+task.id,$event);$emit('evento_fila',doActionFila('idButtonDelete_'+task.id,'delete'))" class="btn btn-danger">Delete</button></td>
    </tr>
</template>