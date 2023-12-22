import Style from "./Welcome.module.scss";

const content = () => {
  return (
    <div className={Style.frame}>
      <main className={Style.container}>
        <div className={Style.image} />
        <div className={Style.infobox}>
          <div>
            <h1>Welcome to uwuwuOS</h1>
            <p>The best OS you'll use on earth</p>
          </div>
          <div className={Style.textIcon}>
            <div className="icon"></div>
            <span>Everything you need to get PTSD</span>
          </div>
        </div>
      </main>
      <footer className={Style.footer}>
        <button type="button">UwU</button>
        <button type="button">I hate it</button>
      </footer>
    </div>
  );
};

export default content;
