import Hello from "./components/Hello"
function App() {
  const person={
    name:"Harish",
    age:"20",
    gender:"Male",
    seatnumbers:[121,2,322,323,23,4,3,4]
  }
 
  return (
  <div><Hello person={person}/></div>
  )
}

export default App
