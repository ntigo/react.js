import {List} from "antd";

const RealCase2 = () => {
    const list = [
        {
            id: 0,
            name: "Java"
        },
        {
            id: 1,
            name: "Go"
        },
        {
            id: 2,
            name: "JavaScript"
        },
        {
            id: 3,
            name: "C#"
        },
    ];
    const items = list.map((item) => (
        <List.Item key={item.id}>{item.name}</List.Item>
    ));

    return (
        <div className="content_wrap">
            <h2 className="main_title">프로그래밍 언어</h2>
            <List>
                {items}
            </List>
        </div>
    )
}

export default RealCase2;