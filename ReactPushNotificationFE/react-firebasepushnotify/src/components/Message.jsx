const Message = ({ notification }) => {
    return (
      <>
        <div id="notificationHeader">
          <h1>notification</h1>
          {/* image is optional */}
          {notification.image && (
            <div id="imageContainer">
              <img src={notification.image} width={100} />
            </div>
          )}
          <span>{notification.title}</span>
        </div>
        <div id="notificationBody">{notification.body}</div>
      </>
    );
  };
  
  export default Message;
  