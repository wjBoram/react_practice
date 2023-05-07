import React from 'react';

function Test(params) {
    console.log(JSON.stringify(params));
    const {reqParam} = params;
    return (
            <p className="infomation_p_tag">
                GitHub URL :
                <a
                    className="App-link"
                    href="https://github.com/wjBoram/react_practice.gitll -al"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                https://github.com/wjBoram/react_practice.git
                </a>
                <br/>
                Request Parameter >>> {reqParam}<br/><br/>
                Hello World<br/>
                추가 생성한 Js를 Index 페이지에서 처리 하도록 한다.<br/>
                <br/>
                **!! React는 Js 파일등 새로고침하면 즉시 적용됨 !!**<br/>
                ----------------------------------------------<br/>
                <br/><br/>
                React 프로젝트 구조 <br/><br/>
                1. index.html open <br/>
                2. 태그 ID : ROOT 를 Index.Js 에서 Rendering 한다.<br/>
                3. index.js Setting Component Call (Index.js)<br/>
                *  import React from ' react';  적용여부 / 신규 JS Import 여부 확인 **<br />
                **  Import [컴포넌트 명] from [파일경로] **<br/>
                ----------------------------------------------<br/>
                <br/><br/>
                2개 이상의 컴포넌트를 하나의 페이지에서 render할 순 없으므로 주의하기 바란다.<br/>
                2개 이상의 컴포넌트를 실행하기 위해서는 <br/>
                index.js 안의 Render 함수 안에 [Div, React.StrictMode]등의 태그로<br/>
                컴포넌트들을 묶어줘야 사용가능하다.<br/>

            </p>
    );
}
export default Test;
