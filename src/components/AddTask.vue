<template>
  <div class="nes-field">
    <div class="add-task">
      <input v-model.lazy="data.name" @keyup.enter="saveTask" type="text" id="name_field" class="nes-input" placeholder="Create new task" />
      <button @click="saveTask" type="button" class="nes-btn is-primary">Add Task</button>
    </div>
    <label>
      <input v-model="data.progress" type="checkbox" class="nes-checkbox" />
      <span>set in progress</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      data: {
        name: '',
        done: null,
        progress: null
      },
      errors: [],
      response: []
    };
  },

  methods: {
    saveTask() {
      this.$http
        .post('/create', this.data)
        .then(response => this.response.push(response))
        .catch(e => this.errors.push(e))
        .finally(() => {
          if (!this.errors.length) {
            this.updateTaskList();
            this.clearInputs();
          }
        })
    },

    clearInputs() {
      this.data = {
        name: '',
        done: null,
        progress: null
      }
    },

    updateTaskList() {
      this.$emit('updateTaskList')
    }
  }
};
</script>

<style lang="scss" scoped>
  .add-task {
    display: flex;
    margin: 1.5em 0 0.8em 0;

    button {
      margin-left: 0.8em;
    }
  }
</style>
