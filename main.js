// 1. 基础变量
let pageName = "简易网页";

// 2. 打印信息到浏览器控制台
console.log("JS 文件加载成功！页面名称：", pageName);

// 3. 操作页面 DOM（修改页面文字）
function changeText() {
    // 获取页面中的h1标签
    const title = document.querySelector("h1");
    if (title) {
        title.innerText = "JS 已经生效啦";
    }
}

// 4. 页面加载完成后自动执行函数
window.onload = function () {
    changeText();
    alert("页面加载完毕，JS 运行成功");
};