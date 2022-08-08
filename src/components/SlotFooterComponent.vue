<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "SlotTableFooterComponent",

        // props : {
        // },

        data() : Record<string, unknown>{

            return {
                name    : "FOOTER SlotTableFooterComponent.",
                surname : "Content desde SLOT, mediante v-bind.",
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
        <slot name="footerTable" v-bind:roger="name" v-bind:pau="surname">
        </slot>
    </div>

</template>


