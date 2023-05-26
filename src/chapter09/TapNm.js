const TAP_NM_ELEMENT = {
    user: <p>사원 정보</p>,
    approval: <p>결재</p>,
    attendance: <p>근태</p>
}

function TapNm() {
    var status = 'attendance';

    return (
        <div>
            {
                TAP_NM_ELEMENT[status]
            }
        </div>
    )
}

export default TapNm;