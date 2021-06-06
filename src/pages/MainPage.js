import React, { useState, useEffect } from 'react';
import axios from "axios";
import MainTitle from '../components/MainTitle';
import TabNav from '../components/TabNav';
import TrackList from '../components/TrackList';
import TrackDetailPage from './TrackDetailPage';

const GET_CHART_LIST_URL = "http://localhost:3300/v1/chart/";
const GET_CHART_DETAIL_URL = "http://localhost:3300/v1/chart/detail/";
const CHART_TYPE = ["domestic", "overseas"];

const MainPage = () => {
    let [pageIdx, setPageIdx] = useState(0);
    let [activeTab, setActiveTab] = useState(0);
    let [trackList, setTrackList] = useState([]);
    let [trackDetailInfo, setTrackDetailInfo] = useState({});

    useEffect(() => {
        fetchTrackLIst(0);
    }, []);

    const fetchTrackLIst = (type) => {
        axios.get(GET_CHART_LIST_URL + CHART_TYPE[type]).then((res) => {
            setTrackList(res.data.chartList);
        });
    };

    const fetchTrackDetailInfo = (id) => {
        axios.get(GET_CHART_DETAIL_URL + id).then((res) => {
            setTrackDetailInfo(res.data.chart);
        });
    };

    const handleTabClick = (id) => {
        fetchTrackLIst(id);
        setActiveTab(id);
    };

    const handleTrackClick = (id) => {
        fetchTrackDetailInfo(id);
        setPageIdx(1);
    }
    
    const handleBackButtonClick = () => {
        setPageIdx(0);
    }

    return (
        <div>
            {pageIdx === 0 ? (
                <div>
                    <MainTitle />
                    <TabNav activeTab={activeTab} handleTabClick={handleTabClick} />
                    <TrackList trackList={trackList} handleTrackClick={handleTrackClick} />
                </div>
            ) : (
                <div>
                    <TrackDetailPage trackDetailInfo={trackDetailInfo} handleBackButtonClick={handleBackButtonClick} />
                </div>
            )}
        </div>
    );
};

export default MainPage



