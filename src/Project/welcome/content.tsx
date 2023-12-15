import Style from "./Welcome.module.scss";

const content = () => {
  return (
    <div className={Style.frame}>
      <input placeholder="Search" />
      <div className={Style.box}>
        <p>Welcome !</p>
        <span>Me</span>
        <div className={Style.flexbox}>
          <a href="">@github</a>
          <a href="">@reddit</a>
          <a href="">@twitter</a>
        </div>
      </div>
      <div className={Style.box}>
        <div className={Style.flexbox}>
          <div>youtube</div>
          <div>google</div>
          <div>reddit</div>
          <div>gitcat</div>
        </div>
      </div>
    </div>
  );
};

export default content;
