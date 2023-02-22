import useSWR from "swr";
import Head from "next/head";
import dbConnect from "../lib/dbConnect";
import Item from "../models/item";
import Layout from "../components/layout";
import AllItems from "../components/displayAllItems";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index({ items }) {
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
        <AllItems items={items} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const result = await Item.find({}).select("name price img");

  const items = result.map((doc) => {
    const item = doc.toObject();
    item._id = item._id.toString();
    return item;
  });

  return { props: { items: items } };
}
