import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bulma/css/bulma.min.css';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import useToken from '/src/hooks/useToken';
import Bar from './components/bar/bar';

function App() {
  const {token, setToken} = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <div className="wrapper">
        <Bar/>
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}/>

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
