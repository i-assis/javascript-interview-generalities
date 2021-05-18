const objetoBrutoExemplo = {
  item1: { key: "teste", value: "teste" },
  item2: { key: "testeEspecial", value: "teste" },
  item3: { key: "teste", value: "teste" },
  nada: {}
};
console.log(objetoBrutoExemplo)

function paraArray(objetoBruto)
{
  comoArray = 
  Object.keys(
  objetoBruto).map((chaves) => [(chaves), objetoBruto[chaves]]
  )
  return comoArray
}

objetoBrutoComoArrayExemplo = paraArray(objetoBrutoExemplo)
console.log(objetoBrutoComoArrayExemplo)

planificado = objetoBrutoComoArrayExemplo.flat(1) 
console.log(planificado)

planificadoFiltrado = planificado.filter(
  function(argQualquer, index) 
  {return index % 2 === 1;
  }
  );

console.log(planificadoFiltrado)

planificadoFiltradoSemValores = 
planificadoFiltrado.forEach(function(ElementoAgora){ delete ElementoAgora.key, delete ElementoAgora.value });

console.log(planificadoFiltradoSemValores) //! ??????????

console.log(objetoBrutoExemplo)

// const chavesPermitidasExemplo = [ 'item1', 'item2', 'item3' ];

// function filtrando(objetoBruto,chavesPermitidas) {
//   const objetoFiltrado = Object
//     .keys(objetoBruto)
//     .filter((key) => chavesPermitidas.includes(key))
//     .reduce((objetoPosReduce, key) => {
//       objetoPosReduce[key] = objetoBruto[key]
//       return objetoPosReduce
//     }, {})
//     return objetoFiltrado
// }

// const dadosFiltrados = filtrando(objetoBrutoExemplo,chavesPermitidasExemplo)
// console.log(dadosFiltrados)
