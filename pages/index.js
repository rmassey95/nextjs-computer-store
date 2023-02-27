import useSWR from "swr";
import Head from "next/head";
import dbConnect from "../lib/dbConnect";
import Item from "../models/item";
import Category from "../models/category";
import Layout from "../components/layout";
import AllItems from "../components/displayAllItems";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index({ items, categories }) {
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
        <AllItems items={items} categories={categories} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const itemResult = await Item.find({}).select("name price img");
  const categoryResult = await Category.find({});

  const categories = categoryResult.map((doc) => {
    const category = doc.toObject();
    category._id = category._id.toString();
    return category;
  });

  const items = itemResult.map((doc) => {
    const item = doc.toObject();
    item._id = item._id.toString();
    return item;
  });

  return { props: { items: items, categories: categories } };
}
