import React from 'react'
import Confession from './Confession'
import Duba from './Duba'

export default class Projects extends React.Component {
    render() {
        return (
            <div className="container-content">
                <Confession id="content-1" />
                <Duba id="content-2" />
            </div>
        )
    }
}