const SlideContent = ({maxContentPage, gotoPage}) => {
    let slides = [<div className="content-direct active" id="content-direct-1"
                    onClick={() => {
                        gotoPage(1)
                    }}></div>]
    for(let i=2;i<=maxContentPage;i++) {
        slides.push(<div className="content-direct" id={`content-direct-${i}`}
                        onClick={() => {
                            gotoPage(i)
                        }}></div>)
    }
    return(
        <div className="slide-content">
            {slides.map((s) => {
                return s
            })}
        </div>
    )
}

export default SlideContent;