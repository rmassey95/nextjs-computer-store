import Image from "next/image";

const DisplayAllItems = ({ items }) => {
  return (
    <div className="p-1 flex-wrap max-w-screen-xl mx-auto mt-8">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">View all of our products</h2>
      </div>
      <div className="grid grid-cols-4 p-5 bg-lightBeige rounded-lg gap-3">
        {items.map((item) => {
          return (
            <div
              key={item._id}
              className="bg-white p-4 border border-slate-300 flex flex-col"
            >
              <Image
                className="self-center"
                src={item.img}
                width={200}
                height={0}
                alt={`${item.name} image`}
              ></Image>
              <div className="mt-2 tracking-tight text-lg">{item.name}</div>
              <div className="mt-2 italic font-semibold">${item.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayAllItems;
