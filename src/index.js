function converter() {
    event.preventDefault()
    const baseEntrada = parseInt(document.getElementById("base-entrada").value);
    const baseSaida = parseInt(document.getElementById("base-saida").value);
    const valor = document.getElementById("valor").value;
    const valorDecimal = parseInt(valor, baseEntrada);
    const valorConvertido = valorDecimal.toString(baseSaida);
    document.getElementById("resultado").textContent = valorConvertido;
}