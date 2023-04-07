'use client';

import { Fragment, useEffect, useState } from 'react';

/**
 * If the component has not mounted, return null, otherwise return the children.
 * @param props - React.PropsWithChildren
 * @returns A function that returns a component
 */
export function NoSSR(props: React.PropsWithChildren) {
  const { children } = props;
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return <Fragment>{children}</Fragment>;
}
