const img = document.createElement("img");
const query = new URLSearchParams(location.search);
const famName = query.get("name");
console.log(famName);
img.src = "TreePhotos/"+famName+"Tree.png";
img.classList.add("trees");
document.getElementById("treetrunk").appendChild(img);
if(famName==="Oates"){
  const treeText = document.createElement("p");
  treeText.classList.add("tree-text");
  treeText.innerText = "The Oates branch of the family comes from Cornwall in the southwest of Britain.";
  document.getElementById("treetext").appendChild(treeText);
}
if(famName==="Carter"){
  const treeText = document.createElement("p");
  treeText.classList.add("tree-text");
  treeText.innerText = "The Carter branch of the family comes from many places. The Carters (originally mostly British in Virginia) come from Missouri via Oregon, while the Valentines are from New York, descending from the earliest Dutch and English settlers of New Amsterdam (New York). The Chapmans lead back to a rich set of English ancestors from New England who arrived during the Great Migration (1620-1650).";
  document.getElementById("treetext").appendChild(treeText);
}
if(famName==="Martin"){
  const treeText = document.createElement("p");
  treeText.classList.add("tree-text");
  treeText.innerText = "The newest part of our family comes principally from Quebec via the northern states, many from upstate New York.";
  document.getElementById("treetext").appendChild(treeText);
}
if(famName==="Fry"){
  const treeText = document.createElement("p");
  treeText.classList.add("tree-text");
  treeText.innerText = "The other newest part of our family comes from German ancestors (Frye/Moyer) in Pennsylvania and Maryland through Ohio, while the other half of this line (McCabe) comes from Ireland. So Grandma Georgia is principally Irish and German.";
  document.getElementById("treetext").appendChild(treeText);
}
if(famName==="Irby"){
  const treeText = document.createElement("p");
  treeText.classList.add("tree-text");
  treeText.innerText = "The Irbys come mainly from English ancestors in Virginia, who then made their way through the South. This family is rich in Revolutionary and Civil War history.";
  document.getElementById("treetext").appendChild(treeText);
}
if(famName==="Stuart"){
  const treeText = document.createElement("p");
  treeText.classList.add("tree-text");
  treeText.innerText = "The Stuarts come mainly from early English ancestors in Virginia, while the Wilkes come from British and a few Irish from the Atlantic states.";
  document.getElementById("treetext").appendChild(treeText);
}
if(famName==="Jones"){
  const treeText = document.createElement("p");
  treeText.classList.add("tree-text");
  treeText.innerText = "The Joneses come from early English ancestors in Virginia via North Carolina, while the Kings do the same.";
  document.getElementById("treetext").appendChild(treeText);
}
if(famName==="Davis"){
  const treeText = document.createElement("p");
  treeText.classList.add("tree-text");
  treeText.innerText = "The Davises come from a variety of backgrounds, mostly British from Virginia.";
  document.getElementById("treetext").appendChild(treeText);
}