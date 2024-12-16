import css from "./FriendListItem.module.css";

const FriendListItem = (props) => {
  return (
    <div className={css.itemCard}>
      <img src={props.avatar} alt="Avatar" width="48" />
      <p className={css.textCard}>{props.name}</p>
      <p className={props.isOnline ? css.isOnline : css.isOffline}>
        {props.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
