<template>
    <div class="wrapper">
        <div class="content">
            <div class="title" @click="goTo($event, '/')">Et &#8226; Mark</div>
            <v-button class="button" type="primary" size="small" icon="file-text" @click.native="goTo($event, '/create-doc')">
                    CREATE DOC
            </v-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'the-header',

    methods: {
        goTo(e, loc) {
            this.$router.push(loc);
        }
    }
}
</script>

<style scoped="true">
.wrapper {
    padding: 15px 0px;
    border: 1px solid #dedede;
}
.wrapper .content {
    width: 90vw;
    max-width: 80rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    font-family: 'Open Sans Condensed', sans-serif;
}
.wrapper .title {
    font-size: 25px;
    cursor: pointer;
}
.wrapper .content .button {
    background-color: #3f5f90;
    border-color: #3f5f90;
    font-size: 12px;
    font-family: 'Roboto Mono', monospace;
}
.wrapper .content .button a {
    text-decoration: none;
    color: #fff;
}
</style>
