import Image from "next/image";
import Link from "next/link";

const DisplayItem = ({ item }) => {
  return (
    <div className="flex justify-center">
      <div className="p-1 flex-wrap w-1/2 mt-8 mx-8 bg-lightBeige rounded p-5 justify-center mb-8">
        <div className="flex flex-col">
          <div className="flex">
            <Image
              className="self-center rounded-lg"
              src={item.img}
              width={350}
              height={350}
              priority={true}
              alt={`${item.name} image`}
            ></Image>
            <div className="grow flex flex-col justify-between">
              <div className="ml-8">
                <h2 className="font-bold text-3xl text-center">{item.name}</h2>
                <p className="mt-3">
                  Brand:{" "}
                  <Link
                    className="text-blue-500 hover:underline"
                    href={`/brand/${item.brand.name}`}
                  >
                    {item.brand.name}
                  </Link>
                </p>
                <h4 className="text-xl mt-6 italic">${item.price}</h4>
              </div>
              <button className="ml-8 bg-turq hover:bg-lightTurq text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="my-5 mx-8">
            <h3 className="text-xl font-bold">Overview</h3>
            <p className="ml-4">{item.overview}</p>
          </div>
          <div id="moreInfo" className="mx-8">
            <ul>
              <li className="hiddenItem">
                <input type="checkbox" defaultChecked />
                <i></i>
                <h2>Additional Information</h2>
                <div className="hiddenContent mx-8 border-t-2">
                  <ul className="list-disc text-l py-4">
                    {item.additionalInfo.map((addInfo, indx) => {
                      return indx < item.additionalInfo.length - 1 ? (
                        <li className="mb-2">{addInfo}</li>
                      ) : (
                        <li>{addInfo}</li>
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
                <h2>Specifications</h2>
                <div className="hiddenContent mx-5">
                  <ul className="text-l">
                    {item.specs.map((spec) => {
                      return (
                        <li className="mb-2">
                          <p>{spec.name}</p>
                          <p>{spec.content}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
              <li className="hiddenItem">
                <input type="checkbox" defaultChecked />
                <i></i>
                <h2>Hvad..?</h2>
                <div className="hiddenContent">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                  quas placeat assumenda mollitia magni consequatur dolorum,
                  quod nihil distinctio aperiam officia alias! Voluptate dolore
                  ex officiis sit, magnam non a, eligendi pariatur aut, earum
                  dolores tenetur ipsam id illo deleniti. Laudantium deserunt
                  eaque ipsam voluptatum consequuntur voluptatibus sed minima ad
                  accusamus debitis eos similique laboriosam, molestiae?
                  Consequatur neque tempore quis. Eligendi, in ut aspernatur
                  esse nesciunt libero.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;
