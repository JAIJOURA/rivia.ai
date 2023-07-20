import React from 'react'
import { Link } from 'react-router-dom';

export default function TableRows(props) {
  return (
    
         <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.username}</td>
      <td>{props.email}</td>
      <td>{props.address}</td>
      <td>{props.phone}</td>
      <td>{props.website}</td>
      <td>{props.company}</td>
      <td>{props.actions}</td>
      <td><Link to={`/userID/${props.id}`} > <button type="button" className="btn btn-outline-success my-2" >Open</button>  </Link>
        
        <button type="button" className="btn btn-outline-danger" onClick={()=>{
          props.handleDelete(props.id)}}>Delete</button></td>

    </tr>

  )
}
