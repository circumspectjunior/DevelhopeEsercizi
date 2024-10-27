import Color from "./Color";

const Colors = ({col}) => {
    

    return(
        
        <ul>
            {col.map((cols) => {

                
            return<Color key={cols.id} color={cols}/>
                
            })}
        </ul>
        
    )
}

export default Colors;