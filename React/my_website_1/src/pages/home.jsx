import { useState } from "react";

function Home() {
  const [Color, setColor] = useState("red");
  const style = {
    backgroundColor: Color,
    width: "100px",
    height: "100px",
    color: "black"
  }

  const handleInput = (e) => {
    const value = e.target.value;
    setColor(value);
  }
  const handleChangeColor = (e) => {
    console.log(Color)
  }

  return (
    <div>
      <div style={style}>
      f
      </div>
      <label htmlFor="">Color</label>
      <input type="text" name="input" value={Color.input} onChange={handleInput} />
      <button onClick={handleChangeColor}>Button</button>
    </div>
    
  )
}

export default Home;
