
<template>
    <div>
        <navbar></navbar>
        <div class="px-24">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import navbar from '../components/navbar.vue';
    export default{
        name: "AppLayout",
        components: {
            navbar
        }
    }
</script>