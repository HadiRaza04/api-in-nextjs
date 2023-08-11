import Item from '../item/Item'
export default function List({arr}) {
    const items = arr.map((item)=> <Item value={item} key={item}/>)
  return (
    <ul>
      {items}
    </ul>
  )
}
