import React from 'react'


export default function Pagination(props) {
  return (
    <div className='my-5'>
        <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className= {`page-item ${props.page===1?'disabled':''}`} >
      <a className="page-link" onClick={props.previousPage}>Previous</a>
    </li>
    <li className={`page-item ${props.page===props.totalPages?'disabled' :''}`}>
      <a className="page-link" href="#" onClick={props.nextPage} >Next</a>
    </li>
  </ul>
</nav>
    </div> 
  )
}
