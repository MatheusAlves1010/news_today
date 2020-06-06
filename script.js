
function pesquisar(){
    var paises = document.getElementById('paises');
    var pais = paises.options[paises.selectedIndex].value;
    var interesses = document.getElementById('interesses');
	var interesse = interesses.options[interesses.selectedIndex].value;
    console.log(pais + interesse); 
    
    window.location.href = pais + interesse + ".html";
}