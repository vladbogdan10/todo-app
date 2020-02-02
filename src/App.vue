<template>
  <div id="app">
    <AddTask @getInputData="getInputData" />
    <section class="task-list nes-container is-error with-title">
      <h3 class="title">Tasks</h3>
      <Task :data="data" />
    </section>
  </div>
</template>

<script>
import AddTask from './components/AddTask.vue'
import Task from './components/Task.vue'

export default {
  name: 'app',
  components: {
    AddTask,
    Task
  },

  data() {
    return {
      data: [],
      errors: []
    }
  },

   created() {
    this.$http
      .get('http://localhost:8000/todo/list')
      .then(response => (this.data = response.data))
      .catch(e => this.errors.push(e))
  },

  methods: {
    getInputData(inputData) {
      this.data = [inputData, ...this.data]
    }
  }
}
</script>

<style lang="scss">
// @import '../node_modules/nes.css/css/nes.min.css';
$cursor-url: auto;
$cursor-click-url: auto;

// base
@import 'node_modules/nes.css/scss/base/index.scss';
@import 'node_modules/nes.css/scss/utilities';

//components
@import 'node_modules/nes.css/scss/form/inputs.scss';
@import 'node_modules/nes.css/scss/form/checkboxes.scss';
@import 'node_modules/nes.css/scss/elements/containers.scss';
@import 'node_modules/nes.css/scss/elements/buttons.scss';
@import 'node_modules/nes.css/scss/elements/text.scss';

#app {
  max-width: 990px;
  margin: 0 auto;
  margin-top: 1em;
}

body {
  font-size: 14px;
}

.task-list {
  margin-top: 3em;
}
</style>
