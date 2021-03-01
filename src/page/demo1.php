<?php
header("content-type:text/html;charset=utf-8");

$u1=$_POST["username"];
$p1=$_POST["password"];
$link = mysqli_connect('localhost','root','','aaa'); // 连接数据库 
// if (mysqli_connect_error($link)){
//      die("连接失败：".mysqli_connect_error()); 
//     } else { 
//         echo "OK—数据库连接成功！";
//      };
// //设置编码
 mysqli_set_charset( $link, "utf8" );
$sql="select * from bbb where username=$u1 and password=$p1";
$result=mysqli_query($link,$sql);
if(mysqli_fetch_assoc($result)){
     //登录成功
     header("location:./index.html");
}else{
//登录失败
     
     echo '<script language="JavaScript">;alert("登录失败");location.href="./denglu/index.html";</script>;';
    
  
}
//关闭连接
mysqli_close($link);
?>