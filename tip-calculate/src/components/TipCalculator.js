import { useState } from 'react';
import InputBill from './InputBill';
import SelectService from './SelectService';
import OutputBill from './OutputBill';
import Button from './Button';

const options = [
  {
    id: 1,
    name: 'bad',
    ratio: 0,
  },
  {
    id: 2,
    name: 'good',
    ratio: 10,
  },
  { id: 3, name: 'very Good', ratio: 20 },
];

export default function TipCalculator() {
  const [bill, setBill] = useState('');
  const [selected, setSelected] = useState(1);
  const [selected2, setSelected2] = useState(1);

  const ratio1 = options.find((o) => o.id === +selected).ratio;
  const ratio2 = options.find((o) => o.id === +selected2).ratio;
  const tip = bill * ((ratio1 + ratio2) / 2 / 100);

  const handleClick = () => {
    setBill('');
    setSelected(1);
    setSelected2(1);
  };

  return (
    <div>
      <InputBill bill={bill} setBill={setBill} />
      <SelectService
        options={options}
        selected={selected}
        setSelected={setSelected}
      >
        How did you like the service?
      </SelectService>
      <SelectService
        options={options}
        selected={selected2}
        setSelected={setSelected2}
      >
        How did your friend like the service?
      </SelectService>
      {bill > 0 && (
        <>
          <OutputBill bill={bill} tip={tip} />
          <Button onClick={handleClick}>reset</Button>
        </>
      )}
    </div>
  );
}
