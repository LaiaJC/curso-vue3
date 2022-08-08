<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "SlotTableHeaderComponent",

        // props : {
        // },

        data() : Record<string, unknown>{

            return {
                name    : "hola me llamo SlotTableHeaderComponent",
                surname : "mi apellido",
            };

        },

        computed : {
        },

        watch : {
        },

        methods : {
        },

        beforeCreate() : void {
        },

        created  () : void {
        },

    } );

</script>

<template>

    <div class="slot-component" style="width: 100%;">

        <slot name="headerTable" v-bind:roger="name" v-bind:pau="surname">
            <h4>HEADER desde un SLOT.</h4>
            <h6>Content desde SLOT.</h6>
        </slot>

    </div>

</template>


