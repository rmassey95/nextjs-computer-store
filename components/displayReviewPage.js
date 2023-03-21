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
      <form className="flex flex-col my-4" action="/api/form" method="post">
        <input
          className="mb-4 p-2"
          placeholder="Title"
          type="text"
          id="title"
          name="title"
        />
        <input
          className="mb-4 p-2"
          placeholder="Username"
          type="text"
          id="user"
          name="user"
        />
        <textarea
          className="mb-4 p-2"
          placeholder="Comment..."
          id="comment"
          name="comment"
        ></textarea>

        <input hidden value={item._id} name="itemId" id="itemId" />
        <p>Star rating: </p>
        <div className="mb-4 p-2 bg-white flex flex-col items-start">
          <div>
            <input type="radio" id="zero" name="rating" value={0} />
            <label for="zero"> &#9734;&#9734;&#9734;&#9734;&#9734; </label>
          </div>
          <div>
            <input type="radio" id="one" name="rating" value={1} />
            <label for="one"> &#9733;&#9734;&#9734;&#9734;&#9734;</label>
          </div>
          <div>
            <input type="radio" id="two" name="rating" value={2} />
            <label for="two"> &#9733;&#9733;&#9734;&#9734;&#9734;</label>
          </div>
          <div>
            <input type="radio" id="three" name="rating" value={3} />
            <label for="three"> &#9733;&#9733;&#9733;&#9734;&#9734;</label>
          </div>
          <div>
            <input type="radio" id="four" name="rating" value={4} />
            <label for="four"> &#9733;&#9733;&#9733;&#9733;&#9734;</label>
          </div>
          <div>
            <input type="radio" id="five" name="rating" value={5} />
            <label for="five"> &#9733;&#9733;&#9733;&#9733;&#9733;</label>
          </div>
        </div>
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
