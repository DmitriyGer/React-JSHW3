import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, IconButton, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Функция для добавления задачи
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(''); // Очистить поле ввода
    }
  };

  // Функция для удаления задачи
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <TextField
        label="Новая задача"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        style={{ marginBottom: 20 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask} fullWidth>
        Добавить задачу
      </Button>

      <List style={{ marginTop: 20 }}>
        {tasks.map((task, index) => (
          <ListItem key={index} component="div" style={{ marginBottom: 10 }}>
            <Card variant="outlined" style={{ width: '100%' }}>
              <CardContent>
                <ListItemText primary={task} />
                <IconButton edge="end" color="secondary" onClick={() => handleDeleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
