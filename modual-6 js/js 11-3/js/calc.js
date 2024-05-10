
// clear the input values
function clr()
{
    document.getElementById("result").value="";
}
// click on button and input text in result
// function addValue(val)
// {
//     // alert('val')
//     const a=document.getElementById("result").value+=val;
//     if(a==true)
//     {
//        let b=a.slice(0,-1);
//        document.getElementById("result").value=b;
//     }
//     else 
//     {
//         return false;
//     } 

// }

function addValue(val)
{
    // alert('val')
document.getElementById("result").value+=val;

}
// click on remove or backspace one numbers will be slice
function backSlice()
{
    let num=document.getElementById("result").value;
    let ss=num.slice(0,-1);
    document.getElementById("result").value=ss;
}
// click on = to get a final result
function finalResult()
{
 let x=document.getElementById("result").value;
 let y=eval(x);
 document.getElementById("result").value=y;   
}

// click to get a final result of square
function sqResult()
{
 let x=document.getElementById("result").value;
 let y=Math.pow(x,2);
 document.getElementById("result").value=y;   
}
// click to get a final result of square root
function sqrtResult()
{
 let x=document.getElementById("result").value;
 let y=Math.sqrt(x);
 document.getElementById("result").value=y;   
}
