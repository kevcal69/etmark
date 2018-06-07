<template>
    <div id="app">
        <Header />
        <main class="main">
            <router-view />
        </main>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
        Header: require('./components/the-header.vue').default,
        Footer: require('./components/the-footer.vue').default
    }
}
</script>

<style>
.main {
    height: 100%;
    width: 100%;
    display: flex;
    padding-top: 50px;
    justify-content: space-around;
}
</style>
