<script setup lang="ts">
import { testGetUrl } from '../../url'
import { ref } from 'vue'
const res = ref('')
const request = async () => {
    try {
        const response = await fetch(testGetUrl)
        const resJson = await response.json()
        console.log(res)
        res.value = resJson
    } catch (error) {
        console.log('fetch/Get', error)
    }
}
</script>

<template>
    <h1>fetch/Get</h1>
    <button @click="request">request</button>
    <hr>
    <div>
        {{ res }}
    </div>
</template>
