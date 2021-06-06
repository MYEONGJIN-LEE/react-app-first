import dateformat from "dateformat";

const MainTitle = () => {
    const now = Date.now();
    return (
        <>
            <div>
                음악차트
            </div>
            <div>
                {dateformat(now, 'yyyy년 mm월 dd일 HH:MM')}
            </div>
        </>
    )
}

export default MainTitle
