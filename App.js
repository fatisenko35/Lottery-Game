let inputNumber = document.querySelector(".lucky-number-input");
let buttonNumber = document.querySelector(".lucky-number-button");
let luckyNumber =[];
let jokerNumber , superStarNumber = [0,0];
let jokerArray = [];
let resultContainer = document.querySelector(".result");
buttonNumber.addEventListener("click", () =>{
    resultContainer.innerHTML = "";
    let j = 0;
    while (j < inputNumber.value) {
        for (let i = 0; luckyNumber.length < 6; i++) {
            const randomNumber = Math.floor(Math.random() * 90) + 1;
            if (luckyNumber.includes(randomNumber)) {
                continue;
            } else {
                luckyNumber.push(randomNumber);
            }
            
        }
        for (let i = 0; jokerArray.length < 2; i++) {
            const randomNumber = Math.floor(Math.random() * 90) + 1;
            if (luckyNumber.includes(randomNumber) && jokerArray.includes(randomNumber)) {
                continue;
            } else {
                jokerArray.push(randomNumber)
            }       
        }
    
        let res = luckyNumber.sort((a, b) => a - b).join(" - ") + "   |   "  + jokerArray.join("  |  ");
        const luckyAdd = document.createElement("p");
        luckyAdd.innerHTML = res;
        document.querySelector(".result").appendChild(luckyAdd);
        res = "";
        luckyNumber =[];
        jokerNumber , superStarNumber = [0,0];
        jokerArray = [];
        j++;
    }
})