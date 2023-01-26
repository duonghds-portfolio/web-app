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
        this.saveNote(text)
    }

    focusNote = (e) => {
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
            let length = 0;
            if(e.currentTarget.childNodes.length > 1) {
                if(e.currentTarget.lastChild.innerHTML) {
                    length =  e.currentTarget.lastChild.innerHTML.length;
                }else {
                    length = e.currentTarget.lastChild.length;
                }
            }else {
                length = e.currentTarget.innerHTML.length;
            }
            range.setStart(e.currentTarget.lastChild, length);
            range.setEnd(e.currentTarget.lastChild, length);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    saveNote = (text) => {
        const { id, readOnly } = this.props;
        if(text === this.props.text) {
            return
        }
        if(text === "") {
            return
        }
        if(readOnly) {
            return
        }
        let host = process.env.REACT_APP_DUONGHDS_PORTFOLIO_API_HOST
        fetch(`${host}/api/note`, {
            mode: "cors",
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                noteID: id,
                text: text,
                readOnly: readOnly,
                expiredTime: (new Date()).toJSON()
            })
        })
        .then(resp => {
            console.log(resp.status)
        });
    }

    render() {
        const { backgroundColor, rotate, readOnly, text } = this.props;
        return (
            <div className="sticky-note" onClick={this.focusNote} 
                style={{ background: backgroundColor, transform: `rotate(${rotate}deg)`}}>
                <p  ref={this.inputFocus.ref}
                    onFocus={this.selectRange}
                    onKeyDown={e => {
                        if(e.currentTarget.innerText.length >= 100 && e.key !== "Backspace") {
                            e.preventDefault();
                            return;
                        }
                    }}
                    onKeyUp={e => {
                        if(e.currentTarget.innerText.length >= 100 && e.key !== "Backspace") {
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