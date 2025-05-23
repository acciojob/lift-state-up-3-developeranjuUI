import React from 'react';

const Childcomponent2 = ({onSelect}) =>{
    return (
        <div className='child2'>
            <h2>Child Component 1</h2>
            <button onClick={() => onSelect('Option 2')}>Choose Option 2</button>
        </div>
    )
}

export default Childcomponent2;