import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";

import Hero from "../components/hero";
import Layout from "../components/layout";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const sections = get(this, "props.data.allContentfulSection.nodes");
    const [author] = get(this, "props.data.allContentfulPerson.edges");

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <Img alt={author.node.name} fluid={author.node.heroImage.fluid} />
          {sections.map((section, index) => {
            if (section.node_locale === "en-US") {
              return (
                <div style={{ padding: "0 2% 1rem 2%" }}>
                  <h1>{section.title}</h1>
                  {section.body.childMarkdownRemark.htmlAst.children.map(
                    (i) => (
                      <RecursiveRender key={i.id} data={i} />
                    )
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </Layout>
    );
  }
}

const RecursiveRender = ({ data }) => {
  if (data.type === "text") return data.value;
  const Element = () =>
    React.createElement(
      data.tagName,
      {},
      data.children.map((child) => (
        <RecursiveRender key={child.id} data={child} />
      ))
    );
  return <Element />;
};

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulSection(sort: { fields: createdAt, order: ASC }) {
      nodes {
        node_locale
        id
        title
        body {
          id
          childMarkdownRemark {
            id
            htmlAst
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(maxWidth: 1180, maxHeight: 300, resizingBehavior: PAD) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
