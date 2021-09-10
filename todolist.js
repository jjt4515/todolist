var button = document.getElementById("button");
var writeList = document.getElementById("write_list");
var ul = document.querySelector("ul");

button.addEventListener("click", function () {
    if (writeList.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(writeList.value));
        li.className = "li";
        
        var delBtn = document.createElement("button");
   		delBtn.appendChild(document.createTextNode("삭제"));
        delBtn.addEventListener("click", removeList);
        li.appendChild(delBtn);

        ul.appendChild(li);
        writeList.value = "";
    }
})

writeList.addEventListener("keypress", function (event) {
    if (writeList.value.length > 0 && event.keyCode === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(writeList.value));
        li.className = "li";
        
        var delBtn = document.createElement("button");
   		delBtn.appendChild(document.createTextNode("삭제"));
        delBtn.addEventListener("click", removeList);
        li.appendChild(delBtn);
        
        ul.appendChild(li);
        writeList.value = "";
        
    }
})

ul.onclick = function(event){
    if (event.target.className === "li" || event.target.className==="li done") {
    event.target.classList.toggle("done");
}
}


function removeList(event) {
    var target = event.target;
    target.removeEventListener("click",  removeList);
    target.parentNode.remove();
}
