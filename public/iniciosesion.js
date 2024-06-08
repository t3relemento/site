document.getElementById('loginForm').addEventListener('submit', async (event)=>{
    event.preventDefault();

    const user = await GetUser(document.getElementById('user').value);
    const password = document.getElementById('password').value;
    if(user == null){
        alert("Este usuario no existe");
        return;
    }
    if(password != user.password){
        alert("La contraseña no coincide");
        return;
    }

    location.href = "pagina.html";
});


async function GetUser(user){
    const username = user;

    try {
        const response = await fetch(`/get-user-name/${username}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}