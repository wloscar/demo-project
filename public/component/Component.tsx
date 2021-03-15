import React from 'react';
import { useAppContext } from '../context';

const BIComponent = (window as any).BIComponent;

export const Component: React.FC = React.memo(props => {
  const ref = React.useRef();
  const hasMounted = React.useRef(false);
  const { width, height, data } = useAppContext(state => ({
    data: state.data,

    width: state.card.width,
    height: state.card.height,
  }));

  React.useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      BIComponent.mount({
        container: ref.current,
        customProps: data,
      });
    } else {
      BIComponent.update({
        container: ref.current,
        customProps: data,
      });
    }

    return () => {
      BIComponent.unmount({
        container: ref.current,
        customProps: data,
      });
    };
  }, [data]);

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
});
