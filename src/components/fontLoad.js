import React from "react"
import Helmet from "react-helmet"
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography, { rhythm } from "../utils/typography"

function FontLoad() {
  return (
    <Helmet>
        <TypographyStyle typography={typography}/>
        <GoogleFont typography={typography}/>
    </Helmet>
  )
}

export default FontLoad
