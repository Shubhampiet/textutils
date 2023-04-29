

export default function Bottom(props) {

    const thankYou = () => {
        alert("Thank You")
    }
    return (
        <div className="background bottom">
            <div className="flexDiv">
                <h2>{props.message} </h2>
                <button type="button" onClick={thankYou} >Yes!</button>
            </div>

        </div>
    )
}