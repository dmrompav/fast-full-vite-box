import 'tailwindcss/tailwind.css';

// import translatePlugin from '@/plugins/i18n';
import { pinia } from '@/plugins/pinia';
import { router } from '@/plugins/router';
import viewUi from '@/plugins/view-ui';

import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App)

app
  // .use(translatePlugin)
  .use(pinia)
  .use(router)
  .use(viewUi)

  .mount('#app');
