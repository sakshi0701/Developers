import React from 'react'
import './Currency.css'
export default function Currency(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
    return (
        <>
            <div className="value">
                <input type="number" className="input" value={amount} onChange={onChangeAmount} />
                <select value={selectedCurrency} onChange={onChangeCurrency}>
                    {currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </>
    )
}