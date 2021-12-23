import axios from "axios";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Title from "../component/Title";

const GET_CHART_LIST_URL = "http://localhost:3300/v1/chart/";

const InfiniteScrollPage = () => {
    const now = moment().format("yyyy년 MM월 DD일 a HH:MM");

    const [trackList, setTrackList] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [ref, inView] = useInView();

    // 서버에서 아이템을 가지고 오는 함수
    const getTrackList = useCallback(async () => {
        setLoading(true);
        await axios.get(GET_CHART_LIST_URL + page).then((res) => {
            setTrackList((prevState) => [...prevState, ...res.data.chartList]);
        });
        setLoading(false);
    }, [page]);

    // `getTrackList` 가 바뀔 때 마다 함수 실행
    useEffect(() => {
        getTrackList();
    }, [getTrackList]);

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView && !loading) {
            setPage((prevState) => prevState + 1);
        }
    }, [inView, loading]);

    return (
        <div>
            <div>
                <Title title="음악 차트" description={now} />
            </div>
            <div>
                <ul>
                    {trackList.map((track, idx) => (
                        <React.Fragment key={idx}>
                            {trackList.length - 1 === idx ? (
                                <div ref={ref}>
                                    <li>
                                        <span>{idx}</span> &nbsp;
                                        <span>순위 : {track.rank}</span>&nbsp;
                                        <span>제목 : {track.title}</span>&nbsp;
                                        <span>가수 : {track.singer}</span>
                                    </li>
                                </div>
                            ) : (
                                <div>
                                    <li>
                                        <span>{idx}</span> &nbsp;
                                        <span>순위 : {track.rank}</span>&nbsp;
                                        <span>제목 : {track.title}</span>&nbsp;
                                        <span>가수 : {track.singer}</span>
                                    </li>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InfiniteScrollPage;
