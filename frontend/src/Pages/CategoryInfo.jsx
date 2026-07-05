function CategoryInfo({ name, image }) {
  return (
    // category card with image and name of category

    <div className="flex flex-wrap justify-center gap-4 relative top-70 left-0 right-0">
      <div className="w-70 h-70 bg-gray-100 rounded-md flex flex-col items-center justify-center ">
        <img src={image} alt={name} className="w-50 h-50 object-contain" />
        <p className="text-center mt-2">{name}</p>
      </div>
    </div>
  );
}

export default CategoryInfo;
