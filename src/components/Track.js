const Track = (props) => {
    const { track, handleTrackClick } = props;
    const { id, title, singer, imageUrl } = track;
    const IMAGE_FILE_PATH = "images/";
    
    return (
        <li
        onClick={() => handleTrackClick(id)}
        >
            <span>
                {id}
            </span>
            <img src={IMAGE_FILE_PATH + imageUrl}>
            </img>
            <span>
                {title}
            </span>
            <span>
                {singer}
            </span>
        </li>
    );
};

export default Track
