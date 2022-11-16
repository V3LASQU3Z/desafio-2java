function fact() {
    var n = parseInt(document.getElementById("n").value);
    var uno = ((2 * n) + (1 / 3));
    var dos = uno * Math.PI;
    var tres = Math.sqrt(dos);
    var cuatro = Math.pow(n, n) * Math.exp(-n);
    var operacion = tres * cuatro;

    document.getElementById('FACTO').innerHTML = operacion

}