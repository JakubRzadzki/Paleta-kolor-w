function generatePalette() {
    const h = parseInt(document.getElementById('hInput').value);
    const s = parseInt(document.getElementById('sInput').value);
    const l = parseInt(document.getElementById('lInput').value);
    const numberOfColors = parseInt(document.getElementById('numberOfColors').value);
    const colorContainer = document.getElementById('colorContainer');

    colorContainer.innerHTML = '';

    for (let i = 0; i < numberOfColors; i++) {
        const newH = (h + i * (360 / numberOfColors)) % 360;
        const color = `hsl(${newH}, ${s}%, ${l}%)`;

        const colorBox = document.createElement('div');
        colorBox.className = 'colorBox';
        colorBox.style.backgroundColor = color;
        colorBox.textContent = color;

        colorContainer.appendChild(colorBox);
    }
}