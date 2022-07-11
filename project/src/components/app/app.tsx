// import Favorites from '../../pages/favorites/Favorites';
// import MainEmpty from '../../pages/main-empty/MainEmpty';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
// import Login from '../../pages/login/Login';
// import Main from '../../pages/main/Main';


type AppScreenProps = {
  placesCount: number;
}

function App({ placesCount }: AppScreenProps) {
  return (
    // <Main placesCount={placesCount} />
    // <Login/>
    // <Favorites />
    // <MainEmpty />
    <NotFoundScreen/>
  );
}

export default App;
