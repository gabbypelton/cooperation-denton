import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import styles from "./article-preview.module.css";

export default ({ article }) => (
  <div className={styles.preview}>
    <Link to={`/blog/${article.slug}`}>
      <Img alt={article.heroImage.title} fluid={article.heroImage.fluid} />
    </Link>
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
);
