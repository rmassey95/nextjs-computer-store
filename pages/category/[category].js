import Head from "next/head";
import Layout from "../../components/layout";
import CategoryItems from "../../components/categoryItems";
import dbConnect from "../../lib/dbConnect";
import Item from "../../models/item";

export default function Categories({ items }) {
  return (
    <>
      <Layout>
        <Head>
          <title>EC Store - {items[0].category.name}</title>
        </Head>
        <CategoryItems items={items} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  const itemResult = await Item.find({ category: params.category })
    .select("name img quantity price")
    .populate("category", "name");

  const items = itemResult.map((doc) => {
    const item = doc.toObject();
    item._id = item._id.toString();
    item.category._id = item.category._id.toString();
    return item;
  });

  return { props: { items: items } };
}
