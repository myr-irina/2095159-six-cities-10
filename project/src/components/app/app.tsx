import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/Main';

type AppScreenProps = {
  placesCount: number;
};

function App({ placesCount }: AppScreenProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main placesCount={placesCount} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
