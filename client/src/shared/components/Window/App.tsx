import { memo } from 'react';
import { Handle } from '@components/Handle';
import useApp from '@hooks/useApp';

interface AppProps {
  name: string;
  appName: string;
  id: string;
  focused: boolean;
}

const App = memo(({ name, appName, id, focused }: AppProps) => {
  const Content = useApp({ name: appName });
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Handle name={name} id={id} focused={focused} />
      <Content />
    </div>
  );
});

export default App;
