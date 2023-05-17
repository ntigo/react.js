import React, { useState, useEffect } from "react";

const userList = [
    { number : 1, name : "전교뒤에서1등", schoolName : "누구나졸업학교", type : "학생" },
    { number : 2, name : "길동홍길동", schoolName : "누구나졸업학교", type : "학생" },
    { number : 11, name : "김수업", schoolName : "누구나졸업학교", type : "선생님" },
    { number : 12, name : "축구왕", schoolName : "누구나졸업학교", type : "선생님" },
    { number : 21, name : "전교1등", schoolName : "명문명문고", type : "학생" },
    { number : 22, name : "꿀잠마스터", schoolName : "명문명문고", type : "학생" },
    { number : 31, name : "숙제왕", schoolName : "명문명문고", type : "선생님" },
    { number : 32, name : "이박사", schoolName : "명문명문고", type : "선생님" }
]

function useUserSelect(userNumber) {
    const [selectUser, setSelectUser] = useState(null);

    useEffect(() => {
        setSelectUser(null);

        for (let i = 0; i < userList.length; ++i) {
            if (userNumber == userList[i].number) {
                setSelectUser( userList[i] );
                break;
            }
        }
    }, [userNumber]);

    return selectUser;
}

function printUser(user) {
    if ( user == null ) {
        return "";
    } else {
        return `번호 : ${user.number}, 이름 : ${user.name}, 학교 : ${user.schoolName}, 타입 : ${user.type}`;
    }
}

export default function CustomHook() {
    const [userNumber, setUserNumber] = useState(1);
    const userNumberChange = (e) => {
        setUserNumber(parseInt(e.target.value));
    }

    const [searchUserNumber, setSearchUserNumber] = useState("");
    const changeSearchUserNumber = (e) => {
        setSearchUserNumber(e.target.value);
    }

    const inputUserNumber = () => {
        setUserNumber(parseInt(searchUserNumber));
    }

    const searchUser = useUserSelect(userNumber);

    console.log("===== 랜더링 =====");

    return (
        <div>
            <div>
                <label>사람을 선택하시오</label>
                <select onChange={userNumberChange} value={userNumber}>
                    {userList.map((item) => (
                        <option value={item.number} key={item.number}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>사람 번호로 검색하시오</label>
                <input type="text" onChange={changeSearchUserNumber} value={searchUserNumber} />
                <button onClick={inputUserNumber}>검색</button>
            </div>
            <div>
                <label>{searchUser == null ? "사람을 찾을수가 없습니다." : printUser(searchUser)}</label>
            </div>
        </div>
    );
}





