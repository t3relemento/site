document.getElementById('registerForm').addEventListener('submit', async (event)=>{
    event.preventDefault();

    const user = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const birth = document.getElementById("bdate").value;

    const userCheck = await Usuaro(user);

    if(userCheck != null){
        alert("Nombre de usuario no disponible");
        console.log(userCheck);
        return;
    }

    await CreateUser(user,email,password,name,birth)
});

async function CreateUser(username,email, password,name,bdate) {
    const user = await Usuaro(username);

    if(user != null){
        alert("Este nombre de usuario ya existe");
        return;
    }
    const response = await fetch('/create-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username,email, password,name,birthdate:bdate}),
    });

    const result = await response.json();
    alert("Cuenta creada con exito");
    location.href = "inicio_sesion.html";
}

async function Usuaro(usuario){
    const nombre = usuario;

    const response = await fetch(`/get-user-name/${nombre}`);
    if (!response.ok) {
        throw new Error('Errorsito');
    }
    const data = await response.json();
    return data;
}