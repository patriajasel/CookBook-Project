
const ul = document.querySelector("ul");
let input = document.getElementById("recipe-ingred");

let tags = [];

function createTag() {
  ul.querySelectorAll("li").forEach(li => li.remove());
  tags.slice().reverse().forEach(tag => {
    let liTag = `<li>${tag}<i class='bx bx-x' onclick="remove(this, '${tag}')"></i></li>`;
    ul.insertAdjacentHTML("afterbegin", liTag);
  });
}

function remove(element, tag) {
  let index = tags.indexOf(tag);
  tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
  element.parentElement.remove();
}

function addTag(e) {
  if (e.key == "Enter") {
    let tag = e.target.value.replace(/\s+/g,'');
    if (tag.length > 1 && !tags.includes(tag)) {
      tag.split(',').forEach(tag=>{
        tags.push(tag);
        createTag();
      })
    }
    e.target.value="";
  }
}

input.addEventListener("keyup", addTag);
