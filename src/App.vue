<template>
  <div class="container">
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
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import AppAlert from '@/components/AppAlert';
// eslint-disable-next-line import/extensions
import AppBlock from '@/components/AppBlock';
import alertMixin from '@/alertMixin';

export default {
  mixins: [alertMixin],
  components: {
    AppAlert,
    AppBlock,
  },
};
</script>
