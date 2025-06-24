import './style.css'

const MyComponent = () => {
    return (
        <>
            <div>Hello react</div>
            <div className='child' style={{ borderRadius: '10px' }}>Hello vite</div>
        </>
    );
}

export default MyComponent;