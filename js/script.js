//para hallar el IMC(idice de masa corporal)
//peso(en kg) dividido por la estatura(en metros)al cuadro
//peso/(estatura)2

let respuesta
let btnCalcular = document.getElementById('form-imc').addEventListener('submit', (e) => {
    e.preventDefault()
    let txtPeso = document.getElementById('txtPeso').value
    let txtEstatura = document.getElementById('txtEstatura').value
    let imc = txtPeso / (Math.pow(txtEstatura, 2))
    if (imc < 18.5) {
        respuesta = 'Peso Bajo'
    } else if (imc > 18.5 && imc < 24.9) {
        respuesta = 'Normal'
    } else if (imc > 25.0 && imc < 29.9) {
        respuesta = 'Sobrepeso'
    } else {
        respuesta = 'Obeso'
    }
    let contenido = document.getElementById('contenido').innerHTML = `
        <h2>${respuesta}</h2>
    `
})


//tabla de IMC
//Bajo peso por debajo de 18.5
//normal 18.5-24.9
//sobrepeso 25.0-29.9
//obeso 30.00 a mas