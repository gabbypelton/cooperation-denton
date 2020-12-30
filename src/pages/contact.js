import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import styles from "./blog.module.css";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const [contactInfo] = get(
      this,
      "props.data.allContentfulContactPage.edges"
    );

    return (
      <Layout location={this.props.location}>
        <div className={styles.hero}>Contact</div>
        <div
          style={{
            background: "#fff",
            textAlign: "center",
            backgroundColor: "none",
          }}
        >
          <Helmet title={siteTitle} />
          {contactInfo.node.links.map((link) => (
            <div>
              <a href={link.url}>{link.title}</a>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query ContactQuery {
    allContentfulContactPage {
      edges {
        node {
          links {
            title
            url
          }
        }
      }
    }
  }
`;
