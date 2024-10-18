<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { io } from 'socket.io-client';
import { baseUrl, socketUrl } from '../../url'
const clientMessages = ref<number[]>([]);
const serverMessages = ref<number[]>([]);
const socket = ref();

const sendMessage = () => {
  const message = new Date().getTime();
  clientMessages.value.push(message);
  socket.value.emit('message', message);
};

onMounted(() => {
  socket.value = io(baseUrl, {
    path: socketUrl
  });

  socket.value.on('message', (msg: number) => {
    serverMessages.value.push(msg);
  });
});

onUnmounted(() => {
  socket.value.off('message');
});

</script>

<template>
  <h1>fetch/Get</h1>
  <button @click="sendMessage">sendMessage</button>
  <hr>
  <div class="message-content">
    <div class="item">
      clientMessages：
      <div v-for="item in clientMessages" :key="item">
        {{ item }}
      </div>
    </div>
    <div class="item">
      serverMessages：
      <div v-for="item in serverMessages" :key="item">
        {{ item }}
      </div>
    </div>
  </div>

</template>
<style>
.message-content {
  display: flex;
  gap: 12px;
}

.item {
  flex: 1;
  border: 1px solid #ccc;
  height: 100%;
  padding: 12px;
}
</style>