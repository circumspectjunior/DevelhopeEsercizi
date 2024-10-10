

const AlertClock = ({currentTime}) => {
    return(
        <>
        <p>click the button below!</p>
        <button onClick={currentTime} style={{color: "red", backgroundColor: "green"}}>Click</button>
        </>
    )
}

export default AlertClock;