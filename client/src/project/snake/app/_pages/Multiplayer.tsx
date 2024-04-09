import { Button } from '../_components/Button';

const Multiplayer = () => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '10px',
        gap: '10px',
        flexDirection: 'column',
      }}
    >
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="danger">Danger Button</Button>
    </div>
  );
};

export default Multiplayer;
