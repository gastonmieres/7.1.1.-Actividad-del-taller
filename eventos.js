document.addEventListener("DOMContentLoaded", () => {
    const miDiv = document.getElementById("miDiv");

    miDiv.addEventListener("click", () => {
        event.stopPropagation();
        alert("¡Hola! Soy el DIV");
    });
});
