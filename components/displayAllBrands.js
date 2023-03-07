import Image from "next/image";

const DisplayAllItems = ({ brands }) => {
  console.log(brands);
  return (
    <div className="p-1 flex-wrap max-w-screen-xl mx-auto mt-8 flex justify-center">
      <div>
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">EC Store Brands</h2>
        </div>
      </div>
    </div>
  );
};

export default DisplayAllItems;
