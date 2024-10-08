import Age from "./Age"

export default function Welcome({name="Mr or Mrs", age}) {

    return(
        <div>
             <p>Welcome  <strong>{name}!</strong></p>
             <Age age={25}/>
             
            
        </div>
    )
}