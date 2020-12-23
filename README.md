# youtubeClone

<img width="500" src="https://user-images.githubusercontent.com/47317129/103014833-c4844580-4582-11eb-8f66-49153d802d82.PNG" style="display: block" >

## Inspiration

유튜브 popular api, search api를 이용해서
유튜브 인기 목록과 영상 검색, 비디오 시청을 할 수 있는 간단한 프로젝트입니다.

API를 사용하여 데이터를 받아서 보여주고, 페이지 라우팅을 하는 등 리액트 공부 목적으로 클론 코딩하기에 좋을 것이라고 생각해서 유튜브 클론코딩을 진행했습니다.

## What it does

<img width="500" src="https://user-images.githubusercontent.com/47317129/103014672-7f601380-4582-11eb-85bb-37df23ab2d4f.PNG" style="display: block" >
인기 영상을 보여주고, 
<img width="500" src="https://user-images.githubusercontent.com/47317129/103014911-e7165e80-4582-11eb-831b-1cf60d62e158.PNG" style="display: block" >
영상 검색이 가능하며, 
<img width="500" src="https://user-images.githubusercontent.com/47317129/103014833-c4844580-4582-11eb-8f66-49153d802d82.PNG" style="display: block" >
비디오 플레이를 할 수 있습니다.

## How I built it

프론트엔드만 있는 간단한 페이지로, React.js를 이용해 웹 UI를 구축하였고,
유튜브 데이터는 Axios를 이용하여 받아왔습니다.

메인페이지, 검색페이지, 비디오 상세페이지의 3 페이지들을 React-router-dom을 이용하여 구현하였고
컴포넌트의 값을 Redux를 이용하여 관리해보았습니다.

## Accomplishments that I'am proud of

간단한 투두리스트 앱을 만든 것을 제외하고 거의 처음으로 만들어본 리액트 프로젝트였음에도 많은 것을 적용해본 점입니다.

리액트 라우터, 리덕스(사실 리덕스가 필요로 하지 않는 작은 규모의 프로젝트였지만 공부 목적으로 사용해보았습니다.), Axios를 이용한 서버와의 통신, .env파일을 사용하여 API키 노출 방지, 서버와의 통신 클래스 별도 생성 등 많은 것을 시도하고 배운 프로젝트였습니다.

## What I learned

React.js는 값이 바뀔 때마다 컴포넌트를 렌더한다는 것을 뼈저리게 배울 수 있는 기회였습니다. useState를 제대로 사용하지 않고 API요청을 날린 결과, 요청을 한 번 날리자마자 API할당량을 모두 소진하는 경험을 할 수 있었습니다.

## What's next for this project

- 구글 로그인
- 영상 좋아요/표시 기능
- 코드 보완

## Built With

- React.js
- Redux
- React-router-dom
- PostCSS

# Try it out!

<a href="http://49.247.208.236/youtube/index.html" target="_blank">이곳에서 직접 프로젝트를 확인해보세요.</a>
