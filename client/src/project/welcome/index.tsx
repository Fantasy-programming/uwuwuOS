import Icon from './icon';
import { AppConfig } from '@/shared/types/types';
import app from './app';

const config: AppConfig = {
  name: 'Welcome',
  appName: 'Welcome',
  width: '658px',
  height: '490px',
  start_pos: '0-0',
  icon: Icon,
  entry: app,
};

export default config;
