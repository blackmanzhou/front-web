<template>
    <div id="star-rate">
      <ul class="ul-flex">
          <li v-for="index in 5" :key="index" :class="index <= score? 'color-font-yellow': 'color-font-grey'">&#10029;</li>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'StarRateComponent',
    props: {
        score: {
            type: Number,
            default: 5
        }
    },
    data() {
        return {
            parentScore: 5
        }
    },
    created() {
    }
}
</script>

<style scoped>

</style>


