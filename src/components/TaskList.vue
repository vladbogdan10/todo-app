<template>
  <section class="task-list nes-container is-error with-title">
    <h3 class="title">Tasks</h3>
    <Task v-bind="$props" />
  </section>
</template>

<script>
import Task from '../components/Task.vue'

export default {
  name: "TaskList",
  components: {
    Task
  },

  props: {
    data: Array
  }
};
</script>