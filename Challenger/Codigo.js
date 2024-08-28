function encryptText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    displayResult(encryptedText);
}

// Función de desencriptación
function decryptText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    displayResult(decryptedText);
}

// Función para mostrar el resultado
function displayResult(text) {
    const resultText = document.getElementById('resultText');
    const resultImage = document.getElementById('resultImage');

    resultText.textContent = text;
    resultText.style.display = 'block';
    resultImage.style.display = 'none';
}

// Función para copiar el texto al portapapeles
function copyText() {
    const resultText = document.getElementById('resultText').textContent;
    navigator.clipboard.writeText(resultText)
        .then(() => {
            alert('Texto copiado al portapapeles!');
        })
        .catch(err => {
            alert('Error al copiar el texto: ', err);
        });
}