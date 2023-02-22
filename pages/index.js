import useSWR from "swr";
import Layout from "../components/layout";
import Head from "next/head";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error, isLoading } = useSWR("/api/inventory", fetcher);

  if (error) return <div>Failed to load inventory</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <>
      <Layout>
        <Head>
          <title>EC Store Site</title>
        </Head>
      </Layout>
    </>
  );
}
