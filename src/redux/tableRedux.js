import { useNavigate } from "react-router-dom";

//**Selector 
//Respo for fetching the info + passing the info to action creator
export const fetchingTables = () => {
    return(disptach) => {  
        fetch("http://localhost:3133/tables")
        .then((raw) => raw.json())
        .then((tables) => disptach(gettingTables(tables))); // passing info to action creaotr
        //We can add 'dispatch' above because it was passed as argu
    }
}
//Returns correct table based on url id
export const selectedTable = ({id, state}) => state.tables.tables.filter((table) => id === table.id);

export const fetchingTablesPOST = (updatedTable) => {
    return (disptach) => {
        const options = {
            method: 'PUT', 
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(updatedTable),
        };
        fetch(`http://localhost:3133/tables/1`, options)
        .then(() => disptach(updatingTables(updatedTable)));
    }
}


//**action creators 
export const gettingTables = (payload) => ({type: 'GETTING_INFO', payload});

export const updatingTables = (payload) => ({type: "UPDATING_INFO", payload});

//**Subreducers
const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case "LOADING":
        return console.log('');
        case "GETTING_INFO":
            return {...statePart, tables: action.payload};
        case "UPDATING_INFO":
            return {...statePart, tables: action.payload};
        default:
            return statePart
    }
}


export default tablesReducer;