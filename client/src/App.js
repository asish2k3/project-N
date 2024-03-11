import { useState } from 'react';
import './App.css';

import MainSection from './components/MainSection/MainSection';
import TopNav from './components/TopNav/TopNav';

function App() {
  const [employeeId, setEmployeeId] = useState('')
  console.log(employeeId)
  return (
    <div className="App">
      <TopNav/>
      
      <MainSection setEmployeeId={setEmployeeId}/>
    </div>
  );
}

export default App;
