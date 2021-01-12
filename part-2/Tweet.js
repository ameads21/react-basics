const Tweet = (props) => {
  return (
    <div className="tweet">
      <p className="username">Username: {props.username}</p>
      <p className="date">Date: {props.date}</p>
      <p>User: {props.user}</p>
      <p>Tweet: {props.tweet}</p>
    </div>
  );
};
