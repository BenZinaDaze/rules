let url = $request.url; // 视频连接
let headers = $request.headers;
if (headers.hasOwnProperty("authorization")) {
    $notify(">_ 视频链接已经捕获成功 🛠", ">_ 点击一下复制视频链接 🔞", "", {
        "open-url": url.replace("https","alook"),
        "update-pasteboard": url
    });
    $done({path: "/null", headers : headers});
} else { 
    $done();
}
