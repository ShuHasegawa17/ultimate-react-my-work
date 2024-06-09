export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <p>
          <em>start adding some items to your packeng list</em>
        </p>
      </footer>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedRatio = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedRatio === 100
          ? 'completed!!'
          : `You have ${numItems} items on your list, and you already packed ${packedItems} (${packedRatio}%)`}
      </em>
    </footer>
  );
}
