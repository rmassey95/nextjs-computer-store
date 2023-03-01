import Image from "next/image";

const CategoryItems = ({ items }) => {
  return (
    <div className="p-1 flex-wrap max-w-screen-xl mx-auto mt-8 mx-8">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">
          Shop all our {items[0].category.name}
        </h2>
      </div>
      <div className="mb-2">
        <p className="">Showing {items.length} results</p>
      </div>
      <div className="grid grid-cols-4 p-5 bg-lightBeige rounded-lg gap-3 mb-8">
        {items.map((item) => {
          return (
            <div
              key={item._id}
              className="bg-white p-4 border border-slate-300 rounded my-4"
            >
              <a href={`/item/${item._id}`}>
                <Image
                  className="self-center"
                  src={item.img}
                  width={600}
                  height={200}
                  priority={true}
                  alt={`${item.name} image`}
                ></Image>
                <div className="mt-4 hover:underline text-xl text-center">
                  {item.name}
                </div>
                <div className="mt-2 italic font-semibold">${item.price}</div>
                <div className="mt-2 text-gray-700 text-sm">
                  {item.quantity === 0 ? (
                    <p className="text-red-500">No units available</p>
                  ) : item.quantity < 3 ? (
                    <p className="text-yellow-500">Low supply, order now!</p>
                  ) : (
                    <p className="text-green-500">Lots in stock!</p>
                  )}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryItems;
