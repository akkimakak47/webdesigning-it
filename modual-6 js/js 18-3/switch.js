
/* 
 switch: where we check multiple true case at one times if case is false default is executed
 switch(condition)
 {
    case 1:
        statements;
        break;
        
    case 2:
        statements;
        break;
        
    case 3:
        statements;
        break;

    default :
    statements;
    break;
        
 }

*/

var grad='U';
switch(grad)
{
    case 'A':
        console.log("You are topper");
        break;
        
    case 'B':
        console.log("You are average topper");
        break;

    case 'C':
        console.log("You are failed");
        break;

    default:
        console.log("Your grade is not found anywhere");
        break;
    
        
        
}
