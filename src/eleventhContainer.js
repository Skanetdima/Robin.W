export const EleventhContainer = ({ className }) => {
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
        <label>
          Name
          <input
            className="eleventhTextInput"
            type="text"
            value=""
            onChange=""
          />
        </label>
        <label>
          Email
          <input
            className="eleventhTextInput"
            type="text"
            value=""
            onChange=""
          />
        </label>
        <label>
          Message
          <input
            className="eleventhTextInput"
            type="text"
            value=""
            onChange=""
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
