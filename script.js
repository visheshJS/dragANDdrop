const lists = document.getElementsByClassName("list");
const rightbox = document.getElementById("box2");
const leftbox = document.getElementById("box1");

for (const list of lists) {
    list.addEventListener("dragstart",function(e){
        let selected=e.target;

        rightbox.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        
        rightbox.addEventListener("drop",function(e){
            rightbox.appendChild(selected);
            selected=null;
        });
        leftbox.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        
        leftbox.addEventListener("drop",function(e){
            leftbox.appendChild(selected);
            selected=null;
        });
    })
    
    
}

