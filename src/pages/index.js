import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import PlaceholderImage from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-4xl font-bold text-gray-800">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="max-w-xs mb-6">
      <PlaceholderImage />
    </div>
    <Link to="/page-2/" className="highlight">
      Go to page 2
    </Link>
  </Layout>
);

export default IndexPage;
