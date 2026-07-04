import CategoryInfo from '../../Pages/CategoryInfo'
import data from './data'
function Category() {
  return (
    <div>
      {data.map((category, index) => (
        <CategoryInfo
          key={index}
          name={category.category_name}
          image={category.category_image}
        />
      ))}
    </div>
  )
}

export default Category