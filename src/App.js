import './App.css';
import { List } from './components/List';
import { Listitem } from './components/Listitem';
import {useState , useRef} from 'react';
import Send from './assets/images/send-message.png';
import Anima from './assets/images/Spin-1.2s-200px.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // holat
  let [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos')) || []);
  const inputValue = useRef()

  // form submit bolishi

  let formSubmit = (evt) => {
    evt.preventDefault();
    const newTodo = {
      // id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      id: todos.length ? todos.at(-1).id + 1 : 1,
      text: inputValue.current.value,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    inputValue.current.value = '';
    toast.success("Todo muvofaqiyatli qo'shildi 👍");
  };

  window.localStorage.setItem('todos', JSON.stringify(todos));

  return (
    <main>
      <section>
        <div className="container">
          <div className='todo-content'>
            <div className='todo-boxs'>
            <h1 className='work-title'>Todo work</h1>
            <form onSubmit={formSubmit} className='todo-form' method='post'>
              <input ref={inputValue} className='todo-inp' type={'text'} placeholder='Todo'/>
              <button className='send-button' type={'submit'}>
               <img src={Send} alt='delete.img' width={36} height={30}/>
              </button>
            </form>
            {
              todos.length ? (
                <List>
                  {
                    todos.map(item => (
                      <Listitem key={item.id} obj={item} todos={todos} setTodos={setTodos}/>
                    ))
                  }
                </List>
              ) : (<img className='no-img' src={Anima} alt='delete.img' width={150} height={100}/>)
            };
            </div>
          </div>
          <ToastContainer 
           position="bottom-right"
           autoClose={3000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="dark"
          />
        </div>
      </section>
    </main>
  );
}
export default App;