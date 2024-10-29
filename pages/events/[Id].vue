<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'


const route = useRoute()
const router = useRouter()

console.log("route", route)
console.log("router", router)
console.log("router", router.options.routes)

// onMounted( ()=> {
//     console.log("router", router.options.routes )
// } )

// the context of my current app 
const nuxt = useNuxtApp();
console.log("nuxt", nuxt)

</script>
<template>
    <div class="events">
        <h1>
            Events ID Page 
            {{ $route.params.Id  }}
        </h1>
    </div>
</template>
<style>

</style>