<template>
  <button @click="deleteTask" type="button" class="nes-btn is-error"><b>&#10005;</b></button>
</template>

<script>
export default {
  name: "DeleteTask",

  data() {
    return {
      response: [],
      errors: [],
      taskId: ''
    }
  },

  methods: {
    deleteTask(e) {
      this.taskId = e.target.parentNode.attributes.id.value;

      // this.$http
      //   .delete(`http://localhost:8000/todo/delete/${taskId}`)
      //   .then()
      //   .catch(e => this.errors.push(e))
      this.deleteFromList()
    },

    deleteFromList() {
      this.$emit('deleteTask', this.taskId)
    }
  }
};
</script>