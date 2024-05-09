let product = {
  milkshake400: [0, 0, 170],
  milkshake300: [0, 0, 110],
  one0: [0, 0],
  one1: [0, 0],
  one2: [0, 0],
  one3: [0, 0],
  one4: [0, 0],
  one5: [0, 0],
  one6: [0, 0],
  one7: [0, 0],
  one8: [0, 0],
  one9: [0, 0],
  one10: [0, 0],
  one11: [0, 0]
}
window.onload = () => {
  loop(1)
}
function loop(counter) {
  const obj = localStorage.getItem("obj")
  let newObj = JSON.parse(obj)
  if (newObj) {
    product = newObj
  }
  for (let key in product) {
    document.getElementById(
      `section_${counter}`
    ).innerText = `кол-во : ${product[key][0]}`
    document.getElementById(
      `section_${counter}two`
    ).innerText = `сумма : ${product[key][1]}`
    counter++
  }
}
function start(_count, _temp, _prod) {
  console.log(product)

  if (product[_prod][0] + _count >= 0) {
    product[_prod][0] += _count // кол-во товаров
  }
  if (product[_prod][1] + _count * product[_prod][2] >= 0) {
    product[_prod][1] += _count * product[_prod][2] // сумма  товаров
  }
  document.getElementById(
    `section_${_temp}`
  ).innerText = `кол-во : ${product[_prod][0]}`
  document.getElementById(
    `section_${_temp}two`
  ).innerText = `сумма : ${product[_prod][1]}`
  localStorage.setItem("obj", JSON.stringify(product))
}
