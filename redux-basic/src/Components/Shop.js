import React from 'react'
import { actionCreators } from '../State'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

const Shop = () => {
    const dispatch = useDispatch();
    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
    return (
        <div>
            <h2>Deposit withdraw money</h2>
            <button onClick={() => withdrawMoney(50)} className='btn btn-primary mx-2'>-</button>

            Update balance
            <button onClick={() => depositMoney(50)} className='btn btn-primary mx-2'>+</button>

        </div>
    )
}

export default Shop