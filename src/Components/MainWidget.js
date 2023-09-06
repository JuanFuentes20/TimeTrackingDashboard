function MainWidget({setPeriod}) {

    const handlePeriod = (period) => {
        setPeriod(prev => {
            
            const timePeriodParagraphs = document.querySelectorAll('.time-period p')
            timePeriodParagraphs.forEach(paragraph => {
                if (paragraph.innerText.toLowerCase().includes(prev)) {
                  paragraph.style.opacity = 0.7;
                  paragraph.style.fontWeight = 100
                }
              })
            return period}) 
    }

    return (
        <div className="main-widget">
            <div className="personal-section">
                <img alt="profile icon" src="./images/image-jeremy.png"></img>
                <div className="personal-info">
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