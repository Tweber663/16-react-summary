import { useDispatch } from "react-redux";
import { gettingTables } from "./redux/tableRedux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchingTables } from "./redux/tableRedux";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home";

const App = ()  => {

  const [fetchFinished, setfetchFinihsed] = useState(false); //used for conditioanl 🔸

  const disptach = useDispatch();

  useEffect(() => {
    disptach(fetchingTables()); //Sends dispatch as argu to 'fetchingTables' via 'thunk' middle wear (return)
    setfetchFinihsed(true) 
  },[disptach]); //Is triggered only once + stops errors

  const tables = useSelector(state => state);

  // hello world
  // <button>Fetching</button>
  // {fetchFinished && (  //conditional 🔸
  //   <ul>
  //     {tables.tables.tables.map((table) => (
  //       <li key={table.id}>{table.status}</li>
  //     ))}
  //   </ul>
  // )}


  return (
    <Container>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tables/:id" />
     </Routes>
    </Container>
  )
}



export default App;
