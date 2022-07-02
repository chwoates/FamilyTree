const img = document.createElement("img");
const query = new URLSearchParams(location.search);
const famName = query.get("name");
console.log(famName);
img.src = "TreePhotos/"+famName+"Tree.png";
img.classList.add("trees");
document.getElementById("treetrunk").appendChild(img);