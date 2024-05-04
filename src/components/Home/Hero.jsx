
const Home = () => {

    return (
        <div className="flex flex-col pb-20 bg-[#0B0C10]">
            {/* <img
                loading="lazy"
                srcSet="https://i.ibb.co/MkfF7rC/mustan.png"
                className="object-cover absolute inset-0 size-full"
            /> */}

            <div className="flex flex-col items-center px-16 pt-20 w-full max-md:px-5 max-md:max-w-full bg-[#0B0C10]">
                <div className="flex z-10 flex-col mt-20 mb-0 w-full max-w-[1040px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">

                    <div className="text-3xl font-semibold text-white max-md:max-w-full max-md:text-4xl">
                        Encuentra el coche de tus sueños
                    </div>
                    <div className="mt-7 text-lq font-semibold text-white max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    {/* Aqui va el scrll */}
                    <div className="flex gap-5 justify-between self-center mt-20 max-md:mt-10">
                        <div className="shrink-0 w-4 h-4 bg-sky-600 rounded-full" />
                        <div className="shrink-0 w-4 h-4 bg-sky-600 rounded-full" />
                        <div className="shrink-0 w-4 h-4 bg-sky-600 rounded-full" />
                        <div className="shrink-0 w-4 h-4 bg-sky-600 rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center p-5 mt-9 bg-gray-900 rounded max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-0 self-center max-w-full text-xl font-black text-sky-600 whitespace-nowrap w-[357px]">
                            <button className="flex flex-col justify-center text-center">
                                <div>Todos</div>
                                <div className="shrink-0 mt-2 h-0.5 bg-sky-600 rounded-sm" />
                            </button>
                            <button className="justify-end items-start px-10 pt-1.5 pb-3.5 max-md:pl-5">
                                Nuevos
                            </button>
                            <button className="justify-end items-start px-9 pt-1.5 pb-3.5 max-md:pl-5">
                                Usados
                            </button>
                        </div>
                        <div className="flex gap-5  items-start mt-6 text-sm font-semibold text-white whitespace-nowrap max-md:flex-wrap">
                            {/* <div className="flex gap-4 px-4 py-3 text-lg bg-gray-800 rounded text-neutral-400 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8be3786825b80e640bbc5b151562d09779c0d40983c355882d86823150abde8?"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <div className="flex-1">Buscar</div>
                  </div> */}


                            <label for="default-search" class="mb-4 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" class="block w-4/5 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Carros" required />
                                {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                            </div>

                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="flex gap-0 justify-center px-4 py-3 bg-gray-800 rounded">
                                <div className="flex-1 my-auto">Modelo</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/246c30e83f954f8197e4bd33f668d40cf778517d27c1ae4f7411edeeecb42dae?"
                                    className="shrink-0 w-6 aspect-square"
                                />

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
                            </button>



                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="flex gap-0 justify-center px-5 py-3 bg-gray-800 rounded">
                                <div className="flex-1 my-auto">Marca</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/246c30e83f954f8197e4bd33f668d40cf778517d27c1ae4f7411edeeecb42dae?"
                                    className="shrink-0 w-6 aspect-square"
                                />

                                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Honda</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Toyota</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lexus</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tesla</a>
                                        </li>
                                    </ul>
                                </div>
                            </button>
                        </div>

                        <div className="flex gap-5 justify-between items-start mt-4 max-md:flex-wrap">

                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ubicación" required />
                                {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                            </div>



                            <div className="flex gap-4 justify-center py-1 max-md:flex-wrap">
                                <div className="flex flex-col text-white">
                                    <div className="text-lg font-semibold">Rango precio</div>
                                    <div className="mt-3 text-sm font-medium">
                                        $.0 - $3,000,000.00
                                    </div>

                                    <input id="minmax-range" type="range" min="0" max="10" value="5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                                </div>
                            </div>
                            <button className="justify-center px-16 py-4 text-base font-semibold text-center text-white whitespace-nowrap bg-sky-600 rounded max-md:px-5">
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
