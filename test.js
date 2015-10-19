<script language="javascript">
function verif()
{
var a=document.f.Name.value ;
if(a=='')
{
alert("veuillez saisir votre nom");
return false ;
}
if(isNaN(a)==false)
{
alert("le nom est une chaîne de caractères");
return false ;
}

var c=document.f.age.value ;
if(c=='')
{
alert("veuillez saisir votre age");
return false ;
}
if(isNaN(c)==true)
{
alert("l'age doit être numérique");
return false ;
}
var d=document.f.cin.value;
if(isNaN(d)==true)
{
alert("CIN doit être numérique");
return false ;
}

 if(d.length!=8)
{
alert("CIN Doit étre de longueur 8 caractères");
return false ;
}
var e=document.f.tel.value;
if(isNaN(e)==true)
{
alert("tel doit être numérique");
return false ;
}
clas = document.f.selector.options.selectedIndex ;
if(clas==-1)
{
alert("veuillez choisir votre niveau");
return false;
}

j=document.f.Email.value ;
if(j=='')
{
alert("veuillez saisir votre E-mail");
return false ;
}
if(j.indexOf('@')==-1)
{
alert("l'email doit contenir le caractère @");
return false ;
}

} </script>
