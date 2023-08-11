// import Button from '@/components/button/Button';
// import List from '@/components/list/List';
import React, { useState} from 'react'
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Divider, List, Typography } from 'antd';

export default function Home(props) {

  const {todos, todoId} = props;


  // if(!todos){
  //   return <div>Loadind...</div>
  // }

const todosList = [];
const todosListId = []
todos.map((todo) => {
  // return (
  //   <li key={todo.id}>
  //     <Link href={`../todos/${todo.id}`}>
  //       {todo.title}
  //     </Link>
  //   </li>
    todosList.push(todo.title);
    todosListId.push(todo.id);

})
// console.log(todosListId);


  


  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // const [loading, setLoading] = useState(false);
  const addValue = () => {
    setArr([...arr, arr[arr.length - 1] + 1]);
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
  }
  const delValue = () => {
    arr.pop();
    setArr([...arr]);
  }

  
  return (
    <>
      {/* <div>{title}</div> */}
      {/* <List arr={arr} /> */}
      

      
      {/* <Button 
          type="primary" 
          onClick = {addValue}
          icon={< PlusCircleOutlined />}> 
           Add one 
        </Button>
        <Button 
          type="primary"
          danger
          onClick = {delValue}
          icon={< DeleteOutlined /> }> 
          Delete
        </Button> */}
        
        <div>
          {/* {todosList} */}

          <List
            size="large"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={todosList}
            renderItem={(item) =>(
              <List.Item>
                {/* ${todosListId.forEach((id) => id)} */}
                <Link href={`../todos/${todoId}`}>{item}</Link>
                {/* {item} */}
                
              </List.Item>
            )
          }
          />
        </div>
      
    </>
  )
}
// https://jsonplaceholder.typicode.com/todos/

export async function getStaticProps() {
  // const {todoId} = params;
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  return {
    props: {
      todos: data,
      // todoId: todoId,
      title: "Home page"
    }   
  }
}

