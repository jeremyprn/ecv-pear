const letBounce = (start) => {
    let canvas = document.getElementById('pearBounce');
    let wrapper = document.getElementById('pearBounce__wrapper');
    let pearWidth = 128; let pearHeight = 254;
    let pearX=10; let pearY = 10; let pearVelocityX = 10; let pearVelocityY = 10;
    let canvasWidth = 1280*2; let canvasHeight = 739*2;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        let img = new Image();
        img.src = './assets/images/pearBounce.png';

        function drawPear() {
            
            if (pearY + pearWidth > canvas.height ) {
                pearVelocityY = -pearVelocityY
                pearY = canvasHeight - pearWidth
            }

            if (pearY + pearHeight <= 0) {
                pearVelocityY = -pearVelocityY
                pearY = -pearHeight
            }

            if (pearX + pearWidth <= 0) {
                pearVelocityX = -pearVelocityX
                pearX = -pearWidth
            }

            if (pearX + pearWidth >= canvasWidth) {
                pearVelocityX = -pearVelocityX
                pearX = canvasWidth - pearWidth
            }
            
            pearX += pearVelocityX
            pearY += pearVelocityY
            
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, pearX, pearY, pearWidth, pearHeight);
        }
        let main;
        main = setInterval(function() {             
            drawPear();
            if(wrapper.className != "pearBounce-active") {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                clearTimeout(main);
            } 
        }, 25);
        
    } else {
        console.log("Canvas is not supported")
    }
}

export const pearBounce = () => {
    let wrapper = document.getElementById('pearBounce__wrapper');
    var timeout;
    document.onmousemove = function(){
        clearTimeout(timeout);
        wrapper.classList.add("pearBounce-desactive");
        wrapper.classList.remove("pearBounce-active");
        timeout = setTimeout(function(){
            letBounce(true);
            wrapper.classList.remove("pearBounce-desactive");
            wrapper.classList.add("pearBounce-active");
        }, 6000);
    }
}