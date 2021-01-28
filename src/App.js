
import React, {useState} from 'react';

export default function Functions() {
  const [litres, setLitres] = useState(0);
  const [Grams, setGrams] = useState(0);
  const [Burning, setBurning] = useState(0);
  const [Gramsleft, setGramsleft] = useState(0);
  const [Bottles, setBottles] = useState(0);
  const [Weight, setWeight] = useState(0);
  const [Time, setTime] = useState(0);
  const [resultfemale, setResultfemale] = useState(0);
  const [resultmale, setResultmale] = useState(0);

  function alcometer(e) {
    e.preventDefault();
    const litres = Bottles * 0.33;
    setLitres(litres);

    e.preventDefault();
    const Grams = litres * 8 * 4.5;
    setGrams(Grams);

    e.preventDefault();
    const Burning = Weight / 10;
    setBurning(Burning);

    e.preventDefault();
    const gramsleft = Grams - (Burning * Time)
    setGramsleft(gramsleft);

    e.preventDefault();
    const resultfemale = gramsleft / (Weight * 0.6);
    setResultfemale(resultfemale);

    e.preventDefault();
    const resultmale = gramsleft / (Weight * 0.7);
    setResultmale(resultmale);
  }

  return (
    <form onSubmit={alcometer}>
      <div>
        <h3>Calculating alcohol blood level</h3>
        <label>Weight</label>
        <input type="number" value={Weight} onChange={e => setWeight(e.target.value)} />
        <br />
        <label>Bottles</label>
        <input type="number" value={Bottles} onChange={e => setBottles(e.target.value)} />
        <br />
        <label>Time</label>
        <input type="number" value={Time} onChange={e => setTime(e.target.value)} />
        <br />
{/*
        <label>Gender</label>        
        <input type="radio" value="female" /> Female       
        <input type="radio" value="male" /> Male
*/}
      </div>
      <div>
          <output>Result for women is {resultfemale.toFixed(2)}</output>
          <br />
          <output>Result for men is {resultmale.toFixed(2)}</output>
      </div>
      <button>Calculate</button>
    </form>
  )
}