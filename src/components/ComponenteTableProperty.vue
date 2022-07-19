<script lang="ts">

    import * as vue from "vue";
    import ComponenteFilaTabla from "./ComponenteFilaTabla.vue";

    //Interfaces
    import { ITodoDTO } from "./ITodoDTO";

    export default vue.defineComponent( {

        name : "ComponenteTableProperty",
        components: {
            ComponenteFilaTabla: ComponenteFilaTabla
        },
        props : {
            theTasksList: {
                type : Array as vue.PropType<ITodoDTO[]>,
                required: true
            }
        },
        
        data() : Record<string,unknown>{
            return{
                idfila : "" as string
            };
        },
        emit: ['evento_fila_padre'],
        methods: {
            updateIdsApp(data:string):void {
                //Recojo los datos que me envía el NIETO (ComponenteFilaTabla.vue)
                console.log(data);
                //Me comunico con el PADRE (App.vue)
                this.$emit('evento_fila_padre',data);
            }
        }
    });

</script>

<template>

    <div>
        <table id="tableComp" class="table table-striped table-hover">
            <thead class="thead-dark" role="rowgroup">
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">COMPLETED</th>
                    <th scope="col">COMPLETE</th>
                    <th scope="col">DELETE</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="(task,taskId) in theTasksList" v-bind:key="taskId">
                    <td>{{ task.id }}</td>
                    <td>{{ task.name }}</td>
                    <td>{{ task.completed }}</td>
                </tr> -->
                <ComponenteFilaTabla v-on:evento_fila="updateIdsApp"></ComponenteFilaTabla>
            </tbody>
        </table>
    </div>
  
</template>