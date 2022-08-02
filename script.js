
const myBody = document.querySelector("body");
const mainBox = document.createElement("div");
const box1 = document.createElement("div");
const box2 = document.createElement("div");

box1.className= "box1";
box2.className ="box2";
mainBox.id="mainBox";

// Box1
box1.style.backgroundColor="red";
box1.style.width="200px";
box1.style.height="100px";
box1.style.textAlign="center";
box1.style.fontSize="25px";
box1.style.color="white";
box1.style.margin="5px";
box1.style.display="inline-block";
box1.style.borderRadius="5px";


// Box2
box2.style.backgroundColor="blue";
box2.style.width="200px";
box2.style.height="100px";
box2.style.textAlign="center";
box2.style.fontSize="25px";
box2.style.color="white";
box2.style.margin="5px";
box2.style.display="inline-block";
box2.style.borderRadius="5px";


box1.textContent="HELLO";
box2.textContent="WORLD";

myBody.appendChild(mainBox);
mainBox.appendChild(box1);
mainBox.appendChild(box2);
console.log(myBody)






        
