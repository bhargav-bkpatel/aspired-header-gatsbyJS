import React from 'react'
import './logo.scss'
import headerData from '../../data/header.json'
import image from "../../../src/images/aspired-logo.svg"

export default () => {
  return (
    <div className="logo">
      <img src={image} alt={headerData.headerlogo.alt} />
    </div>
  )
}