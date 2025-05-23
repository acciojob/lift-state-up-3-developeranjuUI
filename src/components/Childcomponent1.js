import React from 'react';

const Childcomponent1 = ({onSelect}) =>{
    return (
        <div className='child1'>
            <h2>Child Component 1</h2>
            <button onClick={() => onSelect('Option 1')}>Choose Option 1</button>
        </div>
    )
}

export default Childcomponent1;