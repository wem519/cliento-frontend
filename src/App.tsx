import { Route, Routes } from 'react-router-dom';
import List from './Pages/Cliento/List';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<List/>}/>
    </Routes>
  );
}

export default App;
