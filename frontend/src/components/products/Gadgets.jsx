import { Link } from "react-router-dom"
// 

const Gadgets = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
        <div className="container px-5  mx-auto flex flex-col md:flex-row
        gap-8">
            {/* Peripherals */}
            <div className="relative flex-1">
                <img src={gamingGear} className="
                w-full h-[300px] object-cover" alt="" />
                <div className="absolute bottom-8 left-8 bg-white
                bg-opacity-90 p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-">

                        Peripherals
                    </h2>
                    <Link to="collections/all?gadgets=Peripherals"
                    className="text-gray-900 underline">
                        Shop Now
                    </Link>
                </div>
            </div>
            {/* Display & Audio */}
            <div className="relative flex-1">
                <img src={gamingSetup} className="
                w-full h-[300px] object-cover" alt="" />
                <div className="absolute bottom-8 left-8 bg-white
                bg-opacity-90 p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-">

                        Display & Audio
                    </h2>
                    <Link to="collections/all?gadgets=display"
                    className="text-gray-900 underline">
                        Shop Now
                    </Link>
                </div>
            </div>
            {/* Aestetics */}
            <div className="relative flex-1">
                <img src={gamingSetup} className="
                w-full h-[300px] object-cover" alt="" />
                <div className="absolute bottom-8 left-8 bg-white
                bg-opacity-90 p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-">

                        Aestetics
                    </h2>
                    <Link to="collections/all?gadgets=Aestetics"
                    className="text-gray-900 underline">
                        Shop Now
                    </Link>
                </div>
            </div>
            {/* Consoles */}
            <div className="relative flex-1">
                <img src={gamingSetup} className="
                w-full h-[300px] object-cover" alt="" />
                <div className="absolute bottom-8 left-8 bg-white
                bg-opacity-90 p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-">

                        Consoles
                    </h2>
                    <Link to="collections/all?gadgets=Consoles"
                    className="text-gray-900 underline">
                        Shop Now
                    </Link>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Gadgets