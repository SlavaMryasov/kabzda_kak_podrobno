
type OnOffPropsType = {
    on: boolean
}

export const OnOff = ({on}: OnOffPropsType) => {
    return (
        <div>
            <button style={{backgroundColor: on ? 'green': ''}}>on</button>
            <button style={{backgroundColor: !on ? 'red': ''}}>off</button>
            <div style={{backgroundColor:  on===true? 'green': 'red', width: '50px', height:'50px'}}></div>
        </div>
    )
}