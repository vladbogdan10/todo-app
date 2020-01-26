<template>
  <div class="nes-field">
    <label for="name_field">Add new task</label>
    <div class="add-task">
      <input v-model.lazy="data.name" type="text" id="name_field" class="nes-input" />
      <button @click="saveTask" type="button" class="nes-btn is-primary">Add Task</button>
    </div>
    <label>
      <input type="checkbox" class="nes-checkbox" />
      <span>Set in progress</span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: '',
        status: ''
      },
      errors: [],
      response: []
    };
  },

  methods: {
    saveTask() {
      this.$http
        .post('http://localhost:8000/todo/create', this.data)
        .then(response => this.response.push(response))
        .catch(e => this.errors.push(e))
        .finally(() => {
          if (!this.errors.length) {
            this.updateView();
          }
        })
    },

    updateView() {
      this.$emit('getInputData', this.data)
    }
  }
};
</script>

<style lang="scss" scoped>
  .add-task {
    display: flex;
    margin-bottom: 10px;

    button {
      margin-left: 10px;
      min-width: 150px;
    }
  }
</style>