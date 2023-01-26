import "../styles/Display.css";

const Display = ({ value }) => {
    return (
        <div className='display'>
            {/* <p className="num"> */}
                {value}
            {/* </p> */}
        </div>
    )
}

export default Display;