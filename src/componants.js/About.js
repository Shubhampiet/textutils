export default function About() {
    return (
        <div className="about">
            <h3>
                This is react based application. In this application we used some important features of React.
            </h3>
            <div className="aboutBox">
                <h4>Props: </h4>
                Props stands for properties and it makes our work very easy. It is used to send values in componants
            </div>

            <div className="aboutBox">
                <h4>Hooks: </h4>
                Hooks play very important role in React. There are multiple hooks with their own different functionalities. we can also create our own custom hooks.
                In this application we used 'use-state' hook which is used to change the state of componants.
            </div>

            <div className="aboutBox">
                <h4>Router: </h4>
                Router makes React very special it provides functionalities to change specific componants without loading the whole page.
            </div>

        </div>
    )
}