import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Dashboard from './components/Dashboard/Dashboard';
// import SignUp from './components/Signup/SignUp';
// import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
// import { store } from './store';
import { Provider } from "react-redux";
const theme = createTheme();
function App() {
  return (
    // <Provider store={store}>
  <ThemeProvider theme={theme}>
       <Routes>
      {/* <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
     </ThemeProvider>
    //  </Provider>
  );
}

export default App;
