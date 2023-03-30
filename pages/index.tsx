import { LoadingOverlay } from '@mantine/core';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

// An index page redirects to the introduction page
// Added loading overlay to prevent
// loading times during development environment
// as well as disabling header usage
export default (): ReactElement => {
  const { push } = useRouter();
  useEffect(() => {
    push('/introduction');
  }, []);

  return <LoadingOverlay overlayOpacity={1} visible />;
};