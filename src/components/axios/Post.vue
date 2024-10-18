<script setup lang="ts">
import { testPostUrl } from '../../url'
import { ref } from 'vue'
const res = ref('')
import axios from 'axios'
const request = () => {
    axios.post(testPostUrl, {
        userId: 1,
    }).then((response) => {
        res.value = response.data
    }).catch((err) => {
        console.log('axios/Post', err)
    })
}
</script>

<template>
    <h1>axios/Post</h1>
    <button @click="request">request</button>
    <hr>
    <div>
        {{ res }}
    </div>
</template>
