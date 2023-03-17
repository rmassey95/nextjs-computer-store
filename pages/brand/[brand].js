import Head from "next/head";
import Layout from "../../components/layout";
import dbConnect from "../../lib/dbConnect";
import Item from "../../models/item";
import BrandItems from "../../components/brandItems";

export default function Categories({ items }) {
  return (
    <>
      <Layout>
        <Head>
          <title>EC Store - {items[0].brand.name}</title>
        </Head>
        <BrandItems items={items} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  const itemResult = await Item.find({ brand: params.brand })
    .select("name img quantity price")
    .populate("brand", "name");

  const items = itemResult.map((doc) => {
    const item = doc.toObject();
    item._id = item._id.toString();
    item.brand._id = item.brand._id.toString();
    return item;
  });

  return { props: { items: items } };
}
