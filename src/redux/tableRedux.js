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


//**action creators 
export const gettingTables = (payload) => ({type: 'GETTING_INFO', payload});

//**Subreducers

const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case "LOADING":
        return console.log('');
        case "GETTING_INFO":
            return {...statePart, tables: action.payload};
        case "CASHED_DATA":
            console.log(action);
            break;
        default:
            return statePart
    }
}


export default tablesReducer;