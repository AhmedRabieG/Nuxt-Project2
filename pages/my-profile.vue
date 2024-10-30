<script setup>

definePageMeta({

    layout: "custom-layout"
})
const { sayHello } = useUtils()
sayHello()

</script>
<template>
    <div class="profile">
        <h1>
            My Profile Page
        </h1>
        <img src="@/assets/images/wel2.png" alt="wel2">
        
    </div>
</template>
<style>

</style>