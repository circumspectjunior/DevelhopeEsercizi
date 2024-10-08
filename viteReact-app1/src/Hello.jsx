import Message from "./Message";


export default function Hello(){

    //Message component can be used more than once put can't have more than one parent.

    return(
        <div>
            <h2>Hello.World</h2>
            <Message />
            <Message />

        </div>
    )
}