import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { Home } from './pages/Home';

import { Box } from '@mui/material';
import { Exercisedetail } from './pages/Exercisedetail';

function App() {
  return (
    <div>
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto" >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/exercise/:id' element={<Exercisedetail/>}> </Route>  
      </Routes>
    
      </Box>
     

    </div>
  );
}

export default App;
