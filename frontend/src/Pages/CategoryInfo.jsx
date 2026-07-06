function CategoryInfo({ name, image, link }) {
  return (
    // category card with image and name of category

    <div className="flex flex-wrap justify-center gap-4 relative top-70 left-0 right-0 hover:pointer">
      <div className="w-70 h-70 bg-gray-100 rounded-md flex flex-col items-center justify-center ">
        <p className="text-center mt-2 font-bold text-xl">{name}</p>
        <img src={image} alt={name} className="w-50 h-50 object-contain" />
        <a href="" className="text-blue-400">{link}</a>
      </div>
    </div>
  );
}

export default CategoryInfo;
