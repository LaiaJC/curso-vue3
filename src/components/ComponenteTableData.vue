<script lang="ts">

    import * as vue from "vue";
    import ComponenteFilaTabla from "./ComponenteFilaTabla.vue";

    //Interfaces
    import { ITodoDTO } from "./ITodoDTO";

    //Leer fichero de datos
    import toDoObject from "./todoObject.json";

    export default vue.defineComponent( {

        name : "ComponenteTableData",
        components: {
            ComponenteFilaTabla: ComponenteFilaTabla
        },
        data() {
            return {
                tasks: toDoObject as ITodoDTO[]
            }
        }
    } );

</script>

<template>

    <div>
        <table class="table table-striped table-hover" >
            <thead>
                <tr>
                    <th scope="col" style="border-bottom: 2px solid #dee2e6;">#ID</th>
                    <th scope="col" style="border-bottom: 2px solid #dee2e6;">NAME</th>
                    <th scope="col" style="border-bottom: 2px solid #dee2e6;">COMPLETED</th>
                    <th scope="col" style="border-bottom: 2px solid #dee2e6;">COMPLETE</th>
                    <th scope="col" style="border-bottom: 2px solid #dee2e6;">DELETE</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="task in tasks" v-bind:key="task.id">
                    <td>{{ task.id }}</td>
                    <td>{{ task.name }}</td>
                    <td>{{ task.completed }}</td>
                </tr> -->
                <ComponenteFilaTabla></ComponenteFilaTabla>
            </tbody>
        </table>
    </div>
  
</template>