<x-layouts.frontend>

    <div class="bg-white">
        <header class="fixed top-0 z-40 w-full bg-white" x-data="{ mobileMenu: false }">

            {{-- Navigation --}}
            <nav class="relative z-10 flex items-center justify-between px-6 py-4 mx-auto max-w-7xl xl:px-8" aria-label="Global">
                <div class="flex items-center flex-1">
                    <div class="flex items-center justify-between w-full lg:w-auto">
                        <a href="#">
                            <x-logo iconSize="w-6 h-6" />
                        </a>
                        <div class="flex items-center -mr-3 lg:hidden">
                            <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-primary" aria-expanded="false" x-show="!mobileMenu" x-on:click="mobileMenu = true">
                                <span class="sr-only">Open main menu</span>
                                <!-- Heroicon name: outline/menu -->
                                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-primary" x-show="mobileMenu" x-on:click="mobileMenu = false">
                                <span class="sr-only">Close menu</span>
                                <!-- Heroicon name: outline/x -->
                                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="hidden space-x-10 lg:flex lg:ml-20">
                        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Properties</a>

                        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Get in touch</a>
                    </div>
                </div>
                <div class="hidden lg:flex lg:items-center lg:space-x-6">
                    <a href="{{ route('dashboard') }}" class="px-6 py-2 text-base font-medium text-white border border-transparent rounded-md bg-primary hover:bg-primary-dark"> Guest Portal </a>
                </div>
            </nav>

            {{-- Mobile Menu --}}
            <nav class="absolute inset-x-0 top-[80px] h-screen origin-top bg-black/75 lg:hidden" x-show="mobileMenu" :class="mobileMenu ? '' : ''" x-transition:enter="transition-colors ease-out duration-500" x-transition:enter-start="bg-black/0" x-transition:enter-end="bg-black/75" x-transition:leave="transition-colors ease-in duration-500" x-transition:leave-start="bg-black/75" x-transition:leave-end="bg-black/0">
                <div class="overflow-hidden" x-on:click.away="mobileMenu = false">
                    <div class="p-6 space-y-6 bg-gray-50 rounded-b-xl" x-show="mobileMenu" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="-translate-y-full" x-transition:enter-end="translate-y-0" x-transition:leave="transition ease-in duration-300" x-transition:leave-start="translate-y-0" x-transition:leave-end="-translate-y-full">
                        <ul class="space-y-4">
                            <li>
                                <a href="#" class="text-xl font-medium text-gray-900">Properties</a>
                            </li>
                            <li>
                                <a href="#" class="text-xl font-medium text-gray-900">Contact us</a>
                            </li>
                            <hr class="py-1">
                            <li>
                                <a href="{{ route('dashboard') }}" class="block w-full px-4 py-2 font-medium text-center text-white border border-transparent rounded-md shadow bg-primary hover:bg-primary-dark">Guest Portal</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        {{-- Main --}}
        <main class="pt-[75px] overflow-hidden">

            {{-- property search --}}
            <section class="flex items-center justify-center w-full bg-center bg-cover h-view-minus-navbar" style="background-image: url('https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8')">
                <div class="frontend-container">
                    <div class="max-w-2xl text-center rounded-lg panel bg-white/90">
                        <div>
                            <h1 class="text-2xl font-semibold text-gray-800 uppercase">Book your perfect family vacation</h1>
                            <span class="text-muted">Search through our properties below</span>
                        </div>
                        <div class="flex flex-col gap-5">
                            <input type="text" name="" id="" class="text-center bg-white input" placeholder="Search the property name or location">
                            <button class="button">Search</button>
                        </div>
                    </div>
                </div>
            </section>

            {{-- Newsletter --}}
            <section class="frontend-section">
                <div class="bg-white">
                    <div class="relative sm:py-16">
                        <div aria-hidden="true" class="hidden sm:block">
                            <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-200 rounded-r-3xl"></div>
                            <svg class="absolute -ml-3 top-8 left-1/2" width="404" height="392" fill="none" viewBox="0 0 404 392">
                                <defs>
                                    <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
                            </svg>
                        </div>
                        <div class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                            <div class="relative px-6 py-10 overflow-hidden shadow-xl bg-primary rounded-2xl sm:px-12 sm:py-20">
                                <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                                    <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                                        <path class="text-primary-dark text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
                                        <path class="text-primary-dark text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
                                    </svg>
                                </div>
                                <div class="relative">
                                    <div class="sm:text-center">
                                        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Sign up for our newsletter</h2>
                                        <p class="max-w-2xl mx-auto mt-6 text-lg text-indigo-200">We occasionally share information about new properties, discounted rates, or important travel tips to our guests. If you would like to stay in the loop, join our newsletter!</p>
                                    </div>
                                    <form action="#" class="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                                        <div class="flex-1 min-w-0">
                                            <label for="cta-email" class="sr-only">Email address</label>
                                            <input id="cta-email" type="email" class="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary" placeholder="Enter your email">
                                        </div>
                                        <div class="mt-4 sm:mt-0 sm:ml-3">
                                            <button type="submit" class="block w-full px-5 py-3 text-base font-medium text-white border border-transparent rounded-md shadow bg-primary-light hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary sm:px-10">Notify me</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {{-- meet your hosts --}}
            <section class="frontend-section">
                <div class="frontend-section-heading">
                    <h1 class="mb-2 text-4xl font-bold text-gray-800">Meet your hosts</h1>
                    <span class="text-lg text-muted">Let us introduce ourselves</span>
                </div>

                <div class="mt-20 bg-white">
                    <div class="pb-16 bg-primary lg:pb-0 lg:z-10 lg:relative">
                        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                            <div class="relative lg:-my-8">
                                <div aria-hidden="true" class="absolute inset-x-0 top-0 bg-white h-1/2 lg:hidden"></div>
                                <div class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                                    <div class="overflow-hidden shadow-xl aspect-w-10 aspect-h-6 rounded-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                        <img class="object-cover lg:h-full lg:w-full" src="https://i.imgur.com/Ikrh2kh.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                                <div class="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                                    <blockquote class="font-medium text-white">
                                        <div>
                                            <svg class="w-12 h-12 opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                            </svg>
                                            <p class="mt-6 text-2xl">Creating new memories is very important to us, so our commitment is to ensure you will do the same with your family when you stay with us!</p>
                                            {{-- <p class="mt-6 text-2xl font-medium text-white">Our goal is to ensure that your stay with us is memorable, because making memories with family is very important to us.</p> --}}
                                        </div>
                                        <footer class="mt-6 text-lg">
                                            <p class="">Rob & Erin Serrate</p>
                                            <p class="text-primary-muted">{{ config('app.name') }}</p>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {{-- Properties --}}
            <section class="frontend-section">
                <div class="frontend-section-heading">
                    <h1 class="mb-2 text-4xl font-bold text-gray-800">Our Properties</h1>
                    <span class="text-lg text-muted">Check out some of our properties</span>
                </div>

                <div class="grid grid-cols-1">

                </div>
            </section>




        </main>

        <footer class="bg-gray-800 mt-72" aria-labelledby="footer-heading">
            <h2 id="footer-heading" class="sr-only">Footer</h2>
            <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
                <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div class="space-y-8 xl:col-span-1">
                        <img class="h-10" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=warmGray&shade=400" alt="Company name">
                        <p class="text-base text-gray-400">Making the world a better place through constructing elegant hierarchies.</p>
                        <div class="flex space-x-6">
                            <a href="#" class="text-gray-400 hover:text-gray-300">
                                <span class="sr-only">Facebook</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                                </svg>
                            </a>

                            <a href="#" class="text-gray-400 hover:text-gray-300">
                                <span class="sr-only">Instagram</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                                </svg>
                            </a>

                            <a href="#" class="text-gray-400 hover:text-gray-300">
                                <span class="sr-only">Twitter</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>

                            <a href="#" class="text-gray-400 hover:text-gray-300">
                                <span class="sr-only">GitHub</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                                </svg>
                            </a>

                            <a href="#" class="text-gray-400 hover:text-gray-300">
                                <span class="sr-only">Dribbble</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 class="text-sm font-semibold tracking-wider text-gray-200 uppercase">Solutions</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> Marketing </a>
                                    </li>

                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> Analytics </a>
                                    </li>

                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> Commerce </a>
                                    </li>

                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> Insights </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-12 md:mt-0">
                                <h3 class="text-sm font-semibold tracking-wider text-gray-200 uppercase">Support</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> Pricing </a>
                                    </li>

                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> Documentation </a>
                                    </li>

                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> Guides </a>
                                    </li>

                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> API Status </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 class="text-sm font-semibold tracking-wider text-gray-200 uppercase">Company</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> About </a>
                                    </li>

                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> Blog </a>
                                    </li>

                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> Jobs </a>
                                    </li>

                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> Press </a>
                                    </li>

                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> Partners </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-12 md:mt-0">
                                <h3 class="text-sm font-semibold tracking-wider text-gray-200 uppercase">Legal</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> Claim </a>
                                    </li>

                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> Privacy </a>
                                    </li>

                                    <li>
                                        <a href="#" class="text-base text-gray-400 hover:text-gray-300"> Terms </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-8 mt-12 border-t border-gray-700">
                    <p class="text-base text-gray-400 xl:text-center">&copy; 2020 Workflow, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>


</x-layouts.frontend>
