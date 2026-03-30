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
        <>
            {props.result.country &&
                <>
                    <div className="results-country">{props.result.country}</div>
                    <div className="results-city">{props.result.cityName}</div>
                    <div className="results-temp">{props.result.templature}<span>°C</span></div>
                    <div className="results-condition">{props.result.conditionText}</div>
                    <img src={props.result.icon} alt="icon" />
                </>
            }
        </>
    )
}

export default Result