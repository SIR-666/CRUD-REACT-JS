import {BrowserRouter,Routes,Route} from "react-router-dom"
import UserList from "./presentation/components/UserList";
import {AddUser} from "./presentation/components/AddUser";
import {EditUser} from "./presentation/components/EditUser";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="add" element={<AddUser/>}/>
          <Route path="edit/:id" element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
