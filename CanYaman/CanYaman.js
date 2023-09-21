let textListRight = ["R6vLskd8pErfT9bHio9nUdLp1sHw2eSgkFvdT", 
                    "n8dPwS6kFvdT3yLw2zKve4tQydT3ydT3ydT3y", 
                    "c9lFvh1kLsa2eRwv4jKly6qQzh1kLsah1kLsa", 
                    "d7tNhj4gDml0mJwk8bTno5iDcg3pGva2eRwv4j",
                    "R6vLskd8pErfT9bHio9nUdLp1sHw2eSgkFvdT", 
                    "n8dPwS6kFvdT3yLw2zKve4tQydT3ydT3ydT3y", 
                    "c9lFvh1kLsa2eRwv4jKly6qQzh1kLsah1kLsa", 
                    "d7tNhj4gDml0mJwk8bTno5iDcg3pGva2eRwv4j",
                    "R6vLskd8pErfT9bHio9nUdLp1sHw2eSgkFvdT", 
                    "n8dPwS6kFvdT3yLw2zKve4tQydT3ydT3ydT3y", 
                    "c9lFvh1kLsa2eRwv4jKly6qQzh1kLsah1kLsa", 
                    "d7tNhj4gDml0mJwk8bTno5iDcg3pGva2eRwv4j",                    
                    "R6vLskd8pErfT9bHio9nUdLp1sHw2eSgkFvdT", 
                    "n8dPwS6kFvdT3yLw2zKve4tQydT3ydT3ydT3y", 
                    "c9lFvh1kLsa2eRwv4jKly6qQzh1kLsah1kLsa", 
                    "d7tNhj4gDml0mJwk8bTno5iDcg3pGva2eRwv4j",                    
                    "R6vLskd8pErfT9bHio9nUdLp1sHw2eSgkFvdT", 
                    "n8dPwS6kFvdT3yLw2zKve4tQydT3ydT3ydT3y", 
                    "c9lFvh1kLsa2eRwv4jKly6qQzh1kLsah1kLsa", 
                    "d7tNhj4gDml0mJwk8bTno5iDcg3pGva2eRwv4j"];

let textListLeft = ["R6vLskd8pErfT9bHio9nUdLp1sHw2eSgkFvdT", 
                    "n8dPwS6kFvdT3yLw2zKve4tQydT3ydT3ydT3y", 
                    "c9lFvh1kLsa2eRwv4jKly6qQzh1kLsah1kLsa", 
                    "d7tNhj4gDml0mJwk8bTno5iDcg3pGva2eRwv4j",
                    "R6vLskd8pErfT9bHio9nUdLp1sHw2eSgkFvdT", 
                    "n8dPwS6kFvdT3yLw2zKve4tQydT3ydT3ydT3y", 
                    "c9lFvh1kLsa2eRwv4jKly6qQzh1kLsah1kLsa", 
                    "d7tNhj4gDml0mJwk8bTno5iDcg3pGva2eRwv4j",
                    "R6vLskd8pErfT9bHio9nUdLp1sHw2eSgkFvdT", 
                    "n8dPwS6kFvdT3yLw2zKve4tQydT3ydT3ydT3y", 
                    "c9lFvh1kLsa2eRwv4jKly6qQzh1kLsah1kLsa", 
                    "d7tNhj4gDml0mJwk8bTno5iDcg3pGva2eRwv4j",                    
                    "R6vLskd8pErfT9bHio9nUdLp1sHw2eSgkFvdT", 
                    "n8dPwS6kFvdT3yLw2zKve4tQydT3ydT3ydT3y", 
                    "c9lFvh1kLsa2eRwv4jKly6qQzh1kLsah1kLsa", 
                    "d7tNhj4gDml0mJwk8bTno5iDcg3pGva2eRwv4j",                    
                    "R6vLskd8pErfT9bHio9nUdLp1sHw2eSgkFvdT", 
                    "n8dPwS6kFvdT3yLw2zKve4tQydT3ydT3ydT3y", 
                    "c9lFvh1kLsa2eRwv4jKly6qQzh1kLsah1kLsa", 
                    "d7tNhj4gDml0mJwk8bTno5iDcg3pGva2eRwv4j"];

let rightTextList = [];
let leftTextList = [];
let score = 0;

// let indexRight = Math.ceil(Math.random(4, textListLeft.length) * 10);
// let indexLeft = Math.ceil(Math.random(4, textListLeft.length) * 10)

window.onload = () =>{
    let glassesRight = document.getElementById("rightTxt");
    let glassesLeft = document.getElementById("leftTxt");

    for (let i = 0; i < textListRight.length * 0.4; i++) {
        let rightIndex = Math.ceil(Math.random(0,textListRight.length) * 10)

        rightTextList.push(rightIndex);
    }

    for (let i = 0; i < textListLeft.length * 0.4; i++) {
        let leftIndex = Math.ceil(Math.random(0,textListLeft.length) * 10)

        leftTextList.push(leftIndex);
    }

    for (let i = 0; i < textListRight.length; i++) {
        if(rightTextList.includes(i)){
            glassesRight.innerHTML += `
            <span onclick="clicked(this)" style="color: transparent;
                        text-shadow: 0 0 5px rgba(190, 25, 25, 0.5);">${textListRight[i]}</span>
    
            `
        }

        else{
            glassesRight.innerHTML += `
            <span onclick="clicked(this)" style="color: transparent;
                        text-shadow: 0 0 5px rgba(106, 104, 104, 0.5);">${textListRight[i]}</span>
    
            `
        }
        
    }

    for (let i = 0; i < textListLeft.length; i++) {
        if(leftTextList.includes(i)){
            glassesLeft.innerHTML += `
            <span onclick="clicked(this)" style="color: transparent;
                        text-shadow: 0 0 5px rgba(190, 25, 25, 0.5);">${textListLeft[i]}</span>
    
            `
        }

        else{
            glassesLeft.innerHTML += `
            <span onclick="clicked(this)" style="color: transparent;
                        text-shadow: 0 0 5px rgba(106, 104, 104, 0.5);">${textListLeft[i]}</span>
    
            `
        }
    }

}

function clicked(element) {
    const newBackgroundColor = "0 0 5px rgba(106, 104, 104, 0.5)";
    const clickedItem = getComputedStyle(element).getPropertyValue("text-shadow");
    checkText(clickedItem)
    element.style.textShadow = newBackgroundColor
}

function checkText(element){
    let scoreText = document.getElementById("score");
    if(element.includes("rgba(190, 25, 25, 0.5)")) {
        score++;
        scoreText.innerHTML = score;
    }

    else{
        score--;
        scoreText.innerHTML = score;
    }
}