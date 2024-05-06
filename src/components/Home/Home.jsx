
const Home = () => {

    return (
        <section class="mb-40">

            <div
                class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://tecdn.b-cdn.net/img/new/textures/full/142.jpg')] h-[500px]">
            </div>

            <div class=" mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32">
                <div class="text-center">
                    <div class="block rounded-lg bg-[#071620] px-6 py-12  dark:bg-[#071620]   md:py-16 md:px-12 mt-[-170px] backdrop-blur-[30px]">

                        <div className="flex gap-4 text-xl px-40 font-black text-sky-600 whitespace-nowrap max-w-[357px]  ">

                            <div className="flex flex-col justify-center px-20 text-center ">
                                <div>Todos</div>
                                <div className="shrink-0 mt-2  bg-sky-600 rounded-sm" />
                            </div>
                            <button class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">nuevo</button>
                            <div className="justify-end items-start px-9 pt-1.5 pb-3.5">Usados</div>
                        </div>

                        <div className="flex gap-5 h-20 items-start mt-6 text-sm font-semibold text-white whitespace-nowrap max-md:flex-wrap  ">


                            <input className="flex w-96 h-14 gap-4 px-4 py-3 text-lg bg-gray-800 rounded  text-neutral-400 max-md:flex-wrap ">
                            </input>


                            <div className="flex justify-center">

                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="w-60 h-14 text-white rounded bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-blue-800" type="button">Marca <svg class="w-2.5 h-2.5 ms-36" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                                </button>


                                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="flex gap-0 justify-center ">
                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-56 h-14 text-white rounded bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-blue-800" type="button">Modelo <svg class="w-2.5 h-2.5 ms-32" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                                </button>
                                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        {/* flex gap-5 h-20 text-white items-start mt-0 max-md:flex-wrap */}

                        <div className="flex gap-5 h-20 items-start mt-6 text-sm font-semibold text-white whitespace-nowrap max-md:flex-wrap ">

                            <input className="flex w-90 gap-4 px-4 py-3 text-lg bg-gray-800 rounded text-neutral-400 max-md:flex-wrap ">
                            </input>

                            <div className="flex gap-4 justify-center max-md:flex-wrap">

                                <div className="flex flex-col text-white">
                                    <div className="text-lg font-semibold">Rango de precio</div>
                                    <div className="mt-1.5 text-sm font-medium">
                                        $.0 - $3,000,000.00
                                    </div>
                                </div>
                                <div className="flex gap-0 py-1.5 my-auto">
                                    <input id="default-range" type="range" value="50" class="w-80 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                                </div>
                            </div>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  text-xl px-10 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>



                        </div>


                    </div>


                </div>
            </div>

        </section>

    );
}
export default Home;
