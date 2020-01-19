<template>
  <div class="nes-field">
    <label for="name_field">Add new task</label>
    <input v-model.lazy="data.name" type="text" id="name_field" class="nes-input" />
    <button @click="saveTask" type="button" class="nes-btn is-primary">Add</button>
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
        // eslint-disable-next-line no-console
        .then(response => this.response.push(response))
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
};
</script>