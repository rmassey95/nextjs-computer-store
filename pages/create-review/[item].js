import Head from "next/head";
import Layout from "../../components/layout";
import DisplayReviewPage from "../../components/displayReviewPage";
import dbConnect from "../../lib/dbConnect";
import Item from "../../models/item";

export default function Review({ item }) {
  return (
    <>
      <Layout>
        <Head>
          <title>New Review</title>
        </Head>
        <DisplayReviewPage item={item} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  const itemResult = await Item.findById(params.item).select("name img");

  const item = itemResult.toObject();
  item._id = item._id.toString();

  return { props: { item: item } };
}
