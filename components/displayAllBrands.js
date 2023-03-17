import Image from "next/image";

const DisplayAllItems = ({ brands }) => {
  return (
    <div className="p-1 flex-wrap max-w-screen-xl mx-auto mt-8 flex justify-center">
      <div className="mx-8">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">All of our brands</h2>
        </div>
        <div className="grid grid-cols-4 p-5 bg-lightBeige rounded-lg gap-3 mb-8">
          {brands.map((brand) => {
            return (
              <a
                href={`/brand/${brand._id}`}
                key={brand._id}
                className="bg-white p-4 border border-slate-300 flex flex-col rounded"
              >
                <Image
                  className="self-center"
                  src={brand.img}
                  width={200}
                  height={200}
                  priority={true}
                  alt={`${brand.name} image`}
                ></Image>
                <div className="mt-4 tracking-tight hover:underline text-gray-800 font-bold text-center">
                  {brand.name}
                </div>
                <div className="mt-2 text-gray-700 text-sm">
                  {brand.overview}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayAllItems;
