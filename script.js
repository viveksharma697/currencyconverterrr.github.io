const currency1 = document.getElementById('curr');
const currency2 = document.getElementById('curr2');
const equal_1 = document.getElementById('equal1');
const equal_2 = document.getElementById('equal2');

const rate1 = document.getElementById('rate');
const convert = document.getElementById('convert');

function calculate(){
    const curri = currency1.value;
    const curri2 = currency2.value;

    fetch(`https://open.er-api.com/v6/latest/${curri}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const rate = data.rates[curri2];
      rate1.innerText = `1 ${curri} = ${rate} ${curri2}`

      equal_2.value = (equal_1.value * rate).toFixed(2);
    });

}

currency1.addEventListener('change', calculate);
currency2.addEventListener('change', calculate);
equal_1.addEventListener('input', calculate);
equal_2.addEventListener('input', calculate);
convert.addEventListener('click',()=>{
  const conv = currency1.value;
  currency1.value = currency2.value;
  currency2.value = conv;
  calculate();
});

calculate();