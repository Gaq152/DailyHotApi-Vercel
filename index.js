import serveHotApi from "dailyhot-api";

// 获取端口，优先使用环境变量，否则使用 3000
const PORT = process.env.PORT || 3000;

// 启动服务
serveHotApi(PORT);

