import Footer from "components/footer/Footer"
import Banner from "components/home/Banner/Banner"
import Products from "components/home/Products/Products"
import useAsync from "hooks/useAsync"
import React from "react"
import ProductServices from "services/ProductServices"
// import Header from "../../components/common/Header/Header"

const Home = () => {
    // const [data, setData] = useState<IProduct[] | null>(null)

    // useEffect(() => {
    //     ProductServices.getProducts().then((data) => setData(data))
    // }, [])
    const { data, isSuccess, isLoading, isError } = useAsync(ProductServices.getProducts)
    return (
        <div>
            <Banner />
            <Products title="Shop By Stores" products={data} isSuccess={isSuccess} isLoading={isLoading} isError={isError}/>
            {/* <Products title="Express" products={data} />
            <Products title="Most Popular" products={data} /> */}
            <Footer />
        </div>
    )
}

export default Home
