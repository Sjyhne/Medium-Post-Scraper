import "../css/Footer.css"
import { Table } from "react-bootstrap"
import { Github } from "react-bootstrap-icons";


function Footer() {
    return (
        <div className="footer">
            <div className="custContainer">
                <a className="blackLink" href="https://google.com"><Github size={25} /></a>
            </div>
        </div>
    )
}

export default Footer;