import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Savings = (props: Props) => {
  return (
    <div>
        <p>Savings</p>
        <Link to="/">Dashboard</Link>
    </div>
  )
}

export default Savings