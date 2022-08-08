<script lang="ts">

    import * as vue from "vue";
    import ComponenteFilaLista from "./ComponenteFilaLista.vue";
    import SlotHeaderComponent from "./SlotHeaderComponent.vue";
    import SlotFooterComponent from "./SlotFooterComponent.vue";

    export default vue.defineComponent( {

        name  : "ViewList",

        components: {
            ComponenteFilaLista,
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
    } );

</script>

<template>

    <SlotHeaderComponent style="margin-bottom:1.5rem;">
        <template v-slot:headerTable></template>
    </SlotHeaderComponent>

    <div class="w-100">
        <ComponenteFilaLista v-on:evento_fila="updateIdsApp" v-for="(currentTask,taskId) in listTodo" v-bind:currentTask="currentTask" v-bind:key="taskId"></ComponenteFilaLista>
    </div>

    <SlotFooterComponent style="margin-top:2rem;">
        <template v-slot:footerTable="bindValueSlotComp">
            <!-- <p>{{bindValueSlotComp}}</p> -->
            <h4>{{bindValueSlotComp['roger']}}</h4>
            <h6>{{bindValueSlotComp['pau']}}</h6>
        </template>
    </SlotFooterComponent>

</template>