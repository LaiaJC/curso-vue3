<script lang="ts">

    import * as vue from "vue";
    import ComponenteFilaTabla from "./ComponenteFilaTabla.vue";
    import SlotHeaderComponent from "./SlotHeaderComponent.vue";
    import SlotFooterComponent from "./SlotFooterComponent.vue";

    //Interfaces
    // import { ITodoDTO } from "./ITodoDTO";

    export default vue.defineComponent( {

        name : "ViewTable",
        components: {
            ComponenteFilaTabla,
            SlotHeaderComponent,
            SlotFooterComponent
        },       
        data() : Record<string,unknown>{
            return{
                idfila : "" as string,
                listTodo: this.propTodo
            };
        },
        emit: ['evento_fila_padre'],
        methods: {
            updateIdsApp(data:string):void {
                this.$emit('evento_fila_padre',data);
            },
        },
        inject: ['propTodo'],
    });

</script>

<template>

    <div>

        <SlotHeaderComponent>
            <template v-slot:headerTable></template>
        </SlotHeaderComponent>
        
        <table id="tableComp" class="table table-striped table-hover">
            <thead class="thead-dark" role="rowgroup">
                <tr>
                    <th scope="col" style="text-align: center;">#ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">COMPLETED</th>
                    <th scope="col" style="text-align: center;">COMPLETE</th>
                    <th scope="col" style="text-align: center;">DELETE</th>
                    <th scope="col" style="text-align: center;">EDIT</th>
                </tr>
            </thead>
            <tbody>
                <ComponenteFilaTabla v-on:evento_fila="updateIdsApp" v-for="(currentTask,taskId) in listTodo" v-bind:currentTask="currentTask" v-bind:key="taskId"></ComponenteFilaTabla>
            </tbody>
        </table>

        <SlotFooterComponent>
            <template v-slot:footerTable="bindValueSlotComp">
                <h4>{{bindValueSlotComp['roger']}}</h4>
                <h6>{{bindValueSlotComp['pau']}}</h6>
            </template>
        </SlotFooterComponent>
    </div>
  
</template>