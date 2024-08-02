import React from 'react'
import './App.css'
import DateInput from './components/DateInput/DateInput'

function App() {

  return (
    <>
    <div className="dateContainer">
      <div className="oldDate">
        <h4>Old Date Input Element</h4>
      <input type="date" />
      </div>
      <div className="newCustomDate">
        
          <div className="format1">
            <h4>MM/DD/YYYY Format</h4>
          <DateInput format="MM/DD/YYYY"></DateInput>
          </div>
          <div className="format2">
            <h4>YYYY/MM/DD Format</h4>
          <DateInput format="YYYY/MM/DD"></DateInput>
          </div>
          <div className="format3">
            <h4>Default Format</h4>
          <DateInput format="DD/MM/YYYY"></DateInput>
          </div>
        </div>
    </div>
      

    </>
  )
}

export default App