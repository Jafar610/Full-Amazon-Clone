import CategoryInfo from '../../Pages/CategoryInfo'
import data from './data'
function Category() {
  return (
    <div className="flex flex-wrap justify-center gap-8 absolute top-20 left-0 right-0">
      {data.map((category, index) => (
        <CategoryInfo
          key={index}
          name={category.category_name}
          image={category.category_image}
          link={category.link}
        />
      ))}
    </div>
  )
}

export default Category