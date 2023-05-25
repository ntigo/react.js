function UserList({ users }) {
    console.log(users);
    
    return (
        <ul>
            {users.length &&
                users.map(({ userId, userNm, address }) => (
                    <li key={userId}>
                        이름: {userNm}, 주소: {address}
                    </li>
                ))}
        </ul>
    )
}

export default UserList;