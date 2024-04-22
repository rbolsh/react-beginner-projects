import React from 'react' // Тут подключили React, чтобы иметь доступ к React.useState(0);
import './index.scss';

function App() {
  const [count, setCount] = React.useState(0);
  
  // Функция, для обработки события нажатия на кнопку плюс
  const onClickPlus = () =>{
    setCount(count + 1);
  };

  // Функция, для обработки события нажатия на кнопку минус
  const onClickMinus = () =>{
    setCount(count -1);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
