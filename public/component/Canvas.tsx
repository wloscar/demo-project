import React from 'react';
import { useAppContext } from '../context';
import './Canvas.scss';
import { Card } from './Card';
import { Component } from './Component';

export const Canvas: React.FC = React.memo(props => {
  const ref = React.createRef<HTMLDivElement>();
  const { data, setCard } = useAppContext(state => ({
    data: state.data,
  }));

  React.useEffect(() => {
    setCard({
      canvasWidth: ref.current.offsetWidth,
      canvasHeight: ref.current.offsetHeight,
    });
  }, [ref, setCard]);

  const handleResize = React.useCallback(
    e => {
      setCard({
        canvasWidth: ref.current.offsetWidth,
        canvasHeight: ref.current.offsetHeight,
      });
    },
    [ref, setCard],
  );

  React.useEffect(() => {
    window.addEventListener('resize', handleResize, true);
    return () => {
      window.removeEventListener('resize', handleResize, true);
    };
  }, [handleResize]);

  return React.useMemo(
    () => (
      <div className="demo-canvas" ref={ref}>
        <Card title={data.viewConfig.caption}>
          <Component />
        </Card>
      </div>
    ),
    [data, ref],
  );
});
