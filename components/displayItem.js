import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";

const DisplayItem = ({ item, reviews }) => {
  const formatDate = (dateStr) => {
    let date = new Date(dateStr);
    let month;
    switch (date.getMonth()) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
    }
    let year = date.getFullYear();
    let day = date.getDate();

    return `${month} ${day} ${year}`;
  };

  const calcRating = () => {
    let rating = 0;
    reviews.forEach((review) => {
      rating += review.rating;
    });

    rating = Math.round((rating / reviews.length) * 10) / 10;

    return rating;
  };

  const dispatch = useDispatch();

  return (
    <div className="flex justify-center">
      <div className="p-1 flex-wrap lg:w-1/2 mt-8 mx-1 lg:mx-8 bg-lightBeige rounded p-5 justify-center mb-8">
        <div className="flex flex-col">
          <div className="lg:flex">
            <Image
              className="self-center rounded-lg"
              src={item.img}
              width={350}
              height={350}
              priority={true}
              alt={`${item.name} image`}
            ></Image>
            <div className="grow flex flex-col justify-between">
              <div className="lg:ml-8 mb-2 lg:mb-0">
                <h2 className="font-bold text-3xl text-center">{item.name}</h2>
                <p className="mt-3">
                  Brand:{" "}
                  <Link
                    className="text-blue-500 hover:underline"
                    href={`/brand/${item.brand._id}`}
                  >
                    {item.brand.name}
                  </Link>
                </p>
                <h4 className="text-xl mt-6 italic">${item.price}</h4>
                {reviews[0] ? (
                  <h4>Average Rating: {calcRating()} / 5</h4>
                ) : (
                  <h4>No ratings given yet</h4>
                )}
              </div>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="lg:ml-8 bg-turq hover:bg-lightTurq text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="my-5 lg:mx-8">
            <h3 className="text-xl font-bold">Overview</h3>
            <p className="ml-4">{item.overview}</p>
          </div>
          <div id="moreInfo" className="lg:mx-8">
            <ul>
              <li className="hiddenItem">
                <input type="checkbox" defaultChecked />
                <i></i>
                <h2 className="lg:text-lg">Additional Information</h2>
                <div className="hiddenContent mx-3 lg:mx-8">
                  <ul className="list-disc text-l py-4">
                    {item.additionalInfo.map((addInfo, indx) => {
                      return indx < item.additionalInfo.length - 1 ? (
                        <li key={indx} className="mb-2">
                          {addInfo}
                        </li>
                      ) : (
                        <li key={indx}>{addInfo}</li>
                      );
                    })}
                  </ul>
                </div>
              </li>
              <li className="hiddenItem">
                <input
                  className="accordionBoxBtn"
                  type="checkbox"
                  defaultChecked
                />
                <i></i>
                <h2 className="lg:text-lg">Specifications</h2>
                <div className="hiddenContent w-full">
                  <ul className="text-xs lg:text-l py-4">
                    {item.specs[0] ? (
                      item.specs.map((spec, indx) => {
                        return indx % 2 === 0 ? (
                          <li
                            key={indx}
                            className="p-2 border-b flex justify-between bg-slate-200"
                          >
                            <p className="font-bold">{spec.name}</p>
                            <p>{spec.content}</p>
                          </li>
                        ) : (
                          <li
                            key={indx}
                            className="p-2 border-b flex justify-between"
                          >
                            <p className="font-bold">{spec.name}</p>
                            <p>{spec.content}</p>
                          </li>
                        );
                      })
                    ) : (
                      <div>No specifications provided for this product</div>
                    )}
                  </ul>
                </div>
              </li>
              <li className="hiddenItem">
                <input type="checkbox" defaultChecked />
                <i></i>
                <h2 className="lg:text-lg">Date added to Store</h2>
                <div className="hiddenContent">
                  <p className="p-2">{formatDate(item.dateAdded)}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="my-5 lg:mx-8 bg-white">
            <div className="flex justify-between mx-4 py-4  border-b">
              <h3 className="text-xl font-bold">Reviews</h3>
              <Link
                href={`/create-review/${item._id}`}
                className="bg-turq hover:bg-lightTurq text-white text-sm py-1 px-3 rounded"
              >
                Add Review
              </Link>
            </div>
            {reviews[0] ? (
              reviews.map((review) => {
                return (
                  <div key={review._id} className="py-4 mx-6 pb-3">
                    <div className="flex justify-between">
                      <h4 className="lg:text-lg font-bold">{review.title}</h4>
                      <p className="text-xs lg:text-sm italic">
                        {formatDate(review.datePosted)}
                      </p>
                    </div>
                    <p className="italic text-sm">{review.user}</p>
                    <p className="ml-4 text-turq">{review.rating} / 5</p>
                    {review.comment ? (
                      <p className="pb-4 border-b">{review.comment}</p>
                    ) : (
                      <p className="pb-4 border-b">No comment provided</p>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="py-4 mx-6 pb-3">No reviews to display</div>
            )}
            {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;
