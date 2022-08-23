import React, { useContext } from 'react';
import { Context } from '../../App';

const Buttons = (props) => {
    const { link, id } = props.streams;

    const [, setSelect] = useContext(Context) //using context api
    return (
        <div className='m-3'>
            <button onClick={() => setSelect(link)} type="button" className="text-white btn btn-outline-info">
                <h1>Stream link {id} </h1>
            </button>
        </div>
    );
};

export default Buttons;