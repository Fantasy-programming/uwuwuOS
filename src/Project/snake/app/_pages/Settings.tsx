import ToggleSwitch from '@/shared/components/Toggle/ToggleSwitch.tsx';
import Slider from '@/shared/components/Slider/Slider.tsx';

import useKeyboardInput from '@/shared/hooks/useKeyboardInput';
import { SettingsProps } from '../_utils/types.ts';

import Style from './Settings.module.scss';

// million-ignore
const Settings = ({ goto, settings, updateSettings }: SettingsProps) => {
  // ESC => HOME
  useKeyboardInput((key: string) => {
    switch (key) {
      case 'Escape':
        goto('HOME');
        break;
      default:
        break;
    }
  });

  function handleToggleSound() {
    updateSettings(prevSettings => ({
      ...prevSettings,
      sound: !prevSettings.sound,
    }));
  }

  function handleToggleMusic() {
    updateSettings(prevSettings => ({
      ...prevSettings,
      music: !prevSettings.music,
    }));
  }

  function handleSliderVolume(event: React.ChangeEvent<HTMLInputElement>) {
    updateSettings(prevSettings => ({
      ...prevSettings,
      volume: Number(event.target.value),
    }));
  }

  function handleChangeTheme(event: React.ChangeEvent<HTMLSelectElement>) {
    updateSettings(prevSettings => {
      if (event.target.value !== 'basic' && event.target.value !== 'retro') {
        return prevSettings;
      }
      return {
        ...prevSettings,
        theme: event.target.value,
      };
    });
  }

  return (
    <div className={Style.container}>
      <main className={Style.settings}>
        <h1>SETTINGS</h1>

        <section className={Style.sound}>
          <h3>SOUND</h3>
          <div>
            <span>Sound</span>
            <ToggleSwitch
              isToggled={settings.sound}
              onToggle={handleToggleSound}
            />
          </div>
          <div>
            <span>Music</span>
            <ToggleSwitch
              isToggled={settings.music}
              onToggle={handleToggleMusic}
            />
          </div>
          <div>
            <span>Volume</span>
            <Slider
              max={10}
              value={settings.volume}
              onChange={handleSliderVolume}
            />
          </div>
        </section>

        <section className={Style.themes}>
          <h3>THEMES</h3>
          <label>
            Theme
            <select value={settings.theme} onChange={handleChangeTheme}>
              <option value="basic">Basic</option>
              <option value="retro">Retro</option>
            </select>
          </label>
        </section>
      </main>
      <div className={Style.snakeImg} />
    </div>
  );
};

export default Settings;
