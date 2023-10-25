//Bai 1
let btnAction1 = document.getElementById("btn-action-1");

btnAction1.addEventListener("click", () => {
    let length = parseInt(document.getElementById("length").value);
    let width = parseInt(document.getElementById("width").value);
    if(length == width){
        alert("Đây là hình vuông");
    }else{
        alert("Đây là hình chữ nhật");
    }
});
//Bai 2
let btnAction2 = document.getElementById("btn-action-2");
btnAction2.addEventListener("click", () =>{
    let numberA = parseFloat(document.getElementById("number-a").value);
    let numberB = parseFloat(document.getElementById("number-b").value);

    if(numberA >= numberB){
        alert(`Số lớn nhất là ${numberA}`);
    }else{
        alert(`Số lớn nhất là ${numberB}`);
    }
});
//Bai 3
document.getElementById("btn-action-3").addEventListener("click", () =>{
    let n = parseFloat(document.getElementById("n").value);

    if(n >= 0){
        alert(`Gia tri tuyet doi cua ${n} la ${n}`);
    }else{
        alert(`Gia tri tuyet doi cua ${n} la ${-n}`);
    }
})