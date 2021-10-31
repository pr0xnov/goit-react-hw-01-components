import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={styles.item} key={id}>
            <span
              className={isOnline ? styles.statusOn : styles.statusOff}
            ></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.prototype = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
