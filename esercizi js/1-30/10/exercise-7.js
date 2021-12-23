function sumUntil(maxValue) {
  
  let totale = 0;

  for (let i = 0; i <= maxValue; totale += i++);

  return totale;
}
console.log(sumUntil(5));