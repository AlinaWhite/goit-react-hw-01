import PropTypes from "prop-types";
import css from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={css.profileCard}>
      <div className={css.profileDesc}>
        <div className={css.profileAvatar}>
          <img src={props.image} alt="User avatar" />
        </div>
        <p className={css.profileName}>{props.name}</p>
        <p className={css.profileInfo}>@{props.tag}</p>
        <p className={css.profileInfo}>{props.location}</p>
      </div>

      <ul className={css.profileStatsList}>
        <li className={css.profileStatsItem}>
          <span>Followers</span>
          <span>{props.stats.followers}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span>Views</span>
          <span>{props.stats.views}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span>Likes</span>
          <span>{props.stats.likes}</span>
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
