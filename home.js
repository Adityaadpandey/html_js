//alert("ok")
function check(form)
{
if(form.userid.value == "a" && form.pwd.value == "")
{

   return true;
}
else
{
	alert("Login Failed")
	return false;
}
}
