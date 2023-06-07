import {List} from "antd";

const RealCase3 = () => {
    const list = [
        {
            id: 0,
            name: "손흥민"
        },
        {
            id: 1,
            name: "김민재"
        },
        {
            id: 2,
            name: "이강인"
        },
        {
            id: 3,
            name: "황희찬"
        },
    ];
    const renderListItem = (item) => {
        return (
            <List.Item>
                {item.name}
            </List.Item>
        );
    };
    const getRowKey = (item) => item.id;

    return (
        <div className="content_wrap">
            <h2 className="main_title">축구 선수</h2>
            <List
                dataSource={list}
                renderItem={renderListItem}
                rowKey={getRowKey}
            />
        </div>
    )
}

export default RealCase3;