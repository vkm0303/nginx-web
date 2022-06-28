import { useEffect, useState } from 'react';

type DotPropsType = {
  color?: string;
  size?: number | 'small' | 'middle' | 'big';
};

const SIZE = {
  small: 5,
  middle: 8,
  big: 11,
};

export default (props: DotPropsType) => {
  const [size, setSize] = useState<number>(SIZE.middle);
  useEffect(() => {
    if (typeof props.size === 'number') {
      setSize(props.size);
    } else if (typeof props.size === 'string') {
      setSize(SIZE[props.size] || SIZE.middle);
    }
  }, []);
  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        top: '50%',
        transform: 'translateY(-50%)',
        borderRadius: '50%',
        backgroundColor: props.color || '#50b87c',
      }}
    ></div>
  );
};
