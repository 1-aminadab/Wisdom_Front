import React, { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

const ClassSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    courseTitle: '',
    courseCode: '',
    instructor: '',
    classroom: '',
    dayOfWeek: '',
    time: 'Morning', // Default to Morning
  });

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setNewSchedule({
      courseTitle: '',
      courseCode: '',
      instructor: '',
      classroom: '',
      dayOfWeek: '',
      time: 'Morning',
    });
  };

  const handleAddSchedule = () => {
    setSchedules([...schedules, { ...newSchedule, id: Date.now() }]);
    handleCloseModal();
  };

  const columns = [
    { id: 'courseTitle', label: 'Course Title' },
    { id: 'courseCode', label: 'Course Code' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'classroom', label: 'Classroom' },
    { id: 'dayOfWeek', label: 'Day of Week' },
    { id: 'time', label: 'Time' },
  ];

  return (
    <div style={{ padding: '16px' }}>
      <h1>Class Schedule</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenModal}
        style={{ marginBottom: '16px' }}
      >
        Add New Schedule
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {schedules.map((schedule) => (
              <TableRow key={schedule.id}>
                {columns.map((column) => (
                  <TableCell key={column.id}>{schedule[column.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={modalOpen} sx={{width:"100%", background:"white"}} onClose={handleCloseModal}>
        <div style={{ padding: 16, width:"100%" }}>
          <h2>Add New Schedule</h2>
          <TextField
            label="Course Title"
            value={newSchedule.courseTitle}
            onChange={(e) => setNewSchedule({ ...newSchedule, courseTitle: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Course Code"
            value={newSchedule.courseCode}
            onChange={(e) => setNewSchedule({ ...newSchedule, courseCode: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Instructor"
            value={newSchedule.instructor}
            onChange={(e) => setNewSchedule({ ...newSchedule, instructor: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Classroom"
            value={newSchedule.classroom}
            onChange={(e) => setNewSchedule({ ...newSchedule, classroom: e.target.value })}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Day of Week</InputLabel>
            <Select
              value={newSchedule.dayOfWeek}
              onChange={(e) => setNewSchedule({ ...newSchedule, dayOfWeek: e.target.value })}
            >
              <MenuItem value="Monday">Monday</MenuItem>
              <MenuItem value="Tuesday">Tuesday</MenuItem>
              <MenuItem value="Wednesday">Wednesday</MenuItem>
              <MenuItem value="Thursday">Thursday</MenuItem>
              <MenuItem value="Friday">Friday</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Time</InputLabel>
            <Select
              value={newSchedule.time}
              onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })}
            >
              <MenuItem value="Morning">Morning</MenuItem>
              <MenuItem value="Afternoon">Afternoon</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddSchedule}
            style={{ marginTop: '16px' }}
          >
            Add Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ClassSchedule;
