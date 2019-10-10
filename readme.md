# Context Q

## 소개

[Context API](https://ko.reactjs.org/docs/context.html)를 간단히 사용할 수 있도록 도와주는 라이브러리입니다.

## 설치

```shell script
yarn add context-q
```

## 사용

### DOM Root에 Provider 설정

```js
import { Provider } from 'context-q';

ReactDOM.render(
  <Provider defaultState={{ value: 'here' }}>
    <App />
  </Provider>,
  document.querySelector('...'),
);
```

### 연결한 컴포넌트에 withContext

```js
import { withContext } from 'context-q';

function View(props) {
  return <div>{props.context.value}</div>;
}

export default withContext(View);
```

## 데모

- [React (via create-react-app)](https://github.com/GrotesQ/cra-with-context-q)
- [Next.js](https://github.com/GrotesQ/next-with-context-q)
- [Expo](https://github.com/GrotesQ/expo-with-context-q)
- [React Native](https://github.com/GrotesQ/react-native-with-context-q)
