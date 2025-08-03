for (let i = 0x0A; i <= 0x10; i++) {
  console.log("Valor decimal:", i, "| Valor hexadecimal:", i.toString(16).toUpperCase());
}

for (let i = 0x0A; i <= 0xFFFF; i++) {
  console.log(i.toString(16)," = ", String.fromCharCode(i));
}
