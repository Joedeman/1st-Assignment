const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

let count = 0;

incrementButton.addEventListener("click", () => {
    count++;
    updateCounter();
});

decrementButton.addEventListener("click", () => {
    count--;
    updateCounter();
});

function updateCounter() {
    countElement.textContent = count;

    if (count > 0) {
        countElement.style.color = "green";
    } else if (count < 0) {
        countElement.style.color = "red";
    } else {
        countElement.style.color = "black";
    }
}

alert('HELLO#')


    function SubmitButton() {
        const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
  
    
        const name = nameInput.value;
        const email = emailInput.value;
        const message = document.getElementById("message").value;

        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);

        alert("Name: " + name + "Email: " + email + "Message: " + message);
    }

    document.getElementById('submit-button').addEventListener('click',SubmitButton);
;





/*Little something i saw from tiktok and i thought i would make my thing look more presentable*/
/*The below code was take from tiktok i don't have a link to profetionally reference it*/
let radius = 560;
let outDom = document.getElementById("dragBox");
let spinDom = document.getElementById("spinBox");
let spinDom2 = document.getElementById("spinBox2");
let spinDom3 = document.getElementById("spinBox3");
let aImg = spinDom.getElementsByTagName('img');
let aImg2 = spinDom2.getElementsByTagName('img');
let aImg3 = spinDom3.getElementsByTagName('img');
let aEle = [...aImg];
let aEle2 = [...aImg2];
let aEle3 = [...aImg3];

function setStyle(delayTime, dom, i, len) {
    let imgCount = dom.getElementsByTagName('img').length;
    let angle = 360 / imgCount;

    dom.style.transform = `rotateY(${i * angle}deg) translateZ(${radius}px)`;
    dom.style.transition = `transform 1s`;
    dom.style.transitionDelay = delayTime || (len - i) / 4 + "s";
}

function init(delayTime) {
    let allElements = [...aEle, ...aEle2, ...aEle3];
    for (let i = 0; i < allElements.length; i++) {
        setStyle(delayTime, allElements[i], i, allElements.length);
    }
}
setTimeout(init, 500);

document.onmousewheel = function (e) {
    e = e || window.event;
    let d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
};

// Rest of your code for handling rotation and user interactions
function playSpin(yes) {
    spinDom.style.animationPlayState = yes ? 'running' : 'paused';
}

function changeRotate(obj) {
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;
    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + tX + "deg)";
}

let startX, startY, endX, endY, tX = 0, tY = 10, desX = 0, desY = 0;

document.onpointerdown = function (e) {
    clearInterval(outDom.timer);
    e = e || window.event;
    startX = e.clientX;
    startY = e.clientY;

    this.onpointermove = function (e) {
        playSpin(false);
        e = e || window.event;
        endX = e.clientX;
        endY = e.clientY;
        desX = endX - startX;
        desY = endY - startY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        changeRotate(outDom);
        startX = endX;
        startY = endY;
    };

    this.onpointerup = function (e) {
        outDom.timer = setInterval(function () {
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;
            tY += desY * 0.1;
            changeRotate(outDom);
            playSpin(false);
            if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                clearInterval(outDom.timer);
                playSpin(true);
            }
        });
        this.onpointermove = this.onpointerup = null;
    };
    return false;
};
