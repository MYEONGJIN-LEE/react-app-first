const TabNav = (props) => {
    const { activeTab, handleTabClick } = props;
    const tabTitles = ["국내", "해외"];
    
    return (
        <div>
            <ul>
                {tabTitles.map((title, idx) => {
                    return (
                        <li
                        style={{
                            background: activeTab === idx ? "cornflowerblue" : "none",
                            fontWeight: activeTab === idx ? "bold" : "500",
                        }}
                        key={idx}
                        onClick={() => handleTabClick(idx)}
                        >
                            {title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TabNav
