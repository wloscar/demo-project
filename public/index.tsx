import React from 'react';
import ReactDOM from 'react-dom';
import { props } from './mock';

const Demo = () => {
  const ref = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (ref.current) {
      (window as any).BIComponent.mount({
        container: ref.current,
        customProps: props,
      });
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

ReactDOM.render(<Demo />, document.getElementById('root'));
