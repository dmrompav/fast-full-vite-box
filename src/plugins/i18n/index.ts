import { App } from 'vue';
import { TranslateResult, createI18n } from 'vue-i18n';
import * as locales from '@/lang';

export default {
  install(app: App<Element>) {
    // const { locale, messages } = window;

    const i18n = createI18n({
      locale: 'ru_RU',
      messages: {}
    })

    app.use(i18n);

    i18n.global.t('hello')

    app.mixin({
      computed: {
        $t(...args): TranslateResult | null {
          return args[0] ? i18n.global.t(...args) : null;
        }
      }
    })
  }
}
