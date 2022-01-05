import { useState } from "react";

function Select() {
  const [Value, setValue] = useState('');

  const handleSelect = (e) => {
    setValue(e.target.value);
  }
  
  console.log(Value)
  return (
    <form action="">
      <select name="food" value={Value} id="" onChange={handleSelect}>
        <option value="Thit Ga">Thit Ga</option>
        <option value="Thit Heo">Thit Heo</option>
        <option value="Lau Ech">Lau Ech</option>
        <option value="Chao Long">Chao Long</option>
      </select>
    </form>
  )
}
export default Select;
