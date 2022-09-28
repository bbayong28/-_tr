import { Link } from "react-router-dom"

const ProductInfo = () => {
    return (
        <section className="ProductInfo">
            <div className="inner">
                {
                    .map((con, idx) => {
                        return (
                            <Link to={con.link} key={idx}>
                                <figure key={con.id}>
                                    <img src={process.env.PUBLIC_URL + `/assets/images/main_s01${idx + 1}.jpg`} alt="" />
                                </figure>
                                <strong>{con.tit}</strong>
                                <p>
                                    {con.des}
                                </p>
                            </Link>

                        )
                    })

                }
            </div>
        </section>
    )
}

export default ProductInfo;