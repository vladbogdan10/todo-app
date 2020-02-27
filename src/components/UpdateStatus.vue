<template>
  <div>
    <label>
      <input v-on:change="switchStatus" v-model="taskStatus" type="radio" class="nes-radio" name="taskStatus" value="progress" />
      <span>Set in PROGRESS</span>
    </label>
    <label>
      <input v-on:change="switchStatus" v-model="taskStatus" type="radio" class="nes-radio" name="taskStatus" value="done" />
      <span>Set to DONE</span>
    </label>
    <label>
      <input v-on:change="switchStatus" v-model="taskStatus" type="radio" class="nes-radio" name="taskStatus" value="none" />
      <span>NONE</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'UpdateTask',

  data() {
    return {
      data: {
        name: '',
        progress: this.$attrs.task.inProgress,
        done: this.$attrs.task.done
      },
      taskStatus: '',
      errors: []
    };
  },

  methods: {
    switchStatus() {
      switch (this.taskStatus) {
        case 'progress':
          this.data.progress = true;
          this.data.done = false;
          break;
        case 'done':
          this.data.done = true;
          this.data.progress = false;
          break;
        case 'none':
          this.data.progress = false;
          this.data.done = false;
          break;
      }

      this.updateTask()
    },

    updateTask() {
      this.$http
        .put(`/update/${this.$attrs.task.id}`, this.data)
        .catch(e => this.errors.push(e))
        .finally(() => {
          if (!this.errors.length) {
            this.updateStatus()
          }
        })
    },

    updateStatus() {
      this.$emit("updateStatus", this.$attrs.index, this.data);
    }
  }
}
</script>
