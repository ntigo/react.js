import {List} from 'antd'

export const renderListItem = (item) => {
    return (
        <List.Item>
            {item.name}
        </List.Item>
    );
};
export const getRowKey = (item) => item.id;