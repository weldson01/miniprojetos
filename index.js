function dividirCedulas(valor) {
  let duzentos, cem, cinquenta, vinte, dez, cinco, dois, um, moedas
  //restrições
  const restricaoDuzentos = document.getElementById("duzentos").checked
  const restricaoCem = document.getElementById("cem").checked
  const restricaoCinquenta = document.getElementById("cinquenta").checked
  const restricaoVinte = document.getElementById("vinte").checked
  const restricaoDez = document.getElementById("dez").checked
  const restricaoCinco = document.getElementById("cinco").checked
  const restricaoDois = document.getElementById("dois").checked
  const restricaoUm = document.getElementById("um").checked
  const restricaoMoedas = document.getElementById("moedas").checked

  if (restricaoDuzentos) {
    if (valor >= 200) {
      duzentos = Math.floor(valor / 200)
      valor -= duzentos * 200
    }
  }
  if (restricaoCem) {
    if (valor >= 100) {
      cem = Math.floor(valor / 100)
      valor -= cem * 100
    }
  }
  if (restricaoCinquenta) {
    if (valor >= 50) {
      cinquenta = Math.floor(valor / 50)
      valor -= cinquenta * 50
    }
  }
  if (restricaoVinte) {
    if (valor >= 20) {
      vinte = Math.floor(valor / 20)
      valor -= vinte * 20
    }
  }
  if (restricaoDez) {
    if (valor >= 10) {
      dez = Math.floor(valor / 10)
      valor -= dez * 10
    }
  }
  if (restricaoCinco) {
    if (valor >= 5) {
      cinco = Math.floor(valor / 5)
      valor -= cinco * 5
    }
  }
  if (restricaoDois) {
    if (valor >= 2) {
      dois = Math.floor(valor / 2)
      valor -= dois * 2
    }
  }
  if (restricaoUm) {
    if (valor >= 1) {
      um = Math.floor(valor / 1)
      valor %= um
    }
  }
  if (restricaoMoedas) {
    if (valor > 0) {
      moedas = valor.toFixed(2)
      valor = 0;
    }
  }
  return [duzentos, cem, cinquenta, vinte, dez, cinco, dois, um, moedas]
}
function calcCedulas() {
  const valor = document.getElementById("valorReal").value
  const out = document.getElementById("resposta")
  const cedulas = dividirCedulas(valor)
  let stringCedulas = ""
  if (cedulas[0])
    stringCedulas += ("<img src='./img/200reais.jpg'> " + cedulas[0] + " de 200, </br>")
  if (cedulas[1])
    stringCedulas += ("<img src='./img/100reais.jpg'> " + cedulas[1] + " de 100, </br>")
  if (cedulas[2])
    stringCedulas += ("<img src='./img/50reais.jfif'> " + cedulas[2] + " de 50,</br>")
  if (cedulas[3])
    stringCedulas += ("<img src='./img/20reais.jfif'> " + cedulas[3] + " de 20, </br>")
  if (cedulas[4])
    stringCedulas += ("<img src='./img/10reais.jpg'> " + cedulas[4] + " de 10, </br>")
  if (cedulas[5])
    stringCedulas += ("<img src='./img/5reais.jpg'> " + cedulas[5] + " de 5, </br>")
  if (cedulas[6])
    stringCedulas += ("<img src='./img/2reais.jpg'> " + cedulas[6] + " de 2,</br> ")
  if (cedulas[7])
    stringCedulas += ("<img src='./img/1real.jpg'> " + cedulas[7] + " de 1, </br>")
  if (cedulas[8])
    stringCedulas += ("<img src='./img/moedas.jfif'> " + cedulas[8] + " de moedas.")
  out.innerHTML = stringCedulas
}