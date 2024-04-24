import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { fetchingTables } from "../../redux/tableRedux"
import { useSelector } from "react-redux"
import Table from "./Table"

const Tables = () => {
    const disptach = useDispatch();

    const [tableFetched, setTableFetched] = useState(false)

    useEffect(() => {
        disptach(fetchingTables());
        setTableFetched(true);
    }, [disptach]) //Stops from erros / get's triggered once
      
    const addedTables = useSelector(state => state.tables);
    console.log(addedTables)

    return (
        <div> 
          {tableFetched && (
            <ul>
              {addedTables.tables.map((table) => (
                <Table key={table.id} status={table.status}/>
              ))}
            </ul>
          )}
        </div>
      );
}

export default Tables