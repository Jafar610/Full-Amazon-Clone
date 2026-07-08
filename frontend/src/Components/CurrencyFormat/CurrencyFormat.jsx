import format from 'format-number'
function CurrencyFormat({ amount }) {
    const formattedAmount = format('0$,0.00')(amount);
  return (
    <div>{formattedAmount}</div>
  )
}

export default CurrencyFormat