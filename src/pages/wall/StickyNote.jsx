import React from 'react'
const utilizeFocus = () => {
    const ref = React.createRef()
    const setFocus = () => {ref.current &&  ref.current.focus()}

    return {setFocus, ref} 
}

export default class StickyNote extends React.Component {
    constructor(props) {
        super(props);
        this.inputFocus = utilizeFocus()
        this.state = {
            text: this.props.text,
        }
    }

    onChangeText = (text) => {
        this.setState({
            text: text
        })
    }

    focusNote = () => {
        this.inputFocus.setFocus()
    }

    selectRange = (e) => {
        let curText = e.currentTarget.innerText;
        e.currentTarget.innerText = ''
        e.currentTarget.innerText = curText;
        if(e.target.innerText && document.createRange)
        {
            let range = document.createRange();
            let selection = window.getSelection();
            range.selectNodeContents(e.currentTarget);
            range.setStart(e.currentTarget.firstChild,e.currentTarget.innerText.length);
            range.setEnd(e.currentTarget.firstChild,e.currentTarget.innerText.length);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    saveNote = () => {

    }

    render() {
        const { backgroundColor, rotate, readOnly } = this.props;
        const { text } = this.state;
        return (
            <div className="sticky-note" onClick={this.focusNote} 
                onBlur={this.saveNote}
                style={{ background: backgroundColor, transform: `rotate(${rotate}deg)`}}>
                <p  ref={this.inputFocus.ref}
                    onFocus={this.selectRange}
                    onKeyDown={e => {
                        if(e.currentTarget.innerText.length >= 100) {
                            e.preventDefault();
                            return;
                        }
                    }}
                    onKeyUp={e => {
                        if(e.currentTarget.innerText.length >= 100) {
                            e.preventDefault();
                            return;
                        }
                    }}
                    onBlur={e => this.onChangeText(e.target.innerText)}
                    contentEditable={!readOnly} suppressContentEditableWarning={true} className="text">{text}
                </p>
            </div>
        )
    }
}