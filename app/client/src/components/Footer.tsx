import "../css/Footer.css"
import { Table } from "react-bootstrap"


function Footer() {
    return (
        <div className="footer">
            <Table>
                <tbody>
                    <tr>
                        <th className="text-center"><a href="https://github.com/sjyhne">GitHub</a></th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Footer;