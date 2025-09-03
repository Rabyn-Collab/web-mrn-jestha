import ProductList from "../product/ProductList.jsx";
import TopProducts from "../product/TopProducts.jsx";
import SearchInput from "../search/SearchInput.jsx";

export default function Home() {
  return (
    <div className="  pb-12">

      <div className="space-y-10">
        <TopProducts />
        <ProductList />
      </div>


    </div>
  )
}
