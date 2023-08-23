function show_Ingredienti(){
    fetch('/ingrediente', 
    {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then((resp)=>resp.json())
    .then(function (data) {
        var dati=JSON.stringify(data);
        document.getElementById("ingredienti").innerHTML=dati;
        return;
    })
    .catch(error => console.error(error));

};

function add_ingrediente(){
    var nome=document.getElementById("nome").value;
    var prezzo=document.getElementById("prezzo").value;

    fetch('/ingrediente',
    {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: nome, prezzo: prezzo})
    })
    .then(show_Ingredienti())
    .catch(error => console.error(error));
    alert("Ingrediente aggiunto.");
}

function edit_prezzo_ingrediente(){
    var nome=document.getElementById("nome").value;
    var prezzo=document.getElementById("prezzo").value;

    fetch('/ingrediente',
    {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: nome, prezzo: prezzo})
    })
    .then(show_Ingredienti())
    .catch(error => console.error(error));
    alert("Ingrediente modificato.");
}