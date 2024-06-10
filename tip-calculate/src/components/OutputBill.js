export default function OutputBill({ bill, tip }) {
  return <h3>{`You pay $${bill + tip} ($${bill} + $${tip})`}</h3>;
}
