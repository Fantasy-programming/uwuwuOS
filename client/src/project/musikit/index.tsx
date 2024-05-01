import Icon from './icon';
import { AppConfig } from '@/shared/types/types';
import app from './app';

const config: AppConfig = {
  title: 'Drumkit',
  appName: 'Drumkit',
  width: '658px',
  height: '490px',
  start_pos: '2-0',
  icon: Icon,
  entry: app,
};

export default config;
