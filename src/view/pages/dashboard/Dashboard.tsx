import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <>
    <div>
      <p>Dashboard</p>
    <Link to="savings">go to savings</Link>
    </div>
   
    </>
    
  )
}

export default Dashboard