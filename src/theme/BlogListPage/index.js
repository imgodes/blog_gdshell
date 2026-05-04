import React from 'react';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {BlogPostProvider} from '@docusaurus/plugin-content-blog/client';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import clsx from 'clsx';
import styles from './styles.module.css';

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('pt-BR', {year: 'numeric', month: '2-digit', day: '2-digit'});
}

function CyberpunkCard({content}) {
  const {metadata, assets} = content;
  const {title, description, permalink, date, tags, readingTime, frontMatter} = metadata;
  const image = assets?.image ?? frontMatter?.image ?? null;

  return (
    <Link to={permalink} className={clsx(styles.card, image && styles.cardWithImage)}>
      <div className={styles.scanlines} />

      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.cardImage} loading="lazy" />
          <div className={styles.imageScanlines} />
        </div>
      )}

      <div className={styles.cardBody}>
        <div className={styles.meta}>
          <span>{formatDate(date)}</span>
          {readingTime != null && (
            <>
              <span className={styles.metaSep}>//</span>
              <span>{Math.ceil(readingTime)} min</span>
            </>
          )}
        </div>

        <h2 className={styles.title} data-text={title}>
          {title}
        </h2>

        {description && (
          <p className={styles.description}>{description}</p>
        )}

        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag.permalink} className={styles.tag}>
                #{tag.label}
              </span>
            ))}
          </div>
        )}

        <div className={styles.readMore}>
          ler post <span>&rarr;</span>
        </div>
      </div>
    </Link>
  );
}

function BlogListPageContent({metadata, items, sidebar}) {
  const {blogTitle, totalCount} = metadata;

  return (
    <BlogLayout sidebar={sidebar}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles.headerPrompt}>&gt; ls -la /posts/</p>
          <h1 className={styles.headerTitle}>{blogTitle || 'blog'}</h1>
          {totalCount != null && (
            <p className={styles.headerCount}>
              {totalCount} entr{totalCount === 1 ? 'y' : 'ies'} found
            </p>
          )}
        </div>

        <div className={styles.grid}>
          {items.map(({content: BlogPostContent}) => (
            <BlogPostProvider
              key={BlogPostContent.metadata.permalink}
              content={BlogPostContent}
            >
              <CyberpunkCard content={BlogPostContent} />
            </BlogPostProvider>
          ))}
        </div>

        <div className={styles.paginator}>
          <BlogListPaginator metadata={metadata} />
        </div>
      </div>
    </BlogLayout>
  );
}

export default function BlogListPage(props) {
  const {metadata} = props;
  const {blogDescription, blogTitle} = metadata;

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}
    >
      <PageMetadata title={blogTitle} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
