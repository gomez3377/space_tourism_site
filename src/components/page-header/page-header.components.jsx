import React from 'react'
import { PageHeaderContent } from './page-header.styles'

const PageHeader = ({pageNumber, title}) => {
  return (
    <PageHeaderContent><span className="page-number">{pageNumber}</span> {title}</PageHeaderContent>
  )
}

export default PageHeader