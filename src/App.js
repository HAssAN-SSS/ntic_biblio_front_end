import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import GetStart from "./componenets/welcomePage/getStart";
import Inscrire from './componenets/inscrire/inscrire';
import Login from './componenets/login/login';
import Dashbord from './componenets/dashbord/dashbord';
import Book_info from './componenets/book_info/book_info';
import Reserver from './componenets/dashbord/reserver/reserver';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetStart />} />
          <Route path="/inscrire" element={<Inscrire />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/booke_info" element={<Book_info />} />
          <Route path="/reserver" element={<Reserver />} />




        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
