import {List} from "antd";

const RealCase1 = () => {
    const list = [
        {
            id: 0,
            name: "김범수"
        },
        {
            id: 1,
            name: "나얼"
        },
        {
            id: 2,
            name: "박효신"
        },
        {
            id: 3,
            name: "이수"
        },
    ];

    return (
        <div className="content_wrap">
            <h2 className="main_title">가수</h2>
            <List>
                {
                    list.map((item) => (
                        <List.Item key={item.id}>{item.name}</List.Item>
                    ))
                }
            </List>
        </div>
    )
}

export default RealCase1;