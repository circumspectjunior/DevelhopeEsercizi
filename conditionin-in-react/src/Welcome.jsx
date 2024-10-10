import Age from "../../conditionin-in-react/src/Age";
import Message from "./Message";

const Welcome = ({name, age}) => {

    return(
        <div>

            <p>Welcome! {name} </p>



            {age > 18 ? <Age age={age}/> : null}
            {age !== undefined ? <Age age={age}/> : null}
            {age > 18 && age < 65 ? <Age age={age}/> : null}
            {age > 18 && name === "john" ? <Age age={age}/> : null}
            {age > 18 ? <Message age={age}/> : "You are very young!"}



        </div>
    )

}

export default Welcome;