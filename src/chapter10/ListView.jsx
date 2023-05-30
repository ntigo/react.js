import {List} from "antd";

const ListView = (props) => {
    const {
        title,
        list,
        renderItem,
        rowKey,
    } = props;

    return (
        <div className="content_wrap">
            <h2 className="main_title">{title}</h2>
            <List
                dataSource={list}
                renderItem={renderItem}
                rowKey={rowKey}
            />
        </div>
    )
}

export default ListView;