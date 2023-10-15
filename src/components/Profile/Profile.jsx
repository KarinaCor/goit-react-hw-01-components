import PropTypes from 'prop-types';
import * as SC from './Profile.styled'

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: {followers, views, likes},
}) => {
    return (
<SC.Wrapper>
  <SC.Div>
    <SC.Img
      src={avatar}
      alt={username}
      
    />
    <SC.Name>{username}</SC.Name>
    <SC.Tag>@{tag}</SC.Tag>
    <SC.Location>{location}</SC.Location>
  </SC.Div>

  <SC.List>
    <li>
      <SC.SpanLabel>Followers</SC.SpanLabel>
      <SC.SpanQuantity>{followers}</SC.SpanQuantity >
    </li>
    <li>
      <SC.SpanLabel>Views</SC.SpanLabel>
      <SC.SpanQuantity >{views}</SC.SpanQuantity >
    </li>
    <li>
      <SC.SpanLabel>Likes</SC.SpanLabel>
      <SC.SpanQuantity>{likes}</SC.SpanQuantity >
    </li>
  </SC.List>
</SC.Wrapper>

);
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  };