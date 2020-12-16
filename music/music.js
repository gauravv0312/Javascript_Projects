window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
        "rgb(99, 214, 99)",
        "rgb(223, 223, 31)",
        "lightblue",
        " lightcoral",
        "rgb(236, 64, 64)",
        " rgb(243, 74, 12)"
    ];
    //music part
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });


    // for bubble
    const createBubbles=(index)=>{
        const bubble= document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index]; 
        bubble.style.animation="jump 1s ease";
        bubble.addEventListener("animationend",function()
        {
            visual.removeChild(this);
        })
    };
});