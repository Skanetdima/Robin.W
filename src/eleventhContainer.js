export const EleventhContainer = ({ className }) => {
  const formItems = (getText) => {
    return (
      <label>
        <span>{getText}</span>
        <input
          className={getText === "Message" ? "messageInput" : null}
          type={getText === "Email" ? "email" : "text"}
        />
      </label>
    );
  };
  return (
    <div className={className}>
      <div>
        <h2 className="heading2">Let’s get started</h2>
        <p className="body1">
          Now that you know a lot about me, let me know if you are interested to
          work with me.
        </p>
      </div>
      <form>
        {formItems("Name")}
        {formItems("Email")}
        {formItems("Message")}
        <input className="button" type="submit" value="Let’s get started" />
      </form>
    </div>
  );
};
