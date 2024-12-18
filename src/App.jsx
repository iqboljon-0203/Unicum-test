import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Degree from './pages/Degree/Degree';
import Test from './pages/Test/Test';
import Result from './pages/Result/Result';
import Offer from './pages/Offer/Offer';
import Questionnaire from './pages/Questionnaire/App';
import StatisticsPage from "./pages/Statistics/Statistics";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path='/statistics' element={<StatisticsPage />} />
        <Route path="/degree" element={<Degree />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} /> 
        <Route path="/offer" element={<Offer />} />
      </Routes>
    </>
  );
}

export default App;
