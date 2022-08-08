<script lang="ts">

    import * as vue from "vue";

    //Componentes
    import ViewTable from "./ViewTable.vue";
    import ViewList from "./ViewList.vue";

    export default vue.defineComponent( {

        name  : "RBSelectView",

        components : {
            ViewTable: ViewTable,
            ViewList: ViewList
        },
        data () : Record<string, any> {
            return {
                theRadioViewSelected : '0' as String,
                viewSelected         : '' as string,
                viewList             : false,
                viewTable            : false

            };
        },

        computed : {
            vistaSeleccionada : function() {
                switch (this.theRadioViewSelected) {
                    case '0':
                        return this.viewSelected = 'Ninguna VISTA seleccionada.';
                        this.viewList = false;
                        this.viewTable = false;
                        break;
                    case '1':
                        this.viewSelected = 'Vista TABLA';
                        this.viewList = false;
                        this.viewTable = true;
                        return this.viewSelected;
                        break;
                    case '2':
                        this.viewSelected = 'Vista LISTA';
                        this.viewList = true;
                        this.viewTable = false;
                        return this.viewSelected;
                        break;
                    default:
                        this.viewSelected = 'Error en la selección de la VISTA.';
                        this.viewList = false;
                        this.viewTable = false;
                }
            },
        },
        emit: ['evento_fila_top'],
        methods: {
            updateFila(data:string):void {
                this.$emit('evento_fila_top',data);
            },
        },
    });

</script>

<template>
    
    <div class="row mt-2 radioButtonComponent">
        <div class="col-12">
            <div class="row mt-1">
                <div id="titleRadio" class="col-auto">
                    <b>Seleccione VISTA:</b>
                </div>

                <div id="radioButtonTabla" class="col valueRB">
                    <input type="radio" id="rbTabla" value="1" v-model="theRadioViewSelected" />
                    <label for="rbTabla" style="margin-left: 5px;">Vista TABLA</label>
                </div>

                <div id="radioButtonLista" class="col valueRB">
                    <input type="radio" id="rbLista" value="2" v-model="theRadioViewSelected" />
                    <label for="rbLista" style="margin-left: 5px;">Vista LISTA</label>
                </div>

                <div id="vistaSeleccionada" class="col">
                    Vista seleccionada: {{ vistaSeleccionada }} 
                </div>
            </div>
            
            <hr/>

            <div class="row">
                <div class="col-12" v-if="viewTable === false && viewList === false">
                    Ninguna VISTA seleccionada.
                </div>
                <div class="col-12" v-else-if="viewTable === true && viewList === false">
                    <ViewTable v-on:evento_fila_padre="updateFila"/>
                </div>
                <div class="col-12" v-else>
                    <ViewList v-on:evento_fila_padre="updateFila"/>
                </div>
            </div>
            
        </div>
    </div>

</template>