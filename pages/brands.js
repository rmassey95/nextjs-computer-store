import Brand from "../models/brand";
import Head from "next/head";
import dbConnect from "../lib/dbConnect";
import Layout from "../components/layout";
import AllBrands from "../components/displayAllBrands";

export default function Brands({ brands }) {
  return (
    <>
      <Layout>
        <Head>
          <title>EC Store Site Brands</title>
        </Head>
        <AllBrands brands={brands} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const brandResult = await Brand.find({});

  const brands = brandResult.map((doc) => {
    const brand = doc.toObject();
    brand._id = brand._id.toString();
    return brand;
  });

  return { props: { brands: brands } };
}
