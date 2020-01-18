<template>
  <div id="app">
    <AddTask />
    <section class="task-list nes-container with-title">
      <h3 class="title">Tasks</h3>
      <Task />
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
  }
}
</script>

<style lang="scss">
// @import '../node_modules/nes.css/css/nes.min.css';
$cursor-url: auto;
$cursor-click-url: auto;

// base
@import 'node_modules/nes.css/scss/base/index.scss';
@import 'node_modules/nes.css/scss/utilities/rounded-corners-mixin.scss';

//components
@import 'node_modules/nes.css/scss/form/inputs.scss';
@import 'node_modules/nes.css/scss/elements/containers.scss';
@import 'node_modules/nes.css/scss/elements/buttons.scss';
@import 'node_modules/nes.css/scss/elements/text.scss';

#app {
  max-width: 990px;
  margin: 0 auto;
  margin-top: 1em;
}

.task-list {
  margin-top: 3em;
}
</style>
