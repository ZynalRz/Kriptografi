function encrypt() {
    const shift = parseInt(document.getElementById('shift').value, 10);
    const text = document.getElementById('text').value;
    const resultElement = document.getElementById('result');

    if (isNaN(shift)) {
        resultElement.textContent = 'Masukkan nilai pergeseran yang valid.';
        return;
    }

    const shiftAmount = shift % 26; // Simplify the shift
    let encryptedText = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char >= 'A' && char <= 'Z') {
            let newChar = String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + shiftAmount + 26) % 26 + 'A'.charCodeAt(0));
            encryptedText += newChar;
        } else if (char >= 'a' && char <= 'z') {
            let newChar = String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + shiftAmount + 26) % 26 + 'a'.charCodeAt(0));
            encryptedText += newChar;
        } else {
            encryptedText += char; // Keep non-alphabetic characters unchanged
        }
    }

    resultElement.textContent = encryptedText;
}
