import Head from "next/head";
import Layout from "../../components/layout";
import DisplayItem from "../../components/displayItem";
import dbConnect from "../../lib/dbConnect";
import Item from "../../models/item";
import Review from "../../models/review";

export default function Categories({ item, reviews }) {
  console.log(reviews);
  return (
    <>
      <Layout>
        <Head>
          <title>{item.name}</title>
        </Head>
        <DisplayItem item={item} reviews={reviews} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  const itemResult = await Item.findById(params.item)
    .populate("brand", "name")
    .populate("category");
  const reviewResult = await Review.find({ item: params.item });

  const item = itemResult.toObject();
  item._id = item._id.toString();
  item.category._id = item.category._id.toString();
  item.brand._id = item.brand._id.toString();
  item.dateAdded = item.dateAdded.toString();
  for (let i = 0; i < item.specs.length; i++) {
    item.specs[i]._id = item.specs[i]._id.toString();
  }

  const reviews = reviewResult.map((doc) => {
    const review = doc.toObject();
    review._id = review._id.toString();
    review.item = review.item.toString();
    review.datePosted = review.datePosted.toString();
    return review;
  });

  return { props: { item: item, reviews: reviews } };
}
