'use client'

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function BlogComments() {
  return (
    <Giscus
      id="giscus-comments"
      repo="Darianlmj/Darianlmj"
      repoId="R_kgDOHwCt9Q="
      category="General"
      categoryId="DIC_kwDOHwCt9c4Cq70I"
      mapping="url"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={useTheme().theme === 'dark' ? 'dark_dimmed' : 'light_tritanopia'}
      lang="en"
      loading="lazy"
      strict="0"
    />
  );
}