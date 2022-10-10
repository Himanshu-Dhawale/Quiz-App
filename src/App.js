import './App.css';
import {Route, Routes} from 'react-router-dom'
import {Homepage} from "./pages/homepage/Homepage"
import {Quizzpage} from "./pages/quizpage/quizpage"
import { Rules } from './pages/rulespage/rulespage';
import {Result} from "./pages/resultpage/resultpage"
function App() {
  return (
    <div className="App">
       <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/rules" element={<Rules/>} />
      <Route path="/quizz" element={<Quizzpage/>}/>
      <Route path="/result" element={<Result/>}/>
      </Routes>
    </div>
  );
}

export default App;
