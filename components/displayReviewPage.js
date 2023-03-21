import Image from "next/image";

const DisplayReviewPage = ({ item }) => {
  return (
    <div className="p-1 flex-wrap max-w-screen-xl mx-auto my-8 w-9/12 border p-5 rounded bg-lightBeige">
      <h1 className="text-2xl font-bold">New Review</h1>

      <h2 className="my-2">{item.name}</h2>
      <Image
        src={item.img}
        width={250}
        height={250}
        priority={true}
        alt={`${item.name} image`}
      ></Image>
      <form
        className="flex flex-col my-4"
        action="/send-data-here"
        method="post"
      >
        <input
          className="mb-4 p-2"
          placeholder="Title"
          type="text"
          id="first"
          name="first"
        />
        <input
          className="mb-4 p-2"
          placeholder="Username"
          type="text"
          id="last"
          name="last"
        />
        <textarea className="mb-4 p-2" placeholder="Comment..."></textarea>
        <button
          className="bg-turq hover:bg-lightTurq text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DisplayReviewPage;
