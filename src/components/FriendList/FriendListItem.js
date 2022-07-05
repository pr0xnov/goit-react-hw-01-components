import styles from './FriendList.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.statusOn : styles.statusOff}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;
