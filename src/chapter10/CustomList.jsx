import ListView from './ListView'
import { List } from 'antd'
import { renderListItem, getRowKey } from './common'

const CustomList = () => {
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
    // const renderListItem = (item) => {
    //     return (
    //         <List.Item>
    //             {item.name}
    //         </List.Item>
    //     );
    // };
    // const getRowKey = (item) => item.id;

    return (
        <ListView
            title={'축구선수2'}
            list={list}
            renderItem={renderListItem}
            rowKey={getRowKey}
        />
    )
}

export default CustomList;