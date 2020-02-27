<template>
  <input @click="deleteTask" type="button" class="nes-btn is-error" value="Delete">
</template>

<script>
export default {
  name: "DeleteTask",

  data() {
    return {
      response: [],
      errors: []
    }
  },

  methods: {
    deleteTask() {
      this.$http
        .delete(`/delete/${this.$attrs.taskId}`)
        .catch(e => this.errors.push(e))
        .finally(() => {
          if (!this.errors.length) {
            this.removeFromList()
          }
        })
    },

    removeFromList() {
      this.$emit('removeFromList', this.$attrs.index)
    }
  }
};
</script>

<style lang="scss" scoped>
  input[type=button] {
    margin-top: 1em;
    width: 100%;
  }
</style>
