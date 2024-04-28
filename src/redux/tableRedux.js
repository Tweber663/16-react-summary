import { API_URL } from "../config";

console.log(API_URL)
//**actionTypes
const actionType1 =  (type) => `app/tables/${type}`;
const GETTING_INFO = actionType1('GETTING_INFO')

const actionType2 =  (type) => `app/tables/${type}`;
const UPDATING_INFO = actionType2('UPDATING_INFO')

//**Selector 
//Respo for fetching the info + passing the info to action creator
export const fetchingTables = () => {
    return(disptach) => {  
        fetch(`${API_URL}/tables`)
        .then((raw) => raw.json())
        .then((tables) =>  {
            disptach(gettingTables(tables));   
        })
        // passing info to action creaotr
        //We can add 'dispatch' above because it was passed as argu
    }
}
export const fetchingTablesPOST = (updatedTable) => {
    return (disptach) => {
        const options = {
            method: 'PUT', 
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(updatedTable),
        };
        fetch(`${API_URL}/tables/${updatedTable.id}`, options)
        .then(() => disptach(updatingTables(updatedTable)));
    }
}
//Returns correct table based on url id
export const selectedTable = ({id, state}) => {
        return state.tables.tables.filter((table) => id === table.id);   
}

//**action creators 
export const gettingTables = (payload) => ({type: GETTING_INFO, payload});
export const updatingTables = (payload) => ({type: UPDATING_INFO, payload});


//**Subreducers
const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case "LOADING":
        return console.log('');
        case GETTING_INFO:
            return {...statePart, tables: action.payload};
        case UPDATING_INFO:
            return {...statePart, tables: action.payload};
        default:
            return statePart
    }
}


export default tablesReducer;