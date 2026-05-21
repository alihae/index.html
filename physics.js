const distanceRange =
document.getElementById('distanceRange');

const voltageValue =
document.getElementById('voltageValue');

const currentValue =
document.getElementById('currentValue');

const capacitanceValue =
document.getElementById('capacitanceValue');

distanceRange.addEventListener('input',()=>{

  const d = parseFloat(distanceRange.value);

  const voltage = (12 / d).toFixed(2);

  const current = (2 + Math.random()).toFixed(2);

  const capacitance =
  (0.08 / d).toFixed(3);

  voltageValue.innerText =
  voltage + 'V';

  currentValue.innerText =
  current + 'A';

  capacitanceValue.innerText =
  capacitance + 'μF';

});
