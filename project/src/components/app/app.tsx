import Main from '../../pages/main/Main';


type AppScreenProps = {
  placesCount: number;
}

function App({ placesCount }: AppScreenProps) {
  return (
    <Main placesCount={placesCount} />

  );
}

export default App;
