import sum from "./header";

const arr1 = ['bui','huu','dat',20];
const arr2 = ['bui','huu','dat'];

const App = () => {
  const Arr = [...arr1, ...arr2, sum(1,7)];
  
  return Arr;
}
export default App;
