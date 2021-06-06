import Track from "./Track";

const TrackList = (props) => {
    const { trackList, handleTrackClick } = props;

    return (
        <ul>
            {trackList.length > 0 && 
                trackList.map((track, idx) => {
                    return (
                        <Track 
                            track={track}
                            key={idx + 1}
                            handleTrackClick={handleTrackClick}
                        />
                    );
                })}
        </ul>
    );
};

export default TrackList
