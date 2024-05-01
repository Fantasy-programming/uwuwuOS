import Icon from './icon';
import { AppConfig } from '@/shared/types/types';
import app from './app';

const config: AppConfig = {
  title: 'Snake',
  appName: 'Snake',
  width: '640px',
  height: '600px',
  start_pos: '1-0',
  icon: Icon,
  entry: app,
};

export default config;
