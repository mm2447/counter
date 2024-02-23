const div = document.createElement("div");
div.className = "textbox";
div.style.width = "200px";
div.style.height = "300px";
div.style.padding = "8px";
div.style.backgroundColor = "#fff";
div.style.boxShadow = "-1px -1px 10px #ccc";
div.style.position = "fixed";
div.style.bottom = "0";
div.style.right = "0";
div.style.fontSize = "13px";
div.innerHTML = `
<div>
      <textarea class="textarea"></textarea>
      <p><span class="count">0</span>文字入力中</p>
    </div>
`;
document.body.appendChild(div);
const textarea = document.querySelector(".textarea");
const count = document.querySelector(".count");
textarea.addEventListener("keyup", () => {
  let sentence = textarea.value;
  count.innerHTML = sentence.length;
});
console.log("textbox");
