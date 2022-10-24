import { Container, Box } from '@mui/material';
import './App.css';
import CardList from './components/PersonCardList';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  return (
    <Container
      disableGutters
    >
      <Header />
      <Box m={2}>
        <CardList />
      </Box>
      
      <Footer/>
    </Container>
  );
}

export default App;
