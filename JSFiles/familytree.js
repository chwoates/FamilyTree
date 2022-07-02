//Model
const nameList = ["Oates", "Carter", "Martin", "Fry", "Irby", "Stuart",
"Jones", "Davis"];
if (document.body.id == "mainpage") render();
//if (document.body.id == "backpage") backrender();



//View
function render(){
  for (let i = 0; i < 8; i++){
    const newButton = document.createElement('button');
    newButton.classList.add('tree-tab');
    newButton.innerHTML = nameList[i]; 
    newButton.id = nameList[i]; 
    newButton.onclick = changePage;
    document.getElementById("treetab").appendChild(newButton);
  } 
}

function backrender(){
  const img=document.createElement("img");
  img.src = "Tree.png";
  img.classList.add("trees");
  document.getElementById("treetrunk").appendChild(img);
}

//Controller
function changePage(e){
  window.location.href = "tree.html?name="+e.target.id;
}
