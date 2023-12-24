import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Destination = () => {
    return (
        <div>
            <Helmet>
                <title>Travel / Destination</title>
            </Helmet>
            <div>
                <div className="hero mb-16" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/bf/46/9a/bf469ae026d5a9388c9877e788697ec8.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md py-12">
                            <h1 className="mb-5 text-4xl font-bold text-white">Gallery</h1>
                            <div className="card-actions justify-end">
                                <Link to="/">
                                    <button className="btn w-full mt-4 bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] outline-none hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... ">Back to Home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="text-center pb-10">
                    <h1 className="text-gray-700 pb-1 text-3xl font-bold">Explore <span className="text-[#12D1E5]">Top</span> Gallery</h1>
                    <p className="text-gray-500">A virtual tour is a simulation of an existing location, usually composed of a sequence of videos, still <br /> images or 360-degree images. </p>
                </div>

                <div className="px-10">
                    <div class="grid md:grid-cols-4 pb-10 gap-4">
                        <div>
                            <Link to="/tours">
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[300px] transition duration-300 ease-in-out hover:scale-110 pb-2 w-full" src="https://i.ibb.co/PF4CtxG/2d3488dc4bf225e95990529bc97b4fd5.jpg" alt="Louvre" />
                                </div>
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[340px] transition duration-300 ease-in-out hover:scale-110 pt-2 w-full" src="https://i.ibb.co/9GnYm6G/7f7ff105f5be89c3f820de321e963831.jpg" alt="Louvre" />
                                </div>
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[250px] transition duration-300 ease-in-out hover:scale-110 pt-4 w-full" src="https://i.ibb.co/1snvszK/51daac42b2162c034183b13f54a6015f.jpg" alt="Louvre" />
                                </div>
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[300px] transition duration-300 ease-in-out hover:scale-110 pt-4 w-full" src="https://i.ibb.co/rtVKxK3/7517a13bded9935be486a15f9cfb6d6e.jpg" alt="Louvre" />
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/tours">
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[200px] transition duration-300 ease-in-out hover:scale-110 pb-2 w-full" src="https://i.ibb.co/B4TKhYP/42eeeb368dbee3f707d18e1d79a62544.jpg" alt="Louvre" />
                                </div>
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[200px] transition duration-300 ease-in-out hover:scale-110 pt-2 w-full" src="https://i.ibb.co/mv83FX3/e3663b00fd43647ea3adc84b9dbe5f20.jpg" alt="Louvre" />
                                </div>
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[400px] transition duration-300 ease-in-out hover:scale-110 pt-4 w-full" src="https://i.ibb.co/fxKV6dJ/38c5163a379c3a00a3932aa3a5d1294a.jpg" alt="Louvre" />
                                </div>
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[250px] transition duration-300 ease-in-out hover:scale-110 pt-4 w-full" src="https://i.ibb.co/JBsQnSZ/01ed8d04438263b45d001f838e3f7d77.jpg" alt="Louvre" />
                                </div>
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[140px] transition duration-300 ease-in-out hover:scale-110 pt-4 w-full" src="https://i.ibb.co/k8n0wZt/db56977bf8cfcf96bc5ede9ba1738d0b.jpg" alt="Louvre" />
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/tours">
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[400px] transition duration-300 ease-in-out hover:scale-110      w-full" src="https://i.ibb.co/jJh5Xz2/c377ca23eeb3811037fc206ace9e6aa6.jpg" alt="Louvre" />
                                </div>
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[200px] transition duration-300 ease-in-out hover:scale-110 pt-4 w-full" src="https://i.ibb.co/nsD97Gj/2d573fce8610133243b6446349c0501f.jpg" alt="Louvre" />
                                </div>
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[300px] transition duration-300 ease-in-out hover:scale-110 pt-4 w-full" src="https://i.ibb.co/rvbBbhH/bdedbcf965bc316b950b86b2e46cb9db.jpg" alt="Louvre" />
                                </div>
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[290px] transition duration-300 ease-in-out hover:scale-110 pt-4 w-full" src="https://i.ibb.co/vdVL5jc/a5e17d06c4e0884e7763333f27559c82.jpg" alt="Louvre" />
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/tours">
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[150px] transition duration-300 ease-in-out hover:scale-110 w-full" src="https://i.ibb.co/9VVQnNt/e51156a0a1ac0c9487619cdcaef1bd67.jpg" alt="Louvre" />
                                </div>
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[360px] transition duration-300 ease-in-out hover:scale-110 py-4 w-full" src="https://i.ibb.co/thYmDbV/30973227108def6c9676788db04cc1c5.jpg" alt="Louvre" />
                                </div>
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[240px] transition duration-300 ease-in-out hover:scale-110 pb-2 w-full" src="https://i.ibb.co/4MxBvhn/fc579b0bcf2496d34303d94dd73e744f.jpg" alt="Louvre" />
                                </div>
                                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img className="h-[440px] transition duration-300 ease-in-out hover:scale-110 pt-2 w-full" src="https://i.ibb.co/S51WSFm/cfc53251fbbcc0b5c8e4edad8e920017.jpg" alt="Louvre" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;