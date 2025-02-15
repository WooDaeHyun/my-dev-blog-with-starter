import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import config from '../../website-config';

export function SiteNavLogo() {
  const data = useStaticQuery(graphql`
    query HeadingQuery {
      logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FIXED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);
  return (
    <Link className="site-nav-logo" css={SiteNavLogoStyles} to="/">
      {data.logo ? (
        <StaticImage src="../../assets/ghost-logo.png" alt={config.title} width={50} height={50} />
      ) : (
        config.title
      )}
    </Link>
  );
}

const SiteNavLogoStyles = css`
  position: relative;
  z-index: 100;
  flex-shrink: 0;
  display: inline-block;
  margin-right: 32px;
  padding: 12px 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-transform: none;

  :hover {
    text-decoration: none;
  }

  img {
    display: block;
    width: auto;
    height: 21px;
  }
`;
