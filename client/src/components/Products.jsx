import ProductData from "./Data";

const Products = () => {
  return (
    <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 p-2">
      {ProductData.map((ele) => (
        <div key={ele.id} className="border rounded-2xl">
          <div className="rounded-2xl ">
            <img src={ele.image} className="rounded-2xl" />
          </div>
          <h1>{ele.name}</h1>
          <p className="text-xs">{ele.desc}</p>
          <p className="text-sm">{ele.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
