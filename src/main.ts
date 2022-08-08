import * as vue from "vue";
import App from "./components/App.vue";
import BootstrapVue3 from 'bootstrap-vue-3';
import  'bootstrap/dist/css/bootstrap.css';
import  'bootstrap-vue-3/dist/bootstrap-vue-3.css';

/* Si necesitamos pasar parametros/propiedades al componente */
const vm : vue.App = vue.createApp( {

    render : () => {
        return vue.h( App, {

            title : "Training Vue3",

        } );
    },

} );

vm.directive("borde-rojo-global", {
    created: (el, binding) => {
        // console.log('-----------------------------');
        // console.log('estoy dentro de la directiva!');
        // console.log(el);
        // console.log(binding);
        // console.log('-----------------------------');
        el.style.border = "1px solid red";
    },
    
});

vm.use(BootstrapVue3);

// vm.directive('highlight', {
//     bind(el, binding, vnode) {
//       el.style.background = binding.value
//     }
// });

/* Avoid warning message. The message indicates set this config to not show it */
vm.config.unwrapInjectedRef = true;
vm.mount("#bootstrap");