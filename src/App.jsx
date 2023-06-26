import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProvider from './contexts/UserContext';
import { Signin, Signup, Dashboard, Enrollment, Attendance, Historic } from './pages';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer 
      theme="dark"
      progressStyle={{background: "#1A76D2"}}
      />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/enrollment" element={<Enrollment />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/historic" element={<Historic />} />
          </Routes>
        </UserProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
