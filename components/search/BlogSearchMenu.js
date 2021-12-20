import { Dropdown } from 'react-bootstrap'
import styles from '../../styles/BlogSearchMenu.module.scss'

export default function BlogSearchMenu() {
    return(
        <div className={styles["BlogSearchMenu-container"]}>
            <form className={styles["BlogSearchMenu-form pad"]}>
                <input 
                    className="input" 
                    type="text" 
                    name="query"
                    placeholder="Search by title, author, date, topic, or category"
                />
            </form>
            <Dropdown className={styles["pad"]}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Topics  
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Product Marketing</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Philosophy</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className={styles["pad"]}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Categories 
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}