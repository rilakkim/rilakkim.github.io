import PropTypes from "prop-types"
import React from "react"
import { rhythm } from "../utils/typography"

const Work = ({ logo, title, timePeriod, subTitle, listItems }) => (
    <div style={{ display: 'flex', marginBottom: rhythm(1) }}>
        <div>
            <img src={logo} alt={title}/>
        </div>
        <div style={{ marginLeft: rhythm(1) }}>
            <h3>{ title }</h3>
            <h5>({ timePeriod })</h5>
            <p>{ subTitle }</p>
            <ul>
                {
                    listItems.map((item, idx) => {
                        return <li key={ idx }>{item}</li>
                    })
                }
            </ul>
        </div>
    </div>
)

Work.propTypes = {
    title: PropTypes.string,
}

Work.defaultProps = {
    logo: `put logo src`,
}

export default Work
