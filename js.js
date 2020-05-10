fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
.then((response)=>{
	return response.json();
})
.then((data)=>{
	movel = data;
    tam = data.length
    console.log(data)
    dado = "";
    for(let i=0; i<tam; i++){
    dado += ` <div>
    			<img src=${data[i]['photo']}>
    			<label>${data[i]['property_type']}</label>
    			<span> preço: ${data[i]['price']} R$</span>
            </div>
    `
	}

	document.getElementById('container').innerHTML = dado;

})
.catch((erro)=>{
	console.log("erro:" + erro);
});



function ap(){
 	dado="";
 	for(let i=0; i<tam; i++){
 		if(movel[i]['property_type'] == "Apartamento"){
    dado += ` 
    		<div >
    			<img src=${movel[i]['photo']}>
    			<h4>${movel[i]['property_type']}</h4>
    			<h5> preço: ${movel[i]['price']} R$</h4>
    		</div>
   		`
		}
	}
	document.getElementById('container').innerHTML = dado;
}
function casa(){
 	dado="";
 	for(let i=0; i<tam; i++){
 		if(movel[i]['property_type'] == "Casa"){
    dado += ` 
    		<div >
    			<img src=${movel[i]['photo']}>
    			<h4>${movel[i]['property_type']}</h4>
    			<h5> preço: ${movel[i]['price']} R$</h4>
    		</div>
   		`
		}
	}
	document.getElementById('container').innerHTML = dado;
}
function sitio(){
    dado="";
    for(let i=0; i<tam; i++){
        if(movel[i]['property_type'] == "Sítio"){
    dado += ` 
            <div >
                <img src=${movel[i]['photo']}>
                <h4>${movel[i]['property_type']}</h4>
                <h5> preço: ${movel[i]['price']} R$</h4>
            </div>
        `
        }
    }
    document.getElementById('container').innerHTML = dado;
}
function chacara(){
    dado="";
    for(let i=0; i<tam; i++){
        if(movel[i]['property_type'] == "Chácara"){
    dado += ` 
            <div >
                <img src=${movel[i]['photo']}>
                <h4>${movel[i]['property_type']}</h4>
                <h5> preço: ${movel[i]['price']} R$</h4>
            </div>
        `
        }
    }
    document.getElementById('container').innerHTML = dado;
}


function ordem(a, b){
    return a.price - b.price;
}



function menorPreco(){
    movel.sort(ordem);
    console.log(movel)


    dado="";
    for(let i=0; i<tam; i++){
        if(movel){
    dado += ` 
            <div >
                <img src=${movel[i]['photo']}>
                <h4>${movel[i]['property_type']}</h4>
                <h5> preço: ${movel[i]['price']} R$</h4>
            </div>
        `
        }
    }
    document.getElementById('container').innerHTML = dado;
}



