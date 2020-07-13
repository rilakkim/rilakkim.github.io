import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const StyledWork = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 320px;
    margin : 0 auto;
    
    @media only screen and (min-width: 720px) {
        flex-direction: row;
        margin: ${rhythm(1)} auto;
    }
`;

const Col = styled.div`
    margin: 0 auto;
    padding: 0;
    
    @media only screen and (min-width: 720px) {
        margin: 0 ${rhythm(1)};
        padding: 0 ${rhythm(1)};
    }
`;

const Work = ({ logo, title, timePeriod, subTitle, listItems }) => (
    <StyledWork>
        <Col>
            <img src={logo} alt={title}/>
        </Col>
        <Col style={{ marginLeft: rhythm(1) }}>
            <h3>{ title }</h3>
            <p>({ timePeriod })</p>
            <p>{ subTitle }</p>
            <ul>
                {
                    listItems.map((item, idx) => {
                        return <li key={ idx }>{item}</li>
                    })
                }
            </ul>
        </Col>
    </StyledWork>
)

Work.propTypes = {
    title: PropTypes.string,
}

Work.defaultProps = {
    logo: `put logo src`,
}

export default Work
