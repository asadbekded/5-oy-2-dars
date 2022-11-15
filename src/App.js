import './App.css';
import {useState} from 'react';

function App() {
  // holat
  let [value, setValue] = useState("");
  let [todos, setTodos] = useState([]);

  let getList = (evt) => {
    if(evt.target.matches('.chekbox')){
      console.log(evt.target.dataset.id);
      let todos = +evt.target.dataset.id;
      let findedItem = todos.find((el) => el.id = todos)
      findedItem.isComplate = !findedItem.isComplate
      console.log(findedItem);
      // setTodos(findedItem);
    }
  };

  // inputni valuesini olish
  let getInpValue = (evt) => {
    setValue(evt.target.value);
  };

  // form submit bolishi

  let formSubmit = (evt) => {
    evt.preventDefault();
    setTodos([...todos,
      {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        text: value,
        isCompleted: false,
      }
    ]);
  }



  // domga htmlga chiqarish
  return (
    <main>
      <section>
        <div className="container">
          <div className='todo-content'>
            <form onSubmit={formSubmit} className='todo-form' method='post'>
              <input onChange={getInpValue} className='todo-inp' type={'text'} placeholder='Todo'/>
              <button className='send-button' type={'submit'}>Send</button>
            </form>

            <ul onChange={getList} className='todo-list'>
              {
                todos.map(item => (
                  <li className='todo-item'>
                    <input className='chekbox' data-id={item.id} type={'checkbox'}/>
                    <h3 className='todo-title'>{item.text}</h3>
                    <button className='edit-button' data-id={item.id} type={'button'}>EDIT</button>
                    <button className='del-button' data-id={item.id} type={'button'}>DEL</button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
