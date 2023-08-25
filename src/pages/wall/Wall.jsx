import React from 'react';
import StickyNote from "./StickyNote";
const bColor = ["#ffc", "#ccf", "#cfc", "#ffcce2", "#ccfff4", "#ffccf2", "#ccf8ff", "#f55f5f", "#a9f55f", "#5ff5e5",
"#5fa8f5", "#bb5ff5"]
const rangeRotate = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export default class Wall extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }

    componentWillMount() {
        this.getNotes()
    }

    getNotes() {
        let self = this
        let host = process.env.REACT_APP_DUONGHDS_PORTFOLIO_API_HOST
        fetch(`${host}/api/notes`, {
            mode: "cors",
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(resp => resp.json())
        .then(data => {
            data.sort((a,b) => {
                return a.note_id - b.note_id;
            })
            self.setState({
                data
            })
        })
    }

    getBackgroundColor() { 
        var item = bColor[Math.floor(Math.random()*bColor.length)];
        return item
    }

    getRotate() {
        var item = rangeRotate[Math.floor(Math.random()*rangeRotate.length)];
        return item
    }

    render() {
        const { data } = this.state;
        return(
            <div className="wall-container">
                {data.map((note) => {
                    return <StickyNote id={note.note_id} key={`note-${note.note_id}`} text={note.text} readOnly={note.read_only}
                    backgroundColor={this.getBackgroundColor()} rotate={this.getRotate()} />
                })}
            </div>
        )
    }
}
    