<script lang="ts">

    import * as vue from "vue";

    //Slots
    import SlotHeaderComponent from "./SlotHeaderComponent.vue";
    import SlotFooterComponent from "./SlotFooterComponent.vue";

    //Interfaces
    import { ITodoDTO } from "./ITodoDTO";

    export default vue.defineComponent( {

        name : "ModalComponent",
        components: {
            // SlotFooterModalComponentVue: SlotFooterModalComponentVue
            SlotHeaderComponent,
            SlotFooterComponent
        },
        data() {
            return {
                modalShow: false,
                completed: 'Sí, completada!',
                notCompleted: 'No, por completar.',
                taskName: this.theTask.name,
                taskDescription: this.theTask.description,
                currTask: [],
                checkedStyles: [],
                colorBlack: false,
                colorRed: false
            }
        },
        props: 
        {
            theTask : {
                type: Object as vue.PropType<ITodoDTO>,
                required: false,
                default: ""
            },
            toggle: {
                type: Boolean as vue.PropType<boolean>,
                required: true
            }
        },
        emit: ['evento_update_tarea'],
        methods: {

            doFocus(taskid) : void {
                this.$refs[`myInputRef_${taskid}`].focus();
            },

            changeRowData(id,name,description){
                return [
                    this.currTask['id'] = id,
                    this.currTask['name'] = name,
                    this.currTask['description'] = description
                ];
            },

            getClass(){

                if(this.colorBlack == false && this.colorRed == false){
                    return '';
                }

                if(this.colorBlack == true && this.colorRed == true){
                    return '';
                }

                if(this.colorBlack == true && this.colorRed == false){
                    return 'bold';
                }

                if(this.colorBlack == false && this.colorRed == true){
                    return 'red';
                }
                
            }
        },
        computed: {
            bold: function() {
                return {
                    'bold': this.colorBlack
                }
            },
            red: function() {
                return {
                    'red': this.colorRed
                }
            }
        }
    } );

</script>

<template>

    <b-modal size="lg" v-bind:title="'TAREA '+theTask.id+' - '+theTask.description" no-enforce-focus :id="'modal-tasks_'+theTask.id" hide-footer hide-backdrop content-class="shadow" v-model="modalShow">
        <form class="stack-small">

            <b-container fluid>
                <b-row class="mb-2">
                    <SlotHeaderComponent>
                        <template v-slot:headerTable></template>
                    </SlotHeaderComponent>
                </b-row>
            </b-container>

            <b-container fluid>
                <b-row>
                    <b-col sm="6">
                        <b-row>
                             <b-col sm="1" class="text-center">
                                <input type="checkbox" value="food" v-on:change="colorBlack = !colorBlack">
                            </b-col>
                            <b-col sm="11">
                                <label>Black labels: </label>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col sm="6">
                        <b-row>
                            <b-col sm="1" class="text-center">
                                <input type="checkbox" value="food" v-on:change="colorRed = !colorRed">
                            </b-col>
                            <b-col sm="11">
                                <label>Red labels: </label>
                            </b-col>
                        </b-row>
                    </b-col>
                   
                </b-row>
            </b-container>

            <b-container fluid class="mt-2">
                
                <b-row>
                    <b-col sm="3" class="align-self-center">
                        <label v-bind:class="getClass()">Name: </label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="taskName"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="mt-2">
                    <b-col sm="3" class="align-self-center">
                        <label v-bind:class="getClass()">Description: </label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="taskDescription" :ref="`myInputRef_${theTask.id}`"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="mt-2">
                    <b-col sm="3" class="align-self-center">
                        <label v-bind:class="getClass()">Is completed? </label>
                    </b-col>
                    <b-col sm="9" v-if="toggle">
                        <b-form-input disabled="true" v-model="completed" />
                    </b-col>
                    <b-col sm="9" v-else>
                        <b-form-input disabled="true" v-model="notCompleted" />
                    </b-col>
                </b-row>

            </b-container>

            <b-container fluid>
                <b-row class="mt-3">
                    <SlotFooterComponent>
                        <template v-slot:footerTable="bindValueSlotComp">
                            <h4>{{bindValueSlotComp['roger']}}</h4>
                            <h6>{{bindValueSlotComp['pau']}}</h6>
                        </template>
                    </SlotFooterComponent>
                </b-row>
            </b-container>

            <div class="w-100 text-align-right mt-2">
                <b-button variant="outline-danger" data-bs-dismiss="modal">
                    Cerrar
                </b-button>
                <b-button variant="outline-success" data-bs-dismiss="modal" style="margin-left: 5px;" 
                v-on:click="$emit('evento_update_tarea',changeRowData(theTask.id,taskName,taskDescription));">
                    Guardar
                </b-button>
            </div>

        </form>
    </b-modal>

</template>