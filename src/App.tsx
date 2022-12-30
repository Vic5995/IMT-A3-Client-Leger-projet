import {
  Container,
  Box,
  CircularProgress,
  Backdrop,
} from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import StudentCardList from './components/CardDisplay/StudentCardList';
import Footer from './layout/Footer';
import Header from './layout/Header';


import { Student } from './types';
import useFetchStudent from './hooks/useFetchStudent';

import UserActionContext from './context/UserActionContext';

const GET_STUDENTS_URL = 'http://localhost:3000/students';
const PUT_STUDENT_URL = (id: number) => `http://localhost:3000/students/${id}`;

function App() {
  const [studentsToDisplay, setStudentsToDisplay] = useState<Student[]>([]);

  const { loading, data } = useFetchStudent(GET_STUDENTS_URL);

  useEffect(() => {
    if (data) setStudentsToDisplay(data);
  }, [data]);

  const saveModifications = (modifiedPerson: Student) => {
    setStudentsToDisplay((studentsToDisplay) =>
      studentsToDisplay.map((el) =>
        el.id === modifiedPerson.id ? modifiedPerson : el
      )
    );
    const opt = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modifiedPerson),
    };
    fetch(PUT_STUDENT_URL(modifiedPerson.id), opt);
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',
      }}
    >
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Header />

      <Box
        sx={{
          flexGrow: 2,
          margin: '16px 10%',
        }}
      >
        <UserActionContext.Provider value={{ saveModifications }}>
          <StudentCardList studentList={studentsToDisplay} />
        </UserActionContext.Provider>
      </Box>

      <Footer />
    </Container>
  );
}

export default App;
