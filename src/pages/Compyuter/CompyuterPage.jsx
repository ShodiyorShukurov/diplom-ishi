import React from 'react'
import Customer from '../../components/Customer'
import useCompyuter from '../../hooks/useCompyuter'
import CompyuterPageData from './data/CompyuterPageData'

const CompyuterPage = () => {
 const {categoriesData}=   useCompyuter()
  return (
    <Customer>
        <CompyuterPageData categoriesData={categoriesData}/>
    </Customer>
  )
}

export default CompyuterPage