var button = document.getElementById("calcular");
var espace;
var color;

button.addEventListener('click', (e) =>{
    e.preventDefault();

    calc();
    if(espace == null || color == null)
        alert("Selecione os campos antes!");
    analise();

});

function calc() {
    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i ++){
        if(inputs[i].name == "espaco" && inputs[i].checked)
            espace = inputs[i].value;
        if(inputs[i].name == "cor" && inputs[i].checked)
            color = inputs[i].value;  
    }
}

function analise() {

    var txt = document.getElementById("txt-resultado");
    txt.style.display = "inherit";
    var pre = "O ideal para você seria ";
    var img = document.getElementById("resultado");

    if(espace == "menos1m" && color == "nao"){
        img.src = "img/jardin-vertical-sem-flor.jpg";
        txt.innerHTML = pre + "um jardim vertical!";
    }
    else if(espace == "menos1m" && (color == "nincomoda" || color == "sim")){
        img.src = "img/jardin-vertical.jpg";
        txt.innerHTML = pre + "um jardim vertical!";
    }

    else if(espace == "cerca3m" && (color == "nao" || color == "nincomoda")){
        img.src = "img/service03.jpg";
        txt.innerHTML = pre + "um gramado médio!";
    }
    else if(espace == "cerca3m" && color == "sim"){
        img.src = "img/manual02.jpg";
        txt.innerHTML = pre + "rosas!";
    }

    else if(espace == "mais3m" && color == "nao"){
        img.src = "img/service03.jpg";
        txt.innerHTML = pre + "um gramado!";
    }
    else if(espace == "mais3m" && color == "nincomoda"){
        img.src = "img/bg-blog.jpeg";
        txt.innerHTML = pre + "margaridas!";
    }
    else { 
        img.src = "img/bg-services.jpg";
        txt.innerHTML = pre + "uma árvore!";
    }
}