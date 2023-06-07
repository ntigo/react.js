import { useState } from "react";

function ListKey() {
    const [list, setList] = useState([
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
    ]);

    const deletePlayer = (playerId) => {
        const newList = list.filter((player) => player.id !== playerId);
        setList(newList);
    };
    const soccerPlayers = list.map((player, idx) => (
        <li key={idx}>
            {player.name}
            <select>
                <option>나쁨</option>
                <option>좋음</option>
                <option>매우 좋음</option>
            </select>
            <button onClick={() => deletePlayer(player.id)}>삭제</button>
        </li>
    ));

    return (
        <div className="content_wrap">
            <h2 className="main_title">인조 식별자 사용 오류</h2>
            <ul className="player_list">
                {soccerPlayers}
            </ul>
        </div>
    )
}

export default ListKey;