
import { useState } from "react";

export default function TextForm(props) {

    const [text, setText] = useState("")

    function changed(event) {
        setText(event.target.value)
    }

    function changeInUpper(params) {
        setText(text.toUpperCase())
    }

    function changeInLower(params) {
        setText(text.toLowerCase())
    }

    function clearBox() {
        setText("")
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(text);
    }

    function handleExtraSpaces() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (

        <div className="textUtils">
            <div className="textBox">
                <textarea rows={10} cols={90} value={text} onChange={changed} >
                </textarea>
            </div>

            <div className="btnContainer">
                <button onClick={changeInUpper}>Change to Upper</button>
                <button onClick={changeInLower}>Change to Lower</button>
                <button onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button onClick={clearBox}>Clear Text</button>
            </div>

            <div className="textSummaryBox" >
              
                <h1 >Text Summary</h1>
                Total words: {text.split(" ").filter((element)=>{return element.length!==0}).length} and
                Total character: {text.length}
                <h5>{text.length * 0.002}  Minuts read</h5>
                <h2>Preview</h2>
                <div className="TextPreview"><p>{text}</p></div>
              
            </div>

        </div>
    )
}


