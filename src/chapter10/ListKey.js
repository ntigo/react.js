import { useEffect, useState } from "react";
import './reactList.css';

function ListKey() {
    const [datas, setDatas] = useState(() => ["가", "나", "다", "라"]);
    const [list, setList] = useState(() => []);

    const onRemove = (e) => {
        setDatas(() => datas.filter((_, idx) => {
            return idx !== Number(e.target.dataset.idx);
        }));
    };

    useEffect(() => {
        setList(datas.map((data, idx) => {
            return <li key={idx} data-idx={idx} onClick={onRemove} style={{cursor: 'pointer',}}>{data}(클릭시 삭제됩니다)</li>;
        }));
    }, [datas]);

    return (
        <div className="content_wrap">
            <h2 className="main_title">키 사용 오류</h2>
            <ul className="name_list">
                {list}
            </ul>
        </div>
    )
}

export default ListKey;