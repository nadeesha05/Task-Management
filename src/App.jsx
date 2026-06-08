import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import TaskBoardPage from './pages/TaskBoardPage'
import CreateTaskPage from './pages/CreateTaskPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/taskboard" element={<TaskBoardPage />} />
        <Route path="/create-task" element={<CreateTaskPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App