let button = document.querySelector('button')


const getanswer = ((e)=>{
    
    let numone = parseInt(document.getElementById("first").value)
    let numtwo = parseInt(document.getElementById("second").value)
    let sum = numone + numtwo
    document.getElementById("answer").value = sum
})

button.addEventListener('click', getanswer);

























// function add(){
//     var a, b, c;
//      a = parseInt(document.getElementById("first").value);
//      b =  parseInt(document.getElementById("second").value);
//      c = a + b;
//     document.getElementById("answer").value=c;
// }



