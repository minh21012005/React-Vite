import './style.css'

const MyComponent = () => {
    const hoidanit = {
        name: 'minh',
        age: '20'
    }
    return (
        <>
            <div>Hello {JSON.stringify(hoidanit)}</div>
            <div className='child' style={{ borderRadius: '10px' }}>Hello vite</div>
        </>
    );
}

export default MyComponent;