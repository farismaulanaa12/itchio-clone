import HomePage from './pages/homepage';
import BrowseGames from './pages/browsegames';
import GameJams from './pages/gamejams';
import UploadGame from './pages/uploadgame';
import DeveloperLogs from './pages/developerlogs';
import Community from './pages/community';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import ItchIoApp from './pages/itchioapp';

import { Routes, Route } from 'react-router-dom'

function App()
{
  return(
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/app' element={<ItchIoApp />}/>
        <Route path='/games' element={<BrowseGames/>} />
        <Route path='/jams' element={<GameJams/>} />
        <Route path='/developers' element={<UploadGame/>} />
        <Route path='/devlogs' element={<DeveloperLogs/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/user/forgot-password' element={<ForgotPassword />}/>
      </Routes>
    </>
  )
}

export default App;