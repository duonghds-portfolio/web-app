import React from 'react'

export default class StickyNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            text: this.props.text,
        }
    }

    onChangeText = (text) => {
        this.setState({
            text: text
        })
    }

    onChangeTitle = (title) => {
        this.setState({
            title: title
        })
    }

    render() {
        const { backgroundColor, rotate, left, top } = this.props;
        const { title, text } = this.state;
        return (
            <div className="sticky-note"
                style={{ background: backgroundColor, transform: `rotate(${rotate}deg)`, left: left, top: top }}>
                <h2
                    onBlur={e => this.onChangeText(e.target.innerText)}
                    contentEditable={true} suppressContentEditableWarning={true} className="title">{title}
                </h2>
                <p
                    // onInput={e => this.onChangeText(e.currentTarget.textContent)}
                    onBlur={e => this.onChangeText(e.target.innerText)}
                    contentEditable={true} suppressContentEditableWarning={true} className="text">{text}
                </p>
            </div>
        )
    }
}