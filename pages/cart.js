import Head from "next/head";
import Layout from "../components/layout";
import DisplayCart from "../components/displayCart";

export default function Cart() {
  return (
    <>
      <Layout>
        <Head>
          <title>EC Store Site Cart</title>
        </Head>
        <DisplayCart />
      </Layout>
    </>
  );
}
