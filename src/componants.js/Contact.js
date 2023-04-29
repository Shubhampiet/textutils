export default function Contact(props) {
    return (
        <div className="contactContainer">
            <h3>{props.name}</h3>
            <h5>{props.phone}</h5>
            <h5>{props.mail}</h5>
        </div>
    )
}