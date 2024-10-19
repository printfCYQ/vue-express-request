<script setup lang="ts">
import AxiosGet from "./components/axios/Get.vue";
import AxiosPost from "./components/axios/Post.vue";
import FetchGet from "./components/fetch/Get.vue";
import FetchPost from "./components/fetch/Post.vue";
import ScoketExample from "./components/scoket/Example.vue";
import SseEventSource from "./components/sse/EventSource.vue";
import SseFetch from "./components/sse/Fetch.vue";

import { markRaw, ref } from "vue";
type ListItem = {
  name: string;
  com: any;
};
const list: Array<ListItem> = [
  { name: "fetch-get", com: FetchGet },
  { name: "fetch-post", com: FetchPost },
  { name: "axios-get", com: AxiosGet },
  { name: "axios-post", com: AxiosPost },
  { name: "scoket-example", com: ScoketExample },
  { name: "sse-fetch", com: SseFetch },
  { name: "sse-eventSource", com: SseEventSource },
];

const componentIs = ref(markRaw(FetchGet));

const handleClickNav = (item: ListItem) => {
  componentIs.value = markRaw(item.com);
};
</script>

<template>
  <div class="container">
    <div class="nav">
      <div
        class="nav-item"
        v-for="item in list"
        :key="item.name"
        @click="handleClickNav(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="content">
      <component :is="componentIs" />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 12px;
  box-sizing: border-box;
}

.nav {
  display: flex;
  flex-wrap: wrap;
}

.nav-item {
  padding: 6px 12px;
  margin: 12px;
  background-color: #ccc;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 12px;
  box-sizing: border-box;
  overflow: auto;
}
</style>
