// [R17 绑定] 绑定按钮事件
document.getElementById('testBtn').addEventListener('click', function() {
    // [I15 存储] 测试 localStorage 写入
    try {
        localStorage.setItem('test', 'value');
        console.log('存储成功');
    } catch (e) {
        // [F12 捕获] 处理异常
        console.error('存储失败', e);
    }
});
