import React from 'react';
import StickyNote from "./StickyNote";
const bColor = ["#ffc", "#ccf", "#cfc", "#ffcce2", "#ccfff4", "#ffccf2", "#ccf8ff", "#f55f5f", "#a9f55f", "#5ff5e5",
"#5fa8f5", "#bb5ff5"]
const rangeRotate = [-10, 10]
export default class Wall extends React.Component{
    constructor(props) {
        super(props);
        this.statet = {

        }
    }

    render() {
        return(
            <div className="wall-container">
                <StickyNote text="write something for me with limit hundred characters" readOnly={true}
                    backgroundColor="#ffc" rotate={-6} />
                <StickyNote title="Title1" text="Text content A"
                    backgroundColor="#ccf" rotate={10} left="0%" top="0%" />
                <StickyNote title="Title1" text="Text content A"
                    backgroundColor="#cfc" rotate={5} left="0%" top="0%" />
                <StickyNote title="Title1" text="Text content A"
                    backgroundColor="#cfc" rotate={5} left="0%" top="0%" />
                <StickyNote title="Title1" text="Text content A"
                backgroundColor="#cfc" rotate={5} left="0%" top="0%" />
                <StickyNote title="Title1" text="Text content A"
                backgroundColor="#cfc" rotate={5} left="0%" top="0%" />
                <StickyNote title="Title1" text="Text content A"
                backgroundColor="#cfc" rotate={5} left="0%" top="0%" />
                <StickyNote title="Title1" text="Text content A"
                backgroundColor="#cfc" rotate={5} left="0%" top="0%" />
                <StickyNote title="Title1" text="Text content A"
                backgroundColor="#cfc" rotate={5} left="0%" top="0%" />
                <StickyNote title="Title1" text="Text content A"
                backgroundColor="#cfc" rotate={5} left="0%" top="0%" />
                <StickyNote title="Title1" text="Text content A"
                backgroundColor="#cfc" rotate={5} left="0%" top="0%" />
                <StickyNote title="Title1" text="Text content A"
                backgroundColor="#cfc" rotate={5} left="0%" top="0%" />
                <StickyNote title="Title1" text="Text content A"
                backgroundColor="#cfc" rotate={5} left="0%" top="0%" />
                <StickyNote title="Title1" text="Text content A"
                backgroundColor="#cfc" rotate={5} left="0%" top="0%" />
                <StickyNote title="Title1" text="Text content A"
                backgroundColor="#cfc" rotate={5} left="0%" top="0%" />
            </div>
        )
    }
}
    