<script lang="ts">

    import * as vue from "vue";
    import ModalComponent from "./ModalComponent.vue";

    //Interfaces
    import { ITodoDTO } from "./ITodoDTO";

    export default vue.defineComponent( {

        name : "ComponenteFilaLista",
        components: {
            ModalComponent: ModalComponent
        },
        data() {
            return {
                action: "" as string,
                toggle: this.currentTask.completed
            }
        },
        props: {
            currentTask: {
                type: Object as vue.PropType<ITodoDTO>,
                required: true
            }
        },
        emit: ['evento_fila'],
        methods: {
            doActionFila(id,currAc){
                return [this.action = currAc, id];
            },
            openModal(){
                let self = this;               
                self.modalShow = true;
            },
            updateRowTask(data) {
                let idT : number = data[0];
                let nameT : string = data[1];
                let descriptionT : string = data[2];

                this.$refs[`refTaskName_${idT}`].innerText = nameT;
                this.$refs[`refTaskDescription_${idT}`].innerText = descriptionT;
            },
            focusFunc(currIdTask){
                 // SE PUEDE APLICAR EL FOCUS DE LAS DOS MANERAS:
                this.$refs[`refModal_${currIdTask}`].doFocus(currIdTask);
                //this.$refs[`refModal_${taskid}`][0].$refs[`myInputRef_${taskid}`].focus();
            },
            toggleButton() {
                // console.log(toggleValue);
                if(this.toggle == true){
                    //Completed
                    this.toggle = false;
                    // console.log(this.toggle);
                    return this.toggle;
                } else {
                    //Not completed.
                    this.toggle = true;
                    // console.log(this.toggle);
                    return this.toggle;
                }
            }
        },
    } );

</script>

<template>

    <ul :id="`row_${currentTask.id}`" style="margin-top: 5rem;">

        <li :ref="`refTaskName_${currentTask.id}`">{{ currentTask.name }}

            <ul>
                <li>{{ currentTask.id }}</li>
                <li :ref="`refTaskDescription_${currentTask.id}`">{{currentTask.description}}</li>
                <li v-if="toggle">Sí (Completada)</li>
                <li v-else>No (Por completar)</li>
                <li style="list-style-type: none; margin-top: 0.5rem;">
                    <div style="width:100%;">
                        <div v-if="toggle" style="width:auto; float:left; margin-right:1rem;">
                            <b-button variant="success" v-bind:id="'idButtonComplete_'+currentTask.id" v-on:click="$emit('evento_fila',doActionFila(currentTask.id,1));toggleButton();">
                                Completed
                            </b-button>
                        </div>
                        <div v-else style="width:auto; float:left; margin-right:1rem;">
                            <b-button variant="outline-success" v-bind:id="'idButtonComplete_'+currentTask.id" v-on:click="$emit('evento_fila',doActionFila(currentTask.id,1));toggleButton();">
                                Complete
                            </b-button>
                        </div>
                        <div style="width:auto; float:left; margin-right:1rem;">
                            <b-button variant="outline-danger" v-bind:id="'idButtonDelete_'+currentTask.id" v-on:click="$emit('evento_fila',doActionFila(currentTask.id,0))">
                                Delete
                            </b-button>
                        </div>
                        <div style="width:auto; float:left; margin-right:1rem;">
                            <b-button v-b-modal="'modal-tasks_'+currentTask.id" v-bind:id="'idButtonEdit_'+currentTask.id" v-on:click="openModal();" class="btn btn-secondary">
                                Edit
                            </b-button>
                            
                            <ModalComponent v-bind:toggle="toggle" v-bind:theTask="currentTask" :ref="`refModal_${currentTask.id}`" v-on:evento_update_tarea="updateRowTask" @shown="focusFunc(currentTask.id)"/> 
                        </div>
                    </div>
                </li>
            </ul>
        </li>
    </ul> 

</template>