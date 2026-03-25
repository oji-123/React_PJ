type ResultProps = {
    result: {
        country: string,
        cityName: string,
        templature: string,
        conditionText: string,
        icon: string
    }
}

const Result = (props: ResultProps) => {
    return (
        <div>
            {props.result.country &&
                <div>
                    <div>{props.result.country}</div>
                    <div>{props.result.cityName}</div>
                    <div>{props.result.templature}<span>°C</span></div>
                    <div>{props.result.conditionText}</div>
                    <img src={props.result.icon} alt="icon" />
                </div>
            }
        </div>
    )
}

export default Result