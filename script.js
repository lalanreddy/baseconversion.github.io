

function decToBin(dec) {
  return (dec >>> 0).toString(2).padStart(8, '0');
}

function binToDec(bin) {
  return parseInt(bin, 2);
}

function decToOct(dec) {
  return dec.toString(8);
}

function octToDec(oct) {
  return parseInt(oct, 8);
}

function decToHex(dec) {
  return dec.toString(16).toUpperCase();
}

function hexToDec(hex) {
  return parseInt(hex, 16);
}

function updateOutputs() {
  const decimalInput = document.getElementById('decimal-input');
  const binaryInput = document.getElementById('binary-input');
  const octalInput = document.getElementById('octal-input');
  const hexadecimalInput = document.getElementById('hexadecimal-input');
  const decimalOutput = document.getElementById('decimal-output');
  const binaryOutput = document.getElementById('binary-output');
  const octalOutput = document.getElementById('octal-output');
  const hexadecimalOutput = document.getElementById('hexadecimal-output');
  

  const decimal = Number(decimalInput.value);
  if (!isNaN(decimal)) {
    binaryOutput.value = decToBin(decimal);
    octalOutput.value = decToOct(decimal);
    hexadecimalOutput.value = decToHex(decimal);
  }

  const binary = binaryInput.value;
  if (/^[01]+$/.test(binary)) {
    decimalOutput.value = binToDec(binary);
    octalOutput.value = decToOct(binToDec(binary));
    hexadecimalOutput.value = decToHex(binToDec(binary));
  }

  const octal = octalInput.value;
  if (/^[0-7]+$/.test(octal)) {
    decimalOutput.value = octToDec(octal);
    binaryOutput.value = decToBin(octToDec(octal));
    hexadecimalOutput.value = decToHex(octToDec(octal));
  }

  const hexadecimal = hexadecimalInput.value;
  if (/^[0-9A-Fa-f]+$/.test(hexadecimal)) {
    decimalOutput.value = hexToDec(hexadecimal);
    binaryOutput.value = decToBin(hexToDec(hexadecimal));
    octalOutput.value = decToOct(hexToDec(hexadecimal));
  }
}

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener('input', updateOutputs);
});
