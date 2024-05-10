
function check()
{
let em=document.getElementById("email").value;
let pass=document.getElementById("password").value;
if(em=='superadmin@gmail.com' && pass=='super@123')
{

    Swal.fire({
        title: "Good job!",
        text: "You are Logged in successfully!",
        icon: "success"
      });

      window.location='dashboard.html';
     
}
else 
{
    Swal.fire({
        title: "Erros!",
        text: "You email and password are incorect!",
        icon: "error"
      });
}
}
function logout()
{
    //alert('hi')
    Swal.fire({
        title: "Good job!",
        text: "You are Successfully Logout!",
        icon: "success"
      });

      window.location='index.html';
}
