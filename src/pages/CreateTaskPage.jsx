import Navbar from '../components/Navbar'
import { useState } from 'react'
import {
  Box, Button, TextField, Typography,
  Paper, MenuItem, Alert
} from '@mui/material'

function CreateTaskPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [assignee, setAssignee] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!title || !priority || !dueDate) {
      setError('Please fill Title, Priority and Due Date')
      setSuccess(false)
      return
    }
    setError('')
    setSuccess(true)
  }

  return (
    <Box sx={{
      p: 4, backgroundColor: '#f0f2f5', minHeight: '100vh'
    }}>
        <Navbar />
      <Typography variant="h4" sx={{
        mb: 4, fontWeight: 'bold', color: '#1976d2'
      }}>
        Create New Task
      </Typography>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, maxWidth: 600 }}>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>Task created successfully!</Alert>}

        <TextField
          fullWidth
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 3 }}
          required
        />

        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={3}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          select
          label="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          sx={{ mb: 3 }}
          required
        >
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </TextField>

        <TextField
          fullWidth
          select
          label="Assign To"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          sx={{ mb: 3 }}
        >
          <MenuItem value="Nadeesha">Nadeesha</MenuItem>
          <MenuItem value="John">John</MenuItem>
          <MenuItem value="Sara">Sara</MenuItem>
          <MenuItem value="Mike">Mike</MenuItem>
        </TextField>

        <TextField
          fullWidth
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 3 }}
          required
        />

        <TextField
          fullWidth
          select
          label="Status"
          defaultValue="To Do"
          sx={{ mb: 3 }}
        >
          <MenuItem value="To Do">To Do</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </TextField>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleSubmit}
            sx={{ backgroundColor: '#1976d2', py: 1.5 }}
          >
            Create Task
          </Button>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            onClick={() => {
              setTitle('')
              setDescription('')
              setPriority('')
              setDueDate('')
              setAssignee('')
              setSuccess(false)
              setError('')
            }}
          >
            Clear
          </Button>
        </Box>

      </Paper>
    </Box>
  )
}

export default CreateTaskPage