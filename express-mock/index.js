const express = require('express');
const { port, host, prefix, sendResponse } = require('./src/utils');
const http = require('http');
const sseRouter = require('./src/eventSource.js') // 引入 sse.js 模块
const initializeSocket = require('./src/socket');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(prefix, sseRouter); // 使用 sseRouter

const server = http.createServer(app);
initializeSocket(server); // 初始化 Socket.IO

app.get(prefix + '/testGet', (req, res) => {
  sendResponse(res, { data: { msg: 'get' } });
});

app.post(prefix + '/testPost', (req, res) => {
  sendResponse(res, { data: { msg: 'post' } });
});

// 启动服务器
server.listen(port, () => {
  console.log(`${host}:${port}`);
  console.log(`${host}:${port}/mock/testGet`);
  console.log(`${host}:${port}/mock/testPost`);
});
