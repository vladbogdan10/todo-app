<template>
  <section class="task-list">
    <h3 class="title">TASK LIST</h3>
    <ul>
      <li v-for="(task, index) in taskList" :key="task.id">
        <Task :task="task" :index="index" @updateStatus="updateStatus" @removeFromList="removeFromList" />
      </li>
    </ul>
  </section>
</template>

<script>
import Task from './Task.vue'

export default {
  name: "TaskList",
  components: {
    Task
  },

  props: {
    taskList: Array
  },

  methods: {
    updateStatus(index, data) {
      this.taskList[index].done = data.done
      this.taskList[index].inProgress = data.progress
    },

    removeFromList(index){
      this.$delete(this.taskList, index)
    }
  }
}
</script>

<style lang="scss" scoped>
  .task-list {
    margin-top: 4em;
  }

  ul {
    max-height: 60vh;
    overflow: scroll;
    padding: 0.5em 0 0 0;

    li {
      list-style: none;

      &:not(:first-child) {
        margin-top: 1.2em;
      }
    }
  }
</style>
