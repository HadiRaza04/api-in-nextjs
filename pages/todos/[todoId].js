import Link from "next/link";
import { useRouter } from "next/router";
import { BiArrowBack } from 'react-icons/bi'

export default function (prop) {

    const router = useRouter();
    const todoId = router.query.todoId;
    const { todo } = prop;
    if(!todo){
      return <div style={{color: "black", fontSize: "50px", textAlign: "center"}}>Loading...</div>
    }
    return (
        <div style={{color: "black", fontSize: "30px", textAlign: "center"}}>
          
            <h1 style={{fontFamily: "cursive", background: "lightblue"}}><Link href="/" style={{position: "absolute", left: "5px", background: "grey"}}><BiArrowBack /></Link>Todo Detail Page</h1>
            <h3>Todo {todoId}</h3>

          {todo.title}

        </div>
    )
}
export async function getStaticProps ({params}){
  try {
        const {todoId} = params;
        // console.log(todoId);
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        const data = await response.json();
        // console.log(data);
        if(!data) {
          return {
            notFound: true
          }
        }
        return {
          props: {
            todo: data
          },
          revalidate: 10
        }
      } 
      catch (err) {
        return {
          notFound: true
        }
      }
}

export const getStaticPaths = async () => {
return {
    paths: [
    {
        params: {
        todoId: '1',
        },
    }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
}
}