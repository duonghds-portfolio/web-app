import React from 'react';
import StickyNote from "./StickyNote";

export default class Wall extends React.Component{

    componentDidMount() {
        
    }

    render() {
        return(
            <div className="wall-container">
                <StickyNote title="Title1" text="Text content A"
                    backgroundColor="#ffc" rotate={-6} left="70%" top="30%" />
                <StickyNote title="Title1" text="Text content A"
                    backgroundColor="#ccf" rotate={10} left="40%" top="15%" />
                <StickyNote title="Title1" text="Text content A"
                    backgroundColor="#cfc" rotate={5} left="17%" top="60%" />
            </div>
        )
    }
}
    