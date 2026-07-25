import React from 'react';
import {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import ErrorScreen from '@site/src/components/ErrorScreen';

export default function NotFound() {
  const title = translate({
    id: 'theme.NotFound.title',
    message: 'Page Not Found',
  });
  return (
    <>
      <PageMetadata title={title} />
      <ErrorScreen code="404" />
    </>
  );
}
