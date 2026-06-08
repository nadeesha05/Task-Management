import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssignmentIcon from '@mui/icons-material/Assignment'
import AddTaskIcon from '@mui/icons-material/AddTask'
import PeopleIcon from '@mui/icons-material/People'
import PersonIcon from '@mui/icons-material/Person'
import LogoutIcon from '@mui/icons-material/Logout'

function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 4 }}>
          Task Manager
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexGrow: 1 }}>
          <Button
            color="inherit"
            startIcon={<DashboardIcon />}
            onClick={() => navigate('/dashboard')}
          >
            Dashboard
          </Button>

          <Button
            color="inherit"
            startIcon={<AssignmentIcon />}
            onClick={() => navigate('/taskboard')}
          >
            Task Board
          </Button>

          <Button
            color="inherit"
            startIcon={<AddTaskIcon />}
            onClick={() => navigate('/create-task')}
          >
            Create Task
          </Button>

          <Button
            color="inherit"
            startIcon={<PeopleIcon />}
            onClick={() => navigate('/users')}
          >
            Users
          </Button>

          <Button
            color="inherit"
            startIcon={<PersonIcon />}
            onClick={() => navigate('/profile')}
          >
            Profile
          </Button>
        </Box>

        <Button
          color="inherit"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar