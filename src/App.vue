<template>
  <div id="app">
    <h1>
      <i class="snes-jp-logo"></i>
      8-bit todo app
    </h1>
    <AddTask @updateTaskList="updateTaskList" />
    <TaskList :taskList="taskList" />
  </div>
</template>

<script>
import AddTask from './components/AddTask.vue'
import TaskList from './components/TaskList.vue'

export default {
  name: 'app',
  components: {
    AddTask,
    TaskList
  },

  data() {
    return {
      taskList: [],
      errors: []
    }
  },

  created() {
    this.$http
      .get('/list')
      .then(response => (this.taskList = response.data))
      .catch(e => this.errors.push(e))
  },

  methods: {
    updateTaskList() {
      this.$http
        .get('/list?last')
        .then(response => (this.taskList = [response.data, ...this.taskList]))
        .catch(e => this.errors.push(e))
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/nes.css/css/nes.min.css';
// $cursor-url: auto;
// $cursor-click-url: auto;

// base
// @import 'node_modules/nes.css/scss/base/index.scss';
// @import 'node_modules/nes.css/scss/utilities';

//components
// @import 'node_modules/nes.css/scss/form/inputs.scss';
// @import 'node_modules/nes.css/scss/form/checkboxes.scss';
// @import 'node_modules/nes.css/scss/form/radios.scss';
// @import 'node_modules/nes.css/scss/elements/containers.scss';
// @import 'node_modules/nes.css/scss/elements/buttons.scss';
// @import 'node_modules/nes.css/scss/elements/text.scss';

body {
    font-size: 14px;
  }

  #app {
    max-width: 990px;
    margin: 3em auto 0;
    padding: 0 2em;
  }
</style>
