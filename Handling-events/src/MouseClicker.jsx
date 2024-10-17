

const MouseClicker = () => {

    const eventHandler = (event) => {

        console.log("name", event.target.name)

    }

    const eventHandler2 = (event) => {
        event.stopPropagation();

        console.log("name", event.target.src, "")

    }

      //the pointerEvents set to none makes the img unclickable
    return(
        <div>
            <button name="one" onClick={eventHandler}>click me</button>
            <button name="two" onClick={eventHandler2} ><img style={{ pointerEvents: 'none' }} width={150} height={80} src="https://thumbs.dreamstime.com/z/two-parrots-perched-branch-one-green-one-blue-two-parrots-perched-branch-one-green-one-blue-blue-339922709.jpg?ct=jpeg" alt="" /></button>
        </div>
    )

} 

export default MouseClicker;