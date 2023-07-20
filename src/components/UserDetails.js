import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function UserDetails() {
  const {id}= useParams();
  const [user, setuser] = useState(null)
  
  
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setuser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [id]);
  if (!user) {
    return <div>Loading...</div>;
  }

    return (
    <div className='container'>
        <div class="card text-center">
  <div class="card-header">
     {`User details : ${id} `}
  </div>
  <div class="card-body">
    <h4 class="card-title">{user.name}</h4>
    <p class="card-text"><span className='fw-bolder'>Username - </span>{user.username}</p>
    <p class="card-text"><span className='fw-bolder'>Email - </span>{user.email}</p>
    <p class="card-text"><span className='fw-bolder'>Address - </span>{user.address.street}</p>
    <p class="card-text"><span className='fw-bolder'>Phone - </span>{user.phone}</p>
    
  </div>
  <div class="card-footer text-muted">
    <p class="card-text"><span className='fw-bolder'>Company - </span>{user.company.name}</p>
  </div>
</div>
    </div>
  )
}
