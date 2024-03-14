// import { useEffect, useState } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'
import Keader from './components/Header/Keader'
// import Watch from './components/Watch/Watch'

function App() {

  // const [watches, setWatches] = useState([]);

  // useEffect(() =>{
  //   fetch('watches.json')
  //   .then(res => res.json())
  //   .then(data => setWatches(data))
  // },[])

  // const watches = [
  //   {
  //     brand: "Apple",
  //     model: "Apple Watch Series 6",
  //     features: ["ECG monitoring", "Fitness tracking", "Always-on display"],
  //     price: 399,
  //   },
  //   {
  //     brand: "Samsung",
  //     model: "Galaxy Watch 4",
  //     features: ["Blood pressure monitoring", "Sleep tracking", "Rotating bezel"],
  //     price: 249,
  //   },
  //   {
  //     brand: "Fitbit",
  //     model: "Versa 3",
  //     features: ["Built-in GPS", "Heart rate monitoring", "Voice assistant"],
  //     price: 229,
  //   },
  //   {
  //     brand: "Garmin",
  //     model: "Vivoactive 4",
  //     features: ["Pulse Ox sensor", "Animated workouts", "Music storage"],
  //     price: 299,
  //   },
  //   {
  //     brand: "Fossil",
  //     model: "Gen 5 Carlyle HR",
  //     features: ["Wear OS", "Customizable dials", "Google Assistant"],
  //     price: 199,
  //   },
  // ];
  
  return (
    <>

    <Keader></Keader>
    <Bottles></Bottles>


      {/* <h1>Sunglass And Watch</h1> */}
      {/* {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      } */}
    </>
  )
}

export default App
