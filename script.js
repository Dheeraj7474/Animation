const btn = document.getElementById("btn");
const container = document.getElementById("container");
const inner = document.getElementById("inner");
btn.addEventListener('click', fun);
function fun(){
    let marginTop = 0;
    let marginLeft = 0;
    function move() {
        if (marginTop + inner.offsetHeight <= container.offsetHeight && marginLeft + inner.offsetWidth <=container.offsetWidth) {
            inner.style.marginTop = marginTop + "px";
            inner.style.marginLeft = marginLeft + "px";
            marginTop += 10;
            marginLeft += 10;
            setTimeout(move, 100); 
        }
    }
    move(); 
};
