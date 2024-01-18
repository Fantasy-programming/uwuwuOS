import useKeyboardInput from '@/shared/hooks/useKeyboardInput';

import Button from './_component/Button';

//images
import crashImg from './_images/crash.png';
import tom1Img from './_images/tom1.png';
import tom2Img from './_images/tom2.png';
import tom3Img from './_images/tom3.png';
import tom4Img from './_images/tom4.png';
import bassImg from './_images/kick.png';
import snareImg from './_images/snare.png';

// sound
import crash from './_sound/crash.mp3';
import tom1 from './_sound/tom-1.mp3';
import tom2 from './_sound/tom-2.mp3';
import tom3 from './_sound/tom-3.mp3';
import tom4 from './_sound/tom-4.mp3';
import bass from './_sound/kick-bass.mp3';
import snare from './_sound/snare.mp3';

import Style from './Drumkit.module.scss';

const sounds: Record<string, string> = {
  w: crash,
  a: tom1,
  s: tom2,
  d: tom3,
  j: tom4,
  k: bass,
  l: snare,
};

const keys = Object.keys(sounds);

const Content = () => {
  const handleKeys = (key: string) => {
    if (keys.includes(key)) {
      new Audio(sounds[key]).play();
    }
  };
  useKeyboardInput(handleKeys);

  return (
    <div className={Style.frame} role="application">
      <main className={Style.game}>
        <h1>Drumkit</h1>
        <div className={Style.drumSet}>
          <Button sound={crash} bg={crashImg}>
            w
          </Button>
          <Button sound={tom1} bg={tom1Img}>
            a
          </Button>
          <Button sound={tom2} bg={tom2Img}>
            s
          </Button>
          <Button sound={tom3} bg={tom3Img}>
            d
          </Button>
          <Button sound={tom4} bg={tom4Img}>
            j
          </Button>
          <Button sound={bass} bg={bassImg}>
            k
          </Button>
          <Button sound={snare} bg={snareImg}>
            l
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Content;
