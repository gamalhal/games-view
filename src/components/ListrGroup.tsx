


function ListGroup() {
 const items =[
    'New York',
    'san Francisco',
    'Chicago',
    'London',
    'Paris',
 ];
    return (
    <>
    <h1>List</h1>
    
    <ul className="list-group">
    {items.map((items) => (
        
        <li key={items}>{items }</li>
        ))}
</ul>
</>
    )
}

export default ListGroup;