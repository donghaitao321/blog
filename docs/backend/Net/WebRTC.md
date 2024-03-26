# WebRTC

WebRTC 标准概括介绍了两种不同的技术：**媒体捕获设备**和**点对点连接**。

- 媒体捕获设备包括：

    摄像机和麦克风（使用 `navigator.mediaDevices.getUserMedia()` 来捕获 `MediaStreams`）

    屏幕捕获设备（使用 `navigator.mediaDevices.getDisplayMedia()`）。

- 点对点连接：

    由 `RTCPeerConnection` 接口处理。这是在 WebRTC 中两个对等方之间建立和控制连接的中心点。

