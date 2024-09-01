import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="">
      <div className="flex flex-col items-center mt-24">
        <Heading as="h1" className="text-4xl font-bold">
          {siteConfig.title}
        </Heading>
        <p className="text-xl">{siteConfig.tagline}</p>
        <div className="mt-8">
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:no-underline hover:text-white"
            to="/docs/introduction"
          >
            Introduction
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="Home" description="">
      <HomepageHeader />
      {/* <main><HomepageFeatures /></main> */}
    </Layout>
  );
}
