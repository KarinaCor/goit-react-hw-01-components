import PropTypes from 'prop-types';
import * as SC from './FriendList.styled'
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
return (
<SC.List>
    {friends.map(({id,avatar, name, isOnline}) => {
        return (
            <FriendListItem 
            key={id} 
            avatar={avatar} 
            name={name} 
            isOnline={isOnline} 
            />
        )
    })}
</SC.List>
)
}

FriendList.protoTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ),
  };