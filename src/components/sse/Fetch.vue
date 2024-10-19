<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { sseFetchUrl } from "../../url";

const chatText = ref("");
const controller = ref();

const getRes = async () => {
  try {
    controller.value = new AbortController(); // 创建一个 AbortController 实例 取消请求
    const res = await fetch(sseFetchUrl, {
      method: "get",
      signal: controller.value.signal,
    });
    const reader = res.body?.getReader();
    let text = "";
    while (reader) {
      const { value, done } = await reader.read();
      const chars = new TextDecoder().decode(value);
      if (done) {
        break;
      }
      const dataArray = chars.trim().split("\n\n");
      const jsonObjects = dataArray.map((data) => {
        const jsonString = data.substring("data: ".length);
        return JSON.parse(jsonString);
      });
      jsonObjects.forEach((item) => {
        text += item.content;
      });
      chatText.value = text;
    }
  } catch (error) {
    console.log("error", error);
  }
};

onMounted(() => {
  getRes();
});

onUnmounted(() => {
  controller.value.abort();
});
</script>

<template>
  <h1>sse/Fetch</h1>
  <hr />
  <div>
    {{ chatText }}
  </div>
</template>


<style scoped></style>