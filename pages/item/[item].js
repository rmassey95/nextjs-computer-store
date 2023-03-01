import Head from "next/head";
import Layout from "../../components/layout";
import DisplayItem from "../../components/displayItem";
import dbConnect from "../../lib/dbConnect";
import Item from "../../models/item";

export default function Categories({ item }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{item.name}</title>
        </Head>
        <DisplayItem item={item} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  const itemResult = await Item.findById(params.item)
    .populate("brand")
    .populate("category");

  const item = itemResult.toObject();
  item._id = item._id.toString();
  item.category._id = item.category._id.toString();
  item.brand._id = item.brand._id.toString();
  item.dateAdded = item.dateAdded.toString();
  for (let i = 0; i < item.specs.length; i++) {
    item.specs[i]._id = item.specs[i]._id.toString();
  }

  return { props: { item: item } };
}
