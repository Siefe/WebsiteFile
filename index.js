function djt()
{
document.getElementById("djt").innerHTML="加载中..."
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("djt").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","djt/soul.php",true);
xmlhttp.send();
}
function getValue( key1,key2, str ) { 
    var m = str.match( new RegExp(key1+'(.*?)'+key2) );
    return m ? m[ 1 ] : false;
 }
function dl()
{
if(sl.value=="")
{
    document.getElementById("xl").innerHTML="填写上联";
}
else
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("xl").innerHTML=getValue('"text": "','"',xmlhttp.responseText);
    }
  }
xmlhttp.open("GET","https://v1.alapi.cn/api/couplet?keyword="+sl.value,true);
xmlhttp.send();
}
}

var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("djt").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","djt/soul.php",true);
xmlhttp.send();