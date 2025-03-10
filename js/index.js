const getBtns = document.querySelectorAll("section > div:last-child button");
const clearbtn = document.querySelector("section > div:first-child button");


let lbl = document.querySelector('label');
let temp = "";

clearbtn.addEventListener("click", () => {
    lbl.textContent = "";
    temp = "";
    console.log("after clear: " + temp);
});

for (let btn of getBtns) {
    
    btn.addEventListener("click", function () {

        if (['+', '-', '*', '/'].includes(btn.innerText)) {
            temp += lbl.textContent + btn.innerText;
            lbl.textContent = "";
       
        } else if (btn.innerText === "=") {
            temp += lbl.textContent;
            const result = eval(temp); 
            lbl.textContent = result; 
            temp = ""; 
           
        } else {
            lbl.textContent += btn.innerText;
        }

    });
}