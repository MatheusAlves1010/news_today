var news_id;
var salva_escolha;

function pesquisar(){
	var paises = document.getElementById('paises');
	var pais = paises.options[paises.selectedIndex].value;
	var interesses = document.getElementById('interesses');
	var interesse = interesses.options[interesses.selectedIndex].value;
	
	window.location.href = pais + interesse + ".html";
}

function vazio1() {
    var pais;
    pais = document.getElementById("paises").value;
    if((pais == "Escolha um país")||(pais == null)) {
       return false;
    };
 }

 function vazio2() {
    var interesse;
    interesse = document.getElementById("interesses").value;
    if((interesse == "Escolha um interesse")||(interesse == null)) {
       return false;
    };
 }

function verificar(){
	if(vazio1() == false){
		alert("Selecione um país");
	}else if(vazio2() == false){
		alert("Selecione um interesse");
	}else{
		pesquisar();
	}
}

function ler_noticia(news_id){
	var url  = window.location.href;
    var page = url.split('/');
	var page = page[page.length-1];
	var resultado = page.substring(14, 0);
	window.location.href = resultado + news_id.id + ".html";
}
