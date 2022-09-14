
let counter1, btnAdd1;
let n1;
 
function addCount1(){
    n1++;
    counter1.innerHTML = n1;
}
 
window.addEventListener("load", ()=>{
    // 起動時の処理
    counter1 = document.getElementById("counter1");
    btnAdd1 = document.getElementById("btnAdd1");
    n1 = counter1.innerHTML;
 
    btnAdd1.addEventListener("click", addCount1);
});

let counter2, btnAdd2;
let n2;
 
function addCount2(){
    n2++;
    counter2.innerHTML = n2;
}

window.addEventListener("load", ()=>{
    // 起動時の処理
    counter2 = document.getElementById("counter2");
    btnAdd2 = document.getElementById("btnAdd2");
    n2 = counter2.innerHTML;
 
    btnAdd2.addEventListener("click", addCount2);
});

let counter3, btnAdd3;
let n3;
 
function addCount3(){
    n3++;
    counter3.innerHTML = n3;
}

window.addEventListener("load", ()=>{
    // 起動時の処理
    counter3 = document.getElementById("counter3");
    btnAdd3 = document.getElementById("btnAdd3");
    n3 = counter3.innerHTML;
 
    btnAdd3.addEventListener("click", addCount3);
});


