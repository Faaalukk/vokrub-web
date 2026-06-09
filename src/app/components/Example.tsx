import { useState } from "react";

export default function Example() {
  return (
    <div>
      <h1>
        <Greeting name="Fluke"></Greeting>
      </h1>

      <MyButton></MyButton>
      <ListName></ListName>
      <Counter></Counter>
      <ToggleButton></ToggleButton>
      <LiveInput></LiveInput>
      <ProductCard name="Shoes" price={29} inStock={false}></ProductCard>
      <LikeButton label="Road the price"></LikeButton>
    </div>
  );
}

function Greeting({ name }: { name: string }) {
  return (
    <>
      Hello , {name} {2 * 2}
    </>
  );
}

function MyButton() {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      I`m a button
    </button>
  );
}

function ListName() {
  const names = ["alice", "robert", "junior"];

  return (
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
        className="bg-red-500 text-white px-3 py-1 rounded disable:opacity-50"
      >
        -
      </button>
      <span className="px-4">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        +
      </button>
    </div>
  );
}

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={`px-4 py-2 rounded text-white ${isOn ? "bg-green-500" : "bg-red-500"}`}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

function LiveInput() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        className="border px-2 py-1"
        onChange={(e) => setText(e.target.value)}
        placeholder="Type Something Idiot"
      ></input>
      <p>You typed: {text}</p>
    </div>
  );
}

type ProductProps = {
  name: string;
  price: number;
  inStock: boolean;
};
function ProductCard({ name, price, inStock }: ProductProps) {
  return (
    <div className="border p-4 rounded">
      <h2 className="fond-bold">{name}</h2>
      <p>${price}</p>
      <span className={inStock ? "text-green-500" : "text-red-500"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

function LikeButton({ label }: { label: string }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick() {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  }

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded ${liked ? "bg-pink-500" : "bg-gray-500"}`}
    >
      {liked ? "❤️" : "🤍"} {label} ({count})
    </button>
  );
}
