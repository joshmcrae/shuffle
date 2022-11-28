<template>
  <component :is="screen"/>
</template>

<script>
import { mapState } from 'pinia'
import { useNavStore } from '../store/nav'
import Meals from './Meals.vue'
import Meal from './Meal.vue'
import Shuffle from './Shuffle.vue'

export default {
  components: {
    Meals,
    Meal,
    Shuffle
  },
  computed: mapState(useNavStore, ['screen'])
}
</script>