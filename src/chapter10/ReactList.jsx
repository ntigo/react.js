import { useState } from "react";
import './reactList.css';

function ReactList() {
    const [title, setTitle] = useState('가수');

    const options = ["for", "forEach", "map"];
    const reactListOptions = [];
    for (let i = 0; i < options.length; i++) {
        reactListOptions.push(<option key={i} value={options[i]}>{options[i]}</option>);
    }

    // 1. for문으로 리스트 생성하기
    const names = ["김범수", "나얼", "박효신", "이수"];
    const singerNames = [];
    for (let i = 0; i < names.length; i++) {
        singerNames.push(<li key={i}>{names[i]}</li>);
    }
    const [list, setList] = useState(singerNames);

    // 2. forEach 함수로 리스트 생성하기
    const players = ["손흥민", "김민재", "이강인", "황희찬"];
    const soccerPlayers = [];
    players.forEach((player, idx) => {
        soccerPlayers.push(<li key={idx}>{player}</li>);
    });

    // 3. map 함수로 리스트 생성하기
    const languages = ["Java", "Go", "JavaScript", "C#"];
    const progLang = languages.map((lang, idx) => {
        return <li>{lang}</li>;
    });

    const titles = { for: "가수", forEach: "축구선수", map: "프로그래밍 언어" };
    const listData = { for: singerNames, forEach: soccerPlayers, map: progLang };
    // 선택된 옵션에 따라 제목 및 리스트 변경
    const onChange = (e) => {
        setTitle(() => titles[e.target.value]);
        setList(() => listData[e.target.value]);
    };

    return (
        <div className="content_wrap">
            <div className="select_wrap">
                <h2 className="select_title">리스트 구현방식 : </h2>
                <select
                    className="react_list_option"
                    onChange={onChange}
                >
                    {reactListOptions}
                </select>
            </div>
            <h2 className="main_title">{title}</h2>
            <ul className="name_list">
                {list}
                {
                    // languages.map((lang, idx) => {
                    //     return <li key={idx}>{lang}</li>;
                    // })
                }
            </ul>
        </div>
    )
}

export default ReactList;