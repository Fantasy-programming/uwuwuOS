import Navbar from '@components/Navbar';
import DragArea from './DragArea';

const Screen = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <DragArea>{children}</DragArea>
    </>
  );
};

export default Screen;
