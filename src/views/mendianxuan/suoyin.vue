<template>
  <div>
      <van-datetime-picker
  v-model="currentDate"
  type="date"
  :min-date="minDate"
  @confirm="add"
/>
  </div>
</template>

<script>
export default {
  data() {
    return {
        currentDate: new Date(),
        minDate:new Date()
    }
  },
  methods: {
      add(obj){
          console.log(obj);
      }
  },
  components: {

  }
}
</script>

<style scoped>

</style>
