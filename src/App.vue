<template>
  <div class="container">
    <div class="card"><h2>Миксины</h2></div>
    <app-alert
      v-if="alert"
      text="Это очень важное сообщение!"
      title="Внимание!"
      closable
      @close="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">
        {{alert ? 'Скрыть' : 'Показать'}} сообщение
      </button>
    </div>
    <app-block></app-block>
    <div class="card">
      <h2 v-color:[type]="myColor">Директивы</h2>
      <button class="btn" @click="myColor = myColor==='darkred' ? 'darkblue': 'darkred'">
        Поменять цвет
      </button>
      <button class="btn" @click="type = type ==='color' ? 'backgroundColor' : 'color'">
        Переключить тип
      </button>
      <div class="form-control">
        <label for="inp">Активный по умолчанию
          <input v-focus type="text" id="inp">
        </label>
      </div>
    </div>
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>
      <button class="btn" @click="changelang">{{ $i18n('app.changeBtn') }}</button>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import AppAlert from '@/components/AppAlert';
// eslint-disable-next-line import/extensions
import AppBlock from '@/components/AppBlock';
import alertMixin from '@/alertMixin';
import focusDerective from '@/focusDerective';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import colorDerective from '@/colorDerective';

export default {
  inject: ['changeI18N'],
  mixins: [alertMixin],
  directives: {
    focus: focusDerective,
    color: colorDerective,
  },
  components: {
    AppAlert,
    AppBlock,
  },
  data() {
    return {
      myColor: 'darkred',
      type: 'color',
      language: 'ru',
    };
  },
  methods: {
    changelang() {
      this.language = this.language === 'ru' ? 'en' : 'ru';
      this.changeI18N(this.language);
      this.$forceUpdate();
    },
  },
};
</script>
