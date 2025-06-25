const TodoData = (props) => {
    const { todoList } = props;
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className='todo-item' key={index}>
                        <div className='todo-item-name'>{item.name}</div>
                        <button className='delete-button'>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}

export default TodoData;