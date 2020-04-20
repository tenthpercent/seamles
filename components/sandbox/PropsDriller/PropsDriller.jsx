import React, { Children } from 'react';

const PropsDriller = (props) => {
  const toDrill = { ...props.toDrill };
  delete toDrill.children;

  return Children.map(
    props.children,
    (child) => React.cloneElement(child, toDrill),
  );
};

export default PropsDriller;
