import Image from "next/image";

const DisplayItem = ({ item }) => {
  console.log(item);
  return (
    <div className="flex justify-center">
      <div className="p-1 flex-wrap w-2/3 mt-8 mx-8 bg-lightBeige rounded p-5">
        <div className="flex flex-col">
          <div className="flex">
            <Image
              className="self-center"
              src={item.img}
              width={350}
              height={350}
              priority={true}
              alt={`${item.name} image`}
            ></Image>
            <div>
              <h2 className="font-bold text-3xl ml-8">{item.name}</h2>
            </div>
          </div>
          <div>test 2</div>
          <div>test 3</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;
