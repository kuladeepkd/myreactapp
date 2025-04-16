import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useMemo, useRef, useCallback } from 'react';

//hooks
//useState
//useEffect
//useMemo
//useRef
//useCallback

function App() {
  const x = 1;
  const intel = useRef('intelasasfafss');
  const [buttonColor, setButtonColor] = useState('blue');
  //buttonColor : blue

  //fetch data of kuladeep
  const getData = () => {
    fetch('https://google.com').then((res) => {
    setButtonColor('pink')
    })
    return null;
  }
  const myName = useMemo(() => {
    if (buttonColor === 'red') {
      return 'kuladeep'
    } else {
      return 'intel'
    }
  }, [buttonColor]);

  useEffect(() => {
    // getData();
    // asdfsadf
    setTimeout(() => {

      setButtonColor('green')
    }, 1000)

    console.log('intel ==> 1 on mount')
    return () => {
      console.log('intel un mount')
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setButtonColor('orange')
    }, 2000)
  }, [])
  useEffect(() => {
    console.log('refff',intel, x);
    setTimeout(() => {
      intel.current.value = 'helloo';
    }, 1000)
    setButtonColor('pink')
  }, [])

  // getData();

  const xyz = useCallback(() => {
    // asdfasdf(prevState => prevState === 'red'? 'blue': 'red')
    setButtonColor('red');
    // buttonColor = 'red';
  }, [])

  return (
    <div className="App">
     <div style={{color: buttonColor}} onClick={xyz}>Click here</div>
     <div>{myName}</div>
     <div>{x}</div>
     <input name="txt" placeholder='hiiii' type="text"  ref={intel} />

    </div>
  );
}

export default App;
