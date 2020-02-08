# Refs

- Атрибут `ref` позволяет получать ссылку на DOM-узел или React-компонент
- Все `refs` становятся доступны в методах компонента после `render()` и перед
  `componentDidMount()`

Рефы используются если необходим доступ к императивным методам и свойствам
элемента:

- Фокус элемента при событии, выделение текста
- Контроль проигрывания медиаконтента
- Интеграция с DOM-библиотеками
- Доступ к DOM-свойствами, значения которых невозможно получить по другому,
  размеры элемента, значение скрола и т.п.

## Использование

```shell
this.elementRef = React.createRef()
```

Рефы создаются методом `React.createRef()` и привязаны к React-элементам с
помощью атрибута `ref`. Рефы присваиваются свойству экземпляра, так на них можно
ссылаться по всему компоненту.

```js
import React, { Component, createRef } from 'react';

export default class Player extends Component {
  playerRef = createRef();

  play = () => {
    this.playerRef.current.play();
  };

  pause = () => {
    this.playerRef.current.pause();
  };

  render() {
    const { source } = this.props;

    return (
      <div>
        <video src={source} ref={this.playerRef}>
          <track default kind="captions" srcLang="en" src="" />
          Sorry, your browser does not support embedded videos.
        </video>

        <div>
          <button type="button" onClick={this.play}>
            Play
          </button>
          <button type="button" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}
```

- React присваивает свойству `current` ссылку на DOM-элемент, когда компонент
  монтируется, и `null` при его размонтировании
- Обновление `ref` происходит до `componentDidMount()` или
  `componentDidUpdate()`

Рабочая версия

[![Edit Refs in React](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/kmrv673275)

## forwardRef

При использовани `ref` на компоненте, проп `ref` не передается автоматически.
Это создает проблемы в случае когда мы хотим получить `ref` на DOM-узел внутри
самого коспонента нежели на сам компонент.

Функция `React.forwardRef` автоматически передает пропы, полученные родительским
компонентом его дочерним элементам. Это как раз то что надо для реиспользуемых
компонентов в библиотеках и при использовании HOC, так как последние не
пробросят `ref` по умолчанию.

```js
import React, { Component, forwardRef, createRef } from 'react';

const LoginButton = forwardRef((props, ref) => (
  <button ref={ref} class="button-login">
    {props.label}
  </button>
));

class App extends Component {
  buttonRef = createRef();

  componentDidMount() {
    this.buttonRef.current.focus();
  }

  render() {
    return (
      <div className="container">
        <LoginButton ref={this.buttonRef} label="Get In!" />
      </div>
    );
  }
}
```

Такой подход позволяет получить ссылку в родительском компоненте на DOM-элемент
внутри другого компонента. К примеру вы пишете галлерею, таким образом можно
получить ссылки на DOM-элементы из вне и работать с их свойствами, например
`Element.getBoundingClientRect()` и тому подобное.

- [Рефы и DOM](https://ru.reactjs.org/docs/refs-and-the-dom.html)
- [Перенаправление рефов](https://ru.reactjs.org/docs/forwarding-refs.html)
