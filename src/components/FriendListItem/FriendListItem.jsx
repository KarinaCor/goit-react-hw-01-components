import * as SC from './FriendListItem.styled'

export const FriendListItem = ({id,avatar, name, isOnline}) => {
    const online = isOnline ? 'green' : 'red';
    const isOnlineStyle = { backgroundColor: online };
    return (
        
        <SC.Item key={id}>
  <SC.Span style={isOnlineStyle}>{isOnline}</SC.Span>
  <SC.Img src={avatar} alt={name} width="48"/>
  <SC.Text>{name}</SC.Text>
</SC.Item>
    )
}