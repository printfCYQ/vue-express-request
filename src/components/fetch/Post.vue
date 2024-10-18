<script setup lang="ts">
import { testPostUrl } from '../../url'
import { ref } from 'vue'
const res = ref('')
const request = () => {
    fetch(testPostUrl, {
        method: 'POST',
        body: JSON.stringify({
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json()).then((json) =>
        res.value = json
    ).catch((err) => {
        console.log('fetch/Post', err)
    })
}
</script>

<template>
    <h1>fetch/Post</h1>
    <button @click="request">request</button>
    <hr>
    <div>
        {{ res }}
    </div>
</template>
