<template>
    <div class="my-2 mx-2 grid grid-cols-2 grid-flow-row">
        <div>
            <h2 class="text-2xl font-bold text-start m-2 ">
                Produk
            </h2>
        </div>
        <div class="form-control justify-self-end">
            <div class="input-group">
                <input type="text" placeholder="Search…" class="input input-bordered" />
                <button class="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div v-if="!isLoading" class="sm:m-4">
        <div class="grid grid-cols-2 sm:grid-cols-4 grid-flow-row gap-4 px-2">
            <slot>
                <div class="card w-auto bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Shoes!
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Fashion</div>
                            <div class="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </slot>
            <slot>
                <div class="card w-auto bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Shoes!
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Fashion</div>
                            <div class="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </slot>
            <slot>
                <div class="card w-auto bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Shoes!
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Fashion</div>
                            <div class="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </slot>
            <slot>
                <div class="card w-auto bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Shoes!
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Fashion</div>
                            <div class="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </slot>
        </div>
        <!-- <app-list>
            <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>
        </app-list> -->
    </div>
    <div v-if="isLoading">
        <p class="text-center">Loading ...
        </p>
    </div>
</template>

<script>
import List from "../components/List.vue";
import ProductCard from "../components/ProductCard.vue";
export default {
    name: "Home",
    components: {
        "app-list": List,
        ProductCard
    },
    data() {
        return {
            isLoading: false,
        };
    }
};
</script>

<style>
</style>
