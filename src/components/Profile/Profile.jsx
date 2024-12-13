import PropTypes from "prop-types";
import css from "./Profile.css";

const Profile = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} alt="User avatar" />
        <p>{props.name}</p>
        <p>{props.tag}</p>
        <p>{props.location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{props.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{props.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{props.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
