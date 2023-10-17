import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from  '../../img/costs_logo.png'
import Container from './Container'


function Navbar(){
return(
           
           <nav class={styles.navbar}>
                 <Container>
                  <Link to='/'>
                  <img src={logo} alt='Costs'/>
                  </Link>
                  <ul class={styles.list}>
                        <li class={styles.item}>
                        <Link to ="/">Home</Link>
                        </li>
                        <li class={styles.item}>
                        <Link to ="/contact">Contato</Link>
                        </li>
                        <li class={styles.item}>
                        <Link to ="/company">Empresa </Link>
                        </li>
                  </ul>
                  
                  </Container>
           </nav>
    
)
}
export default Navbar