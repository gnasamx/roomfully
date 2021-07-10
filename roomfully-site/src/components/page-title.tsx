import { decode } from 'he';
import { useEffect, memo } from 'react';
import config from '../config.json';

export interface PageTitleProps {
  title: string;
}

const PageTitle = memo(({ title }: PageTitleProps) => {
  const titleBase = config.siteTitle || '';
  const pageTitle = title ? `${title} – ${titleBase}` : titleBase;

  useEffect(() => {
    document.title = decode(pageTitle);
  }, [pageTitle]);

  return null;
});

export default PageTitle;
