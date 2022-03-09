<template>
    <div>
        <nav class="bg-gray-900 text-white">
            <div
                class="container mx-auto px-6 py-4 flex justify-between items-center"
            >
                <a class="font-bold text-2xl lg:text-2xl" href="#"> Boost Jehd</a>
                <div class="block lg:hidden">
                    <button
                        class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"
                    >
                        <svg
                            class="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path
                                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                            />
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:block">
                    <ul class="inline-flex">
                        <li><a class="px-4 font-bold hover:text-white cursor-pointer" href="/">Home</a></li>
                        <li>
                            <a href="/posts" class="px-4 hover:text-white cursor-pointer"
                                >Posts</a>
                            >
                        </li>

                        <li>
                            <a href="/statPost" class="px-4 hover:text-white cursor-pointer">Statistics</a>
                        </li>
                        <li>
                            <a class="px-4 hover:text-white cursor-pointer" href="#"
                                >Contact</a
                            >
                        </li>

                        <li>
                             <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    <router-view></router-view>

    </div>
</template>

<script>
export default {


}
</script>
