<template>
  <div>list of mentors</div>
  <div>mentor item goes here</div>
</template>

<script>
import {onMounted, ref} from "vue";
export default {
  setup() {
    const mentors = ref([])
    onMounted(() => {
      fetch(process.env.VUE_APP_MENTOR_URL)
          .then((response) => {
            console.log(response)
            if (response.ok) {
              return response.json()
            }
          }).then((data) => { //Bu then amaci response.json dondugunde calisacak
        const results = []
        for (const id in data) {
          results.push({id: id, name: data[id].name, rating: data[id].rating})
        }
        console.log(results)
        mentors.value = results
      })
          .catch((error) => {
            this.error = error
          })
    })
  }
}
</script>