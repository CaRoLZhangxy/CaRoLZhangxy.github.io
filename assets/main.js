// 使用浏览器当前年份；主页内容在禁用 JavaScript 时仍然可用。
document.getElementById('year').textContent = new Date().getFullYear();
