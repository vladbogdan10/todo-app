<template>
  <div class="nes-container is-rounded with-title">
    <span v-if="task.done" class="title nes-text is-success">Done</span>
    <span v-if="task.inProgress" class="title nes-text is-primary">Progress</span>
    <div class="task">
      <p v-text="name" @blur="updateText" v-on:dblclick="edit" :class="{done: task.done}" class="nes-pointer"></p>
      <TaskOptions :index="index" :task="task" @updateStatus="updateStatus" @removeFromList="removeFromList" />
    </div>
  </div>
</template>

<script>
import TaskOptions from './TaskOptions.vue'

export default {
  name: "Task",
  components: {
    TaskOptions
  },

  props: {
    task: Object,
    index: Number
  },

  data() {
    return {
      name: this.task.name,
      errors: []
    }
  },

  methods: {
    updateTaskName() {
      this.$http
        .put(`/update/${this.task.id}`, {name: this.name})
        .catch(e => this.errors.push(e))
        .finally(() => {
          if (this.errors.length > 0) {
            this.name = this.task.name;
          }
        })
    },

    updateText(e) {
      this.name = e.target.innerText;

      e.target.contentEditable = false;

      this.updateTaskName()
    },

    edit(e) {
      e.target.contentEditable = true
      e.target.focus()
    },

    updateStatus(index, data) {
      this.$emit('updateStatus', index, data)
    },

    removeFromList(index) {
      this.$emit('removeFromList', index)
    }
  }
}
</script>

<!-- SCOPED STYLES -->
<style lang="scss" scoped>
  .nes-container.with-title>.title {
    font-size: 12px;
  }

  .task {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    justify-content: space-between;

    p {
      outline: none;
      margin-bottom: 0;
    }
  }

  .done {
    text-decoration: line-through;
    color:darkgrey
  }
</style>
