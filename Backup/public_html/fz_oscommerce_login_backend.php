<?php
      $sProtocolUrl = (!empty($_SERVER["HTTPS"]) && $_SERVER["HTTPS"]!="off")?"https":"http" ;
      if(dirname($_SERVER["REQUEST_URI"]) === '/' ||  dirname($_SERVER["REQUEST_URI"]) === '//'){
           $_SERVER["REQUEST_URI"] = "";
      }
      $sUrlAdmin = $sProtocolUrl . "://" . $_SERVER["HTTP_HOST"] . dirname($_SERVER["REQUEST_URI"]) . "/admin/login.php";
      $sUrlAdminLogged = $sProtocolUrl . "://" . $_SERVER["HTTP_HOST"] . dirname($_SERVER["REQUEST_URI"]) . "/admin/index.php";
      $sUser = $_POST['username'];
      $sPassw = $_POST['password'];

      if(empty($sUser) || empty($sPassw))
	  header("Location: " . $sUrlAdmin);
      
?>
<html>
<head>
  <script type="text/javascript" src="<?php echo $sProtocolUrl ?>://code.jquery.com/jquery-1.8.2.min.js"></script>
  <script>
				$.ajax({
					url: "<? echo $sUrlAdmin ?>", 
					dataType : "html",
					success: function(data) {
                                            $.ajax({
                                                url: "<? echo $sUrlAdmin.'?action=process'; ?>",
                                                type: "post",
                                                data : "username=<?=$sUser;?>&password=<?=$sPassw;?>",
                                            });
                                            setTimeout("document.location.href='<?= $sUrlAdminLogged; ?>'", 1000);
                                        },
                                        error:function(err){
                                            console.log(err);
                                         }
				});

  </script>
</head>
<body>
</body>
</html>