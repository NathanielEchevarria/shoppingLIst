var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    var btn = document.createElement("button");
    
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);
    input.value = "";
    

}
function underlineParent(e){
	
}
function removeItem(e){
	e.target.parentNode.remove();
} 

function addListAfterClick(){
    if(inputLength() > 0 ){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0  && event.code ==="Enter"){
        createListElement();
    } 
}

ul.addEventListener("click", function(e){
    if(e.target && e.target.tagName === "LI"){
        e.target.classList.toggle("done");
    } else if(e.target && e.target.tagName === "BUTTON"){
        e.target.parentNode.remove();
    }

})








button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeypress);
