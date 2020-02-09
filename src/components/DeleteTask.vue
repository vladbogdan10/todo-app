<template>
  <button @click="deleteTask" type="button" class="nes-btn is-error"><b>&#10005;</b></button>
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
        .delete(`/delete/${this.$attrs.task.id}`)
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
button {
  align-self: center;
  width: 3em;
  margin-left: 0.8em;
}
</style>