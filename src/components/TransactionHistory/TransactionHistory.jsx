import * as SC from './TransactionHistory.styled'
import {TransactionHistoryItem} from '../TransactionHistoryItem/TransactionHistoryItem'

export const TransactionHistory = ({items}) => {
    return (
        <SC.Table>
  <SC.Thead>
    <SC.List>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </SC.List>
  </SC.Thead>

  <tbody>
  {items.map(({id,type,amount,currency}) =>
<TransactionHistoryItem 
key={id} 
type={type} 
amount={amount} 
currency={currency} />)}
  </tbody>
</SC.Table>
    )
}
