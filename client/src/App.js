import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import AddClientPage from './pages/clientPages/AddClientPage';
import ViewClientsPage from './pages/clientPages/ViewClientsPage';
import AddShopperPage from './pages/shopperPages/AddShopperPage';
import ViewShopperPage from './pages/shopperPages/ViewShopperPage';
import NewsurveyFromPage from './pages/surveyFormsPages/NewsurveyFromPage';
import ViewSurveyFormPage from './pages/surveyFormsPages/ViewSurveyFormPage';
import AddQuestionPage from './pages/questionPages/AddQuestionPage';
import ViewQuestionPage from './pages/questionPages/ViewQuestionPage';
import LoginPage from './pages/LoginPages/LoginPage';
import RegisterPage from './pages/RegisterPages/Register';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardPage/>} />
        <Route path='/add-client' element={<AddClientPage/>} />
        <Route path='/view-client' element={<ViewClientsPage/>} />
        <Route path='/add-shopper' element={<AddShopperPage/>} />
        <Route path='/view-shopper' element={<ViewShopperPage/>} />
        <Route path='/new-surveyForm' element={<NewsurveyFromPage/>} />
        <Route path='/view-surveyForm' element={<ViewSurveyFormPage/>} />
        <Route path='/add-question' element={<AddQuestionPage/>} />
        <Route path='/view-question' element={<ViewQuestionPage/>} />
        <Route path='/Login' element={<LoginPage/>} />

        <Route path='/Register' element={<RegisterPage/>} />
      </Routes>

    </Router>
    
  );
}

export default App;
