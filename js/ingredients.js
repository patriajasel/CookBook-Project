
let ul = document.getElementById("ul-ingred");
let input = document.getElementById("recipe-ingred");
let procedures = document.getElementById("procedures");
let recipeStep = document.getElementById("recipe-steps");
let addStep = document.getElementById("add-new");
let removeStep = document.getElementById("remove-step");

let tags = [];
let steps = [];

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

addStep.onclick = function(){
  var newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('placeholder', 'Add new step...');
  procedures.appendChild(newField);
}

removeStep.onclick = function() {
  var input_tags = procedures.getElementsByTagName('input');
  if(input_tags.length > 1){
    procedures.removeChild(input_tags[(input_tags.length) - 1]);
  }
}
