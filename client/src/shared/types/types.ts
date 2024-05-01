import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

export interface AppConfig {
  title: string;
  appName: string;
  width: string;
  height: string;
  start_pos: string;
  entry: () => JSX.Element;
  icon: React.MemoExoticComponent<
    ({
      title,
      titleId,
      ...props
    }: SVGProps<SVGSVGElement> & SVGRProps) => JSX.Element
  >;
  min_width?: string;
  min_height?: string;
  max_width?: string;
  max_height?: string;
  resizable?: boolean;
}

export interface AppList {
  [key: string]: AppConfig;
}
