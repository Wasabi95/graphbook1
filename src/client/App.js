//App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar";
import RecordList from "./components/recordList.js";
import Edit from "./components/edit.js";
import Create from "./components/create.js";
import SingIn from './googleSignIn/signIn.js'
import Signup from './googleSignIn/Signup.js'




const App = () => {


  return (
    <div>
     
      <Routes> 
      {/* <Navbar /> */}
      <Route path="/" element={<SingIn />} />      
        <Route path="/recordList" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
