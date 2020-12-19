# Context Q

## 소개

[Context API](https://ko.reactjs.org/docs/context.html)를 간단히 사용할 수 있도록 도와주는 라이브러리입니다.

## 설치

```shell script
npm i context-q
# 혹은
yarn add context-q
```

## 사용

### DOM Root에 Provider 설정

Context 사용에 있어 가장 중요한 것은 `Provider`의 설정입니다.  
보통 `App.js` 혹은 `index.js` 에 위치한 DOM Tree의 최상위에 `Provider`를 위치시킵니다.

`Provider`에는 `defaultState`가 있습니다.  
이 `Provider` 내에서 공유될 상태 state 가 선언됩니다. State 와 동일하게 Object 형식으로 자유롭게 설정할 수 있습니다.

```js
// App.js
import { Provider } from 'context-q';

function App() {
  return (
    <Provider defaultState={{ value: 'here' }}>
      <App />
    </Provider>
  );
}
```

공유된 상태는 hook 또는 hoc 형태로 사용할 수 있습니다.

### Hook 방식

```js
// View.js
import { useContextQ } from 'context-q';

function View() {
  const context = useContextQ();
  return <div>value : {context.value}</div>;
}
```

### Hoc 방식

```js
// View.js
import { withContext } from 'context-q';

function View(props) {
  return <div>value : {props.context.value}</div>;
}

export default withContext(View);
```

### 컨텍스트 업데이트

`Context Q`는 `update`라는 함수를 가지고 있습니다.  
이를 통해 상태를 업데이트 시킬 수 있습니다.

```js
function View() {
  const context = useContext(Context);
  return (
    <div>
      <p>Value : {context.value}</p>
      <button onClick={ () => context.update( { value: 'updated' } ) }>
        업데이트
      </button>
    </div>
  )
}
```

## 데모

- [React (via create-react-app)](https://github.com/grotesq/cra-with-context-q)
- [Next.js](https://github.com/grotesq/next-with-context-q)
- [Expo](https://github.com/grotesq/expo-with-context-q)
- [React Native](https://github.com/grotesq/react-native-with-context-q)
