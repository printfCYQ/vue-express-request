<script setup lang="ts">
import { testGetUrl } from '../../url'
import axios from 'axios'
import { ref } from 'vue'
const res = ref('')
const request = async () => {
    try {
        const response = await axios.get(testGetUrl);
        res.value = response.data
    } catch (error) {
        console.log('fetch/Get', error)
    }
}
</script>

<template>
    <h1>axios/Get</h1>
    <button @click="request">request</button>
    <hr>
    <div>
        {{ res }}
    </div>
</template>
