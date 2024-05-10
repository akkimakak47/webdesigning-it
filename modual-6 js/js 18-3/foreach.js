
// foreach is used to return any array in listing
var emp=["brijesh","jay","meet","samir","axay","ridhi","vidhi"];
// console.log(emp);

// emp.forEach(callBackfunction);
emp.forEach(display);
function display(item)
{
    console.log("Name of employees is :"+item)
}
