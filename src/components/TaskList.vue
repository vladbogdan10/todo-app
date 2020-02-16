<template>
  <section class="task-list nes-container with-title">
    <h3 class="title">TASK LIST</h3>
    <ul>
      <li v-for="(task, index) in taskList" :key="task.id">
        <Task :task="task" :index="index" />
        <UpdateTask :index="index" :task="task" @updateStatus="updateStatus" />
        <DeleteTask :index="index" :taskId="task.id" @removeFromList="removeFromList" />
      </li>
    </ul>
  </section>
</template>

<script>
import Task from '../components/Task.vue'
import UpdateTask from '../components/UpdateTask.vue'
import DeleteTask from '../components/DeleteTask.vue'

export default {
  name: "TaskList",
  components: {
    Task,
    UpdateTask,
    DeleteTask
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
};
</script>

<style lang="scss" scoped>
  .task-list {
    margin-top: 3em;
  }

  ul {
    // padding-left: 0;
    padding: 2em 0 0 0;

    li {
      display: flex;
      list-style: none;

      &:not(:first-child) {
        margin-top: 1.2em;
      }
    }
  }
</style>