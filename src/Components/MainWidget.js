function MainWidget({setPeriod}) {

    const handlePeriod = (period) => {
        setPeriod(prev => period) 
    }

    return (
        <div className="main-widget">
            <div className="personal-section">
                <div className="personal-info">
                    <img alt="profile icon" src="/images/image-jeremy.png"></img>
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className="time-period">
                <p onClick={() => handlePeriod('daily')}>Daily</p>
                <p onClick={() => handlePeriod('weekly')}>Weekly</p>
                <p onClick={() => handlePeriod('monthly')}>Monthly</p>
            </div>
        </div>
    )
}

export default MainWidget;