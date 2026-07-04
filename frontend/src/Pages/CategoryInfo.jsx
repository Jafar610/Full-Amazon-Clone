
function CategoryInfo({name, image}) {
  return (
    // category card with image and name of category
    <div>
        <div className="flex flex-wrap justify-center gap-4">
            <div className="w-40 h-40 bg-gray-200 rounded-lg flex flex-col items-center justify-center">
                <img src={image} alt={name} className="w-20 h-20 object-contain" />
                <p className="text-center mt-2">{name}</p>
            </div>
        </div>
    </div>
  )
}

export default CategoryInfo