import './List.css';
import { toast } from 'react-toastify';
import Delete from '../../assets/images/delete.png';
import Edit from '../../assets/images/pencil.png';

export let Listitem = ({ obj, todos, setTodos }) => {
   const {id, text, isCompleted} = obj;

   // edit buttoni ishlatish
   const handleEditTodo = (todoId, todoText) => {
      const editedTodo = prompt("Yangi so'z kiriting ❗❗", todoText);
      const todoFinded = todos.find(todo => todo.id === todoId);
      todoFinded.text = editedTodo;
      setTodos([...todos])
      toast.warning("Todo o'zgartirildi ❗❗");
   };
   // delete buttoni ishlatish
   const handleDeletTodo = (todoId) => {
      const todoFiltered = todos.filter(todo => todo.id !== todoId);
      setTodos([...todoFiltered]);
      toast.error("Todo o'chirildi ❗❗");
   };

   // checed inputni ishlatish
   const handleChecedTodo = (todoId) => {
      const todoFinded = todos.find(todo => todo.id === todoId);
      todoFinded.isCompleted = !todoFinded.isCompleted;
      setTodos([...todos])
      toast.info("Todo bajarildi 🎉🎉");
   }

   return(
      <li className="todo-item">
         <div className='just'>
           <span className='span-id'>{id}</span>
           <input onChange={() => handleChecedTodo(id)} defaultChecked={isCompleted ? true : false} className='chekbox' data-id={id} type={'checkbox'}/>
           <h3 className={`todo-title ${isCompleted ? 'chec' : ''}`}>{text}</h3>
         </div>
         <div>
           <button disabled={isCompleted ? true : false} onClick={() => handleEditTodo(id, text)} className='edit-button' type={'button'}>
            <img src={Edit} alt='delete.img' width={30} height={25}/>
           </button>
           <button disabled={isCompleted ? true : false} onClick={() => handleDeletTodo(id)} className='del-button' type={'button'}>
            <img src={Delete} alt='delete.img' width={30} height={25}/>
           </button>
         </div>
      </li>
   )
}