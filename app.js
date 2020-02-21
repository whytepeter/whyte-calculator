// Dsiplaying of Current Date
const currentDate = function() {
   const displayDate = document.querySelector('.date');
   const date = new Date();
   const hours = date.getHours();
   const mins = date.getMinutes();
   const secs = date.getSeconds();

    displayDate.innerHTML =   `${hours}:${mins}:${secs}`;
}
 setInterval(currentDate, 1000);


 // On Button clicks 
function Click(el){
    document.getElementById('input').value += el;
    console.log(el);
};

// Delete button
function del(){
    document.getElementById('input').value = " ";
    document.getElementById('answer').value = " ";
};

// Evaluate
function equal(){
    let exp = document.getElementById('input').value;
    if(exp){
        document.getElementById('answer').value = eval(exp);
    }
    
}

// Back Space
function Clear(){
    let nums = document.getElementById('input').value;
    document.getElementById('input').value = nums.substr(0, nums.length-1);
}