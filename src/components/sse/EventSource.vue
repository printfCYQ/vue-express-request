<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { baseUrl, sseEventSourceUrl } from '../../url'

const text = ref('')

const eventSource = ref<EventSource>();

onMounted(async () => {
    console.log('object');
    eventSource.value = new EventSource(baseUrl + sseEventSourceUrl);
    console.log(eventSource.value)
    eventSource.value.onmessage = function (event) {
        const data = JSON.parse(event.data);
        text.value += `Message: ${data.message}, Timestamp: ${data.timestamp}`;
    };

    eventSource.value.onerror = function (error) {
        console.log('EventSource failed: ', error);
    };
});

</script>

<template>
    <div>
        {{ text }}
    </div>
</template>


<style scoped></style>