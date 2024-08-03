import React from 'react';
import { Link } from 'react-router-dom'
function Gestion () {
    return (
        <div className="container">
            <div><h1>users</h1>
            <table>
                <tr>
                    <td>id</td> <td>name</td> <td>prenom</td> <td>email</td> <td>role</td>                 
                </tr>
                <tr>
                </tr>
            </table>
            </div>
            <Link to='/gestion' className='btn_btn_success'>modifier</Link>
        </div>
        
    )

}
export default Gestion;