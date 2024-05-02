

//Direct Props and in Direct Props
function Welcome (props) {

    // props.passedFn();
    //can also destructure the props object
    const {passedProps, passedFn} = props;
    passedFn();

    const element = (
        <div>
            {/* <h1 className={props.class2} >Hello {props.name}</h1> */}
            <h1 className={props.passedProps.class}> Hello {props.passedProps.name}</h1>
            <p>{props.count}</p>
        </div>
    )

    return element;
}

export default Welcome;