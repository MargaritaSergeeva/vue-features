export default {
  install(app, options) {
    let current = 'ru';

    const changeLanguage = (name) => {
      current = name;
    };

    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$i18n = (key) =>
      // app.title -> [app, title]
      // eslint-disable-next-line implicit-arrow-linebreak
      key.split('.').reduce((words, k) => words[k] || '=== UNKNOWN ===', options[current]);

    app.provide('changeI18N', changeLanguage);
  },
};
