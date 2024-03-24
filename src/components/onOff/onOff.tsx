

type OnOffPropsType = {
    on: boolean
    onChange: (value: boolean)=> void
}

export const OnOff = ({on, onChange}: OnOffPropsType) => {

    const onStyle = {
        backgroundColor: on ? 'green': ''
    }
    const offStyle = {
        backgroundColor: !on ? 'red': ''
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        backgroundColor: on === true? 'green': 'red',
        display: 'inline-block',
    }

    const onClickHandler = (value: boolean) => {
        onChange(value)
    }

    return (
        <div>
            
            {/* <button style={{backgroundColor: on ? 'green': ''}}>on</button> */}
            {/* <button style={{backgroundColor: !on ? 'red': ''}}>off</button> */}
            {/* <div style={{backgroundColor:  on===true? 'green': 'red', width: '50px', height:'50px'}}></div> */}
            <button style={onStyle} onClick={()=> onClickHandler(true)}>on</button>
            <button style={offStyle} onClick={()=> onClickHandler(false)}>off</button>
            <div style={indicatorStyle}></div>
        </div>
    )
}