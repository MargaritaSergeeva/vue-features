import { createApp } from 'vue';
import App from './App.vue';
import './theme.css';
// eslint-disable-next-line import/order
import translatePlugin from '@/translatePlugin';

const app = createApp(App);

const ru = {
  app: {
    title: 'Как работают плагины во Vue?',
    changeBtn: 'Поменять язык',
  },
};

const en = {
  app: {
    title: 'How plugins work in Vue?',
    changeBtn: 'Toggle language',
  },
};

app.use(translatePlugin, { ru, en });

app.mount('#app');
