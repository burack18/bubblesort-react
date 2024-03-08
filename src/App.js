import { useEffect, useState } from 'react';
import './App.css';

const arr = new Array(350).fill(0).map(x => Math.floor((Math.random() * 200 + 1)))
const delay=1;
const sleep = () => new Promise(res => {
  setTimeout(() => {
    res()
  }, delay)
})
function swap(arr, firstItemIndex, SecondItemIndex) {
  let temp = arr[firstItemIndex]
  arr[firstItemIndex] = arr[SecondItemIndex]
  arr[SecondItemIndex] = temp
}
function App() {
  const [lines, setLines] = useState(arr)
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    sort()
  }, [])
  const sort = async () => {
    setCount(0)
    for (let i = 0; i < lines.length; i++) {
      for (let j = lines.length - 1; j > i; j--) {
        if (lines[j] < lines[j - 1]) {
          swap(lines, j, j - 1)
          setLines([...lines])
          setCount(pr=>pr+1)
          await sleep()
        }
      }
    }
  }
  return (
    <div className="App">
      <p>Total Swap:{count}</p>
      <div style={{ height: `90vh`, width: `${lines.length * 5}px`, margin: 'auto', display: 'flex', alignItems: 'end' }}>
        {
          lines.map((l, index) => {
            return (<div key={index} style={{ height: `${l}px`, width: '20px', backgroundColor: 'red' }}></div>)
          })
        }
      </div>
    </div>
  );
}

export default App;
