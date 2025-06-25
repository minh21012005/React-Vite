const TodoData = (props) => {
    const { object: { name, age, data: {
        city, country
    } }, str } = props;
    return (
        <div className='todo-data'>
            <div>{name}</div>
            <div>{age}</div>
            <div>{city}</div>
            <div>{country}</div>
            <div>{str}</div>
            <div>Learning react {name}</div>
            <div>{JSON.stringify(props.todoList)}</div>
        </div>
    );
}

export default TodoData;