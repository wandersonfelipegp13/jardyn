var button = document.getElementById("calcular");

button.addEventListener('click', (e) =>{
    e.preventDefault();
    var num = document.getElementById("grama").value;
    document.getElementById("result").innerHTML = "O ideal para seu gramado é cerca de " + (num * 2) + " kg de adubo.";
});