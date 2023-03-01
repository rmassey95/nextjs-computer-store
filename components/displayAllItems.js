import Image from "next/image";

const DisplayAllItems = ({ items, categories }) => {
  return (
    <div className="p-1 flex-wrap max-w-screen-xl mx-auto mt-8 flex justify-center">
      <div>
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Search by a specific category</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 p-5 bg-lightBeige rounded-lg mb-8">
          {categories.map((category) => {
            return (
              <div
                key={category._id}
                className="bg-white p-4 border border-slate-300 flex flex-col rounded w-96"
              >
                <a href={`/category/${category._id}`}>
                  <Image
                    className="self-center"
                    src={category.img}
                    width={500}
                    height={500}
                    alt={`${category.name} image`}
                  ></Image>
                  <div className="mt-4 hover:underline text-xl text-center">
                    {category.name}
                  </div>
                  <div className="mt-2 text-gray-700 text-sm">
                    {category.overview}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-8">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">View all of our products</h2>
        </div>
        <div className="grid grid-cols-4 p-5 bg-lightBeige rounded-lg gap-3 mb-8">
          {items.map((item) => {
            return (
              <a
                href={`/item/${item._id}`}
                key={item._id}
                className="bg-white p-4 border border-slate-300 flex flex-col rounded"
              >
                <Image
                  className="self-center"
                  src={item.img}
                  width={200}
                  height={200}
                  priority={true}
                  alt={`${item.name} image`}
                ></Image>
                <div className="mt-4 tracking-tight hover:underline text-gray-800">
                  {item.name}
                </div>
                <div className="mt-2 italic font-semibold">${item.price}</div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayAllItems;
