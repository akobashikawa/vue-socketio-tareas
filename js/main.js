import { createApp, h } from 'vue';

import router from "./router.js";
import App from "./components/App.js";

const app = createApp({
    render: () => h(App)
});

app.use(router);

app.mount("#app");