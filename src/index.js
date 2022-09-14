// import "./styles.css";


let counter, btnAdd;
let n;
 
function addCount(){
    n++;
    counter.innerHTML = n;
}
 
window.addEventListener("load", ()=>{
    // 起動時の処理
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btnAdd");
    n = counter.innerHTML;
 
    btnAdd.addEventListener("click", addCount);
});

