const TrackDetailPage = (props) => {
    const { trackDetailInfo, handleBackButtonClick } = props;
    const { title, singer, melodizer, lyricist, genre} = trackDetailInfo;

    return (
        <>
            <div>
                <img 
                src={"/images/image1.jpg"} 
                onClick={handleBackButtonClick}
                />
            </div>
            <div>
                {title}
            </div>
            <div>
                {singer}
            </div>
            <div>
                <div>
                    <span>작사</span>
                    <span>{melodizer}</span>
                </div>
                <div>
                    <span>작곡</span>
                    <span>{lyricist}</span>
                </div>
                <div>
                    <span>장르</span>
                    <span>{genre}</span>
                </div>
            </div>
        </>
    );
};

export default TrackDetailPage
