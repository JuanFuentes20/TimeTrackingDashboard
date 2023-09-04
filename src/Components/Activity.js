
function Activity({period, activity}) {

    const imagesrc = `/images/icon-${activity.title.replace(/\s/g, '-').toLowerCase()}.svg`
    return (
        <div className="activity-card">
            <img className="activity-img" src={imagesrc} alt="icon"></img>
            <div className="activity-item">
                <div className="activity-info">
                    <h3>{activity.title}</h3>
                    <img src="/images/icon-ellipsis.svg" alt="icon"></img>
                </div>
                <div className="activity-score">
                    <h2>{activity.timeframes[period].current}hrs</h2>
                    <p>Last Week - {activity.timeframes[period].previous}hrs</p>
                </div>
            </div>
        </div>
    )
}

export default Activity;