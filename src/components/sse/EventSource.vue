<script setup lang="ts">
import { onMounted, ref } from "vue";
import { baseUrl, sseEventSourceUrl } from "../../url";

const textList = ref<Array<string>>([]);

const eventSource = ref<EventSource>();

onMounted(async () => {
  eventSource.value = new EventSource(baseUrl + sseEventSourceUrl);
  eventSource.value.onmessage = function (event) {
    const data = JSON.parse(event.data);
    textList.value.push(
      `Message: ${data.message}, Timestamp: ${data.timestamp}`
    );
  };

  eventSource.value.onerror = function (error) {
    console.log("EventSource failed: ", error);
  };
});
</script>

<template>
  <h1>sse/EventSource</h1>
  <hr />
  <div v-for="item in textList" :key="item">
    {{ item }}
  </div>
</template>


<style scoped></style>