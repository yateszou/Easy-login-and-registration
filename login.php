<?php

	header("Content-type:text/html;charset=utf-8");

	//统一返回格式

	$responseData = array("code" => 0,"message" => "");

	//取出传过来的数据

	$username = $_POST["username"];

	$password = $_POST["password"];



	//简单的验证

	if(!$username){

		$responseData["code"] = 1;

		$responseData["message"] = "用户名不能为空";

		echo json_encode($responseData);

		exit;

	}

	if(!$password){

		$responseData["code"] = 2;

		$responseData["message"] = "密码不能为空";

		echo json_encode($responseData);

		exit;

	}



	//1.连接数据库

	@$link = mysqli_connect(localhost,yates0909,123456,yates0909);//域名，数据库用户名。数据库密码，数据库表名，填写你自己的

	//2.设置字符集

	mysqli_query($link,"SET NAMES 'UTF8'" );

	//3.判断是否连接成功

	if(!$link){

		$responseData["code"] = 3;

		$responseData["message"] = "数据库连接失败";

		echo json_encode($responseData);

		exit;

	}



	//md5加密

    	//$str= md5(md5(md5($password)."xxx")."yyy");



	//4.登录

    $sql = "SELECT * FROM users WHERE username='{$username}' AND password='{$password}'";

    $res = mysqli_query($link,$sql);



    //取出一行数据

    $row = mysqli_fetch_assoc($res);

    if(!$row){

        $responseData["code"] = 4;

        $responseData["message"] = "用户名或密码错误";

        echo json_encode($responseData);

    }else{

        $responseData["message"] = "登陆成功";

        echo json_encode($responseData);

    }

	mysqli_close($link);

?>