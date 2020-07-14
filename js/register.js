window.onload = function(){
  var oBtn = document.getElementById("btn1");
  var aInputs = document.getElementsByTagName("input");
  var oAlert = document.getElementById("alert_info");
  oBtn.onclick = function(){
    $.ajax({
      method: "post",
      url: "register.php",
      data: {
        username: aInputs[0].value,
        password: aInputs[1].value,
        addTime: new Date().getTime()
      },
      success: function(result){
        var obj = JSON.parse(result);
        if(obj.code){
          oAlert.className = 'alert alert-danger';
        }else{
          oAlert.className = 'alert alert-success';
          setTimeout(function(){
            location.href = "login.html";
          },2000);
        }
        oAlert.style.display = "block";
        oAlert.innerHTML = obj.message;
      },
      error: function(msg){
        alert(msg);
      }
    })
  }
}
