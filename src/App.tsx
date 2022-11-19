import {
  Container,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  ThemeProvider,
  CircularProgress,
  Backdrop
} from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import StudentCardList from './components/CardDisplay/StudentCardList';
import Footer from './layout/Footer';
import Header from './layout/Header';

import lightTheme from './theme/theme';

import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import StudentLineList from './components/ListDisplay/StudentLineList';
import { Student } from './types';
import useFetchStudent from './hooks/useFetchStudent';

const GET_STUDENTS_URL = 'http://localhost:3000/students';

function App() {
  const [displayMode, setDisplayMode] = useState<'CARD' | 'LIST'>('CARD');
  const [studentsToDisplay, setStudentsToDisplay] = useState<Student[]>([]);

  const { loading, data } = useFetchStudent(GET_STUDENTS_URL);

  useEffect(() => {
    if (data) setStudentsToDisplay(data);
  }, [data]);

  return (
    // <ThemeProvider theme={lightTheme} >
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F2F2F2'
      }}
    >
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Header />

      <ToggleButtonGroup
        value={displayMode}
        exclusive
        onChange={(_, mode: 'CARD' | 'LIST') => setDisplayMode(mode)}
        aria-label="display mode"
        sx={{
          margin: 'auto',
        }}
      >
        <ToggleButton
          value="LIST"
          aria-label="list view"
        >
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton
          value="CARD"
          aria-label="card view"
        >
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <Box
        m={2}
        sx={{
          flexGrow: 2,
        }}
      >
        {displayMode === 'CARD' && (
          <StudentCardList studentList={studentsToDisplay} />
        )}
        {displayMode === 'LIST' && <StudentLineList />}
      </Box>

      <Footer />
    </Container>
    // </ThemeProvider>
  );
}

export default App;
