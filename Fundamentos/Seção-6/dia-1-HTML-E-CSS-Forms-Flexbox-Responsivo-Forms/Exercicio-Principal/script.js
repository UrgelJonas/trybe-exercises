const preventDefault = () => {
    document.getElementById("enviar").addEventListener ("click", event => {
        event.preventDefault();
    })
};

preventDefault();

// Function to validate the form
const validateForm = () => {
    const name = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("resposta").value;

    if (name === "" || email === "" || message === "") {
        alert("Preencha todos os campos!");
    } else {
        alert("Mensagem enviada com sucesso!");
    }
}
