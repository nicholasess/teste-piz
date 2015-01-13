$(function(){
	$('#mesa_desc').text("Mesa "+localStorage.getItem('mesa'));
  window.urlServer = "";
  if(localStorage.getItem('ip')){
    window.urlServer = 'http://'+localStorage.getItem('ip')+'/admin/API/pedido/';  
  }else{
    location.replace("add_server.html?msg=1");
  }
	
	$('#total').click(function(e){
    e.preventDefault();
		console.log('clicou');																																																																																																																																																																																																									
        if($('#imp').hasClass('display-none') || $('#pag').hasClass('display-none')){
          console.log("tem class");
              $('#imp').removeClass('display-none')
              $('#pag').removeClass('display-none')
        }else{
          console.log("não tem class");
              $('#imp').addClass('display-none')
              $('#pag').addClass('display-none')
        }               
    });
});

