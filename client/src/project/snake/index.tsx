import Icon from './icon';
import { AppConfig } from '@/shared/types/types';
import app from './app';

const config: AppConfig = {
  name: 'Snake',
  appName: 'Snake',
  width: '640px',
  height: '600px',
  start_pos: '1-0',
  icon: Icon,
  entry: app,
};

export default config;
