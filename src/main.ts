import { createApp } from 'vue';
import App from './App.vue';

window.acceptVueApp(() => {
    const app = createApp(App);
    return app;
});
