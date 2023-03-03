import { App } from 'vue';

import {
  Button
} from 'view-ui-plus';

export default {
  install(app: App<Element>) {
    app.component('Button', Button)
  }
};
