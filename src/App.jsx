import './index.css'
import Myselect from './Select'
import React from 'react';

const options=[
  {label:'Red',value:'red'},
  {label:'Blue',value:'blue'},
  {label:'Green',value:'green'},
  {label:'Yellow',value:'yellow'},
  {label:'black',value:'black'},
  {label:'tail',value:'tail'},
  {label:'brown',value:'brown'},
  {label:'white',value:'white'},
]
function onChangeInput(value){
  console.log(value);
}


function App() {

  return (
    <div className="App">
       <Myselect isMulti={true} className="tick" defaultValue={[options[3]]} onChange={onChangeInput} options={options} label="Choose Your Favourite Colour" />
    </div>
  )
}

export default App
