import NavBar from "../common/NavBar"
import Tables from "../views/Tables"
import styles from './Home.module.scss'
import Footer from "../common/Footer"
const Home = () => {

    return (
       <div>
        <NavBar/>
        <h1>All Tables</h1>
        <Tables/>
        <Footer/>
       </div> 
    )
} 

export default Home