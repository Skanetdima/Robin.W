import Image from "./images/Group_88_1_.png";
export const EighthContainer = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <h2 className="heading2">Dribbble</h2>
        <p className="body1">
          Each dribbble shot is made with love and care. Do check out my work on
          Dribbble. Likes and comments are appreciated.
        </p>
        <a href="#">Follow me on Dribbble</a>
      </div>
      <div>
        <img src={Image} />
      </div>
    </div>
  );
};
