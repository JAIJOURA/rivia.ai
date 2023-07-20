import React from 'react'
import TableRows from './TableRows'
import {useState,useEffect}  from 'react'
import Pagination from './Pagination'


export default function Table(props) {
    const [articles, setarticles] = useState([])
    const [page, setpage] = useState(1)
    const rowsPerPage = 5;
     
   const componentDidMount = async()=>{
   let url=props.api
   let data = await fetch(url)
   let parseData = await data.json()
   setarticles(parseData)
   }

   useEffect(()=>{
    componentDidMount()
    // eslint-disable-next-line
   },[])
 
    
    const lastRow = page * rowsPerPage;
    const firstRow = lastRow - rowsPerPage;
    const records = articles.slice(firstRow,lastRow)
    const noOfPages = Math.ceil(articles.length/rowsPerPage)
    
const previousPage = ()=>{
    setpage(page-1)
}
const nextPage=()=>{
setpage(page+1)
}

 const handleDelete = (id) => {
    setarticles(rows => rows.filter(row => row.id !== id));
  };

    return (
    <React.Fragment>
        <table className="table table-dark table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">User Id</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
      <th scope="col">Company</th>
      <th scope="col">Actions</th>
      <th scope="col">Open and Delete</th>
    </tr>
  </thead>
  <tbody>
    {records.map((element)=>{
        return <TableRows handleDelete={handleDelete} key={element.id} id={element.id} name={element.name} username={element.username} email={element.email} address={`${element.address.street} ${element.address.suite}`} phone={element.phone} website={element.website} company={element.company.name} actions={element.company.bs}/>
    })}
  </tbody>
</table>
<Pagination previousPage={previousPage} nextPage={nextPage} page={page} totalPages={noOfPages}/>
    </React.Fragment>
  )
}
