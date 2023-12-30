import Message from './_icons/message'
import Anime from './_icons/anime'
import Clock from './_icons/clock'
import Nudes from './_icons/nudes'

import Style from './Welcome.module.scss'

// TODO: Set minimum width and minimum height for the window

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
            <div className="icon">
              <Anime title="computer with anime" width="50px" height="50px" />
            </div>
            <span>Everything you need to go nuts</span>
          </div>
          <div className={Style.textIcon}>
            <div className="icon">
              <Nudes title="nude folder" width="50px" height="50px" />
            </div>
            <span>Easy access to your most important files 24/7</span>
          </div>
          <div className={Style.textIcon}>
            <div className="icon">
              <Message
                title="message with no answer"
                width="50px"
                height="50px"
              />
            </div>
            <span>New instant messenger for none instant responses</span>
          </div>
          <div className={Style.textIcon}>
            <div className="icon">
              <Clock title="The clock of nonsense" width="50px" height="50px" />
            </div>
            <span>
              Frozen date and time. <br />{' '}
              <small>You cannot lose what you don't have </small>
            </span>
          </div>
        </div>
      </main>
      <footer className={Style.footer}>
        <button type="button">UwU</button>
        <button type="button">I hate it</button>
      </footer>
    </div>
  )
}

export default content
