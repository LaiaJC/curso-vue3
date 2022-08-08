<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "SlotsTablecomponent",

        // PREGUNTA DEL PUTO MILLÓN: PORQUÉ ME ENTRA EN CONFLICTO LOS PUTOS PROPS???????
        // props : {
        // },

        data() : Record<string, unknown>{

            return {
                name    : "hola me llamo SlotComponent",
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

        <slot name="header" v-bind:roger="name" v-bind:pau="surname">
            <h4>HEADER por defecto para el padre</h4>
        </slot>

        <slot name="footer" v-bind:roger="name" v-bind:pau="surname">
            <h4>FOOTER por defecto para el padre</h4>
        </slot>

    <!-- <slot name="header" v-bind:roger="name" v-bind:pau="surname">
        <h4>Footer por defecto para el padre</h4>
    </slot>

    <slot name="footer" v-bind:roger="name" v-bind:pau="surname">
        <h4>Footer por defecto para el padre</h4>
    </slot> -->

</template>