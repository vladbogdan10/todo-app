<template>
  <div class="taskOptions">
    <button @click="taskOptions" type="button" :class="{active: showOptions}">...</button>
    <div v-show="showOptions" class="nes-container is-rounded">
      <UpdateStatus :index="index" :task="task" @updateStatus="updateStatus" />
      <DeleteTask :index="index" :taskId="task.id" @removeFromList="removeFromList"/>
    </div>
  </div>
</template>

<script>
import UpdateStatus from "./UpdateStatus";
import DeleteTask from "./DeleteTask";

export default {
  name: 'TaskOptions',
  components: {
    DeleteTask,
    UpdateStatus
  },

  props: {
    index: Number,
    task: Object
  },

  data() {
    return {
      showOptions: false
    }
  },

  methods: {
    taskOptions() {
      this.showOptions = !this.showOptions
    },

    close(e) {
      if (!this.$el.contains(e.target)) {
        this.showOptions = false
      }
    },

    updateStatus(index, data) {
      this.$emit('updateStatus', index, data)
    },

    removeFromList(index) {
      this.$emit('removeFromList', index)
    }
  },

  mounted () {
    document.addEventListener('click', this.close)
  },

  beforeDestroy () {
    document.removeEventListener('click',this.close)
  }
}
</script>

<style lang="scss" scoped>
  .taskOptions {
    position: relative;

    button {
      border: none;
      padding: 0;
      color: #666666;
      outline: none;
    }

    .active {
      font-weight: bold;
      color: black;
    }

    .nes-container {
      position: absolute;
      right: 0;
      z-index: 1;
      min-width: 300px;
      background: white;
    }
  }
</style>
