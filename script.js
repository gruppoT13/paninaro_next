
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

    .then(response => response.json()) // Parse the response JSON
    .then(result => {
        if (result.message) {
            alert(result.message); // Show the message from the server
        } else {
            alert("Ingrediente added successfully."); // Good result
        }
    })
    .catch(error => {
        console.error(error);
        alert("An error occurred."); // Bad result
    });
    
    
    
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

    .then(response => response.json())
    .then(result => {
        if (result.message) {
            alert(result.message); // Show the message from the server
        } else {
            alert("Ingrediente modificato."); // Good result
        }
    })
    .catch(error => {
        console.error(error);
        alert("An error occurred."); // Bad result
    });
}

function logIn(){
    var admin=document.getElementById("admin").value;
    var password=document.getElementById("password").value;

    fetch('/gestore',
    {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ admin: admin, password: password})
    })
    .then((response) => response.json())
    .then(result => {
        if (result.message) {
            alert(result.message); // Show the message from the server
        } else {
            alert("Accesso."); // Good result
            window.open("gestore_page.html"); 
        }
    })
    .catch(error => {
        console.error(error);
        alert("Accesso Negato."); // Bad result
    });
}