import React, { Fragment } from "react"
import Nav from '../components/Nav'
import '../styles/globalstyles.scss'
//import AnimatedCursor from "react-animated-cursor"
// markup
const IndexPage = () => {
  return (
    <Fragment>
       {/* <AnimatedCursor
      innerSize={0}
      outerSize={10}
      color='255,0,0'
      outerAlpha={10}
      outerScale={1}      
    /> */}
      <Nav />
      <main>
      </main >
    </Fragment >
  )
}

export default IndexPage
