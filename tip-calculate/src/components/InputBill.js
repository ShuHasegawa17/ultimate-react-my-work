export default function InputBill({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="bill value"
        value={bill}
        onChange={(e) =>
          setBill(
            Number.isNaN(+e.target.value) ? e.target.value : +e.target.value
          )
        }
      ></input>
    </div>
  );
}
