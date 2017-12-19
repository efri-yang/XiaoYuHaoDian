<?php
for($i=0;$i<2000000;$i++){
	$j+=1;
}
$page=$_GET["page"];
$number=20;
$start=($page-1)*$number;
$end=$page*$number;
$arr=array();
$total=70;
$pageTotal=ceil($total/$number);

if($page==$pageTotal){
	for($start;$start<$total;$start++){
		$arr[]=array("rank"=>$start+1,"name"=>"小王烧烤","taste"=>"9.0","service"=>"8.8","environment"=>"9.0","goodcomment"=>"98%","badcomment"=>"2%","heat"=>"958");
	}
}else if($page>$pageTotal){
	$arr=false;
}else{
	for($start;$start<$end;$start++){
		$arr[]=array("rank"=>$start+1,"name"=>"小王烧烤","taste"=>"9.0","service"=>"8.8","environment"=>"9.0","goodcomment"=>"98%","badcomment"=>"2%","heat"=>"958");
	}
}




header('content-type:application:json;charset=utf8');  
header('Access-Control-Allow-Origin:*');  
header('Access-Control-Allow-Methods:POST');  
header('Access-Control-Allow-Headers:x-requested-with,content-type');  
	echo json_encode($arr);
?>