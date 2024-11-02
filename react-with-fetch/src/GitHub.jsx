import { useEffect, useState } from "react";



const GitHub = ({username}) => {

    const [user, setUser] = useState({});
   

    

    async function handleFetch() {
    try{

        
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data =  await response.json();

        console.log("data ", data)
        setUser(data)
        
        


        }catch(error) {
            console.log(error)
        }

        

        
        
    } 

    useEffect(() => {

        handleFetch();


    }, [])

    return(

        
        <div>

            
             <h2>{user.name}</h2> 
             <h2>{user.login}</h2> 
             <h3>{user.id}</h3>
             <img src={user.avatar_url} alt="" /> 
            


        </div>

        
    )
}

export default GitHub;