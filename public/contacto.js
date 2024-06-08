document.getElementById('contactForm').addEventListener('submit', async (event)=>{
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    await SendMessage(name,email,subject,message)
});

async function SendMessage(name,email,subject,message) {

    const response = await fetch('/send-contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name,email,subject,message}),
    });

    const result = await response.json();
    location.href = "mensaje.html";
}