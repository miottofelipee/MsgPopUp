'use client'
import { useState } from 'react'
import Comptesk from '../components/comptesk/comptesk';

function page() {
    const vazio = '';
    const [task, setTask] = useState(vazio);
    const [taskList, setTaskList] = useState([]);

    const addTask = () => {
        if (task.trim() !== '') {
            setTaskList([...taskList, task])
            setTask(vazio)
        }else{
            alert('Digita alguma coisa no input seu burro idiota! 🤬')
        }
    }


    return (
        <div>
            <h1>Utilizando Inputs</h1>

            <div>
                <h3>To-Do-List</h3>
                <input type='text'
                    placeholder='Digite uma nova tarefa'
                    value={task}
                    onChange={(param) => setTask(param.target.value)}></input>
                <button onClick={addTask}>Cadastrar</button>
            </div>

            {
                taskList.map((task, index) => (
                    <Comptesk pose={index} task={task}/>
                ))
            }
        </div>

    )
}

export default page