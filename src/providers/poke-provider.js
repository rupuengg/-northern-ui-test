import React, { useState } from 'react';
import PokeContext from '../context/poke-context';

const PokeProvider = (props) => {
    const [pokes, setPokes] = useState([]);

    return (
        <PokeContext.Provider value={[pokes, setPokes]}>
            {props.children}
        </PokeContext.Provider>
    );
}

export default PokeProvider;