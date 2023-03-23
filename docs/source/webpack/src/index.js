import { getBlogPosts } from "./data";
import "./style.css";
import IMG from "./assets/images/123.svg"; // 打包时替换成真实的路径

const blogs = getBlogPosts();
const ul = document.createElement("ul");

blogs.forEach((blogs) => {
  const li = document.createElement("li");
  li.innerText = blogs;
  ul.appendChild(li);
});
document.body.appendChild(ul);

const image = document.createElement("img");
image.src = IMG;
document.body.prepend(image);

const h1 = document.createElement("h1");
h1.innerText = "Test Webpack";
document.body.prepend(h1);
