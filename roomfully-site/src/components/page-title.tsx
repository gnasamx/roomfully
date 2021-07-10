import { decode } from 'he';
import * as React from 'react';
import config from '../config.json';

export interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = React.memo(({ title }) => {
  const titleBase = config.siteTitle || '';
  const pageTitle = title ? `${title} – ${titleBase}` : titleBase;

  React.useEffect(() => {
    document.title = decode(pageTitle);
  }, [pageTitle]);

  return null;
});

export default PageTitle;
