<template>
    <div>
        <div class="wrapper">
            <header class="header">
                <h3 class="title-obj"><v-icon type="file" class="icon"></v-icon>{{ doc_title }}</h3>
            </header>
            <main class="main">
                <div v-html="docDisplay" class="markdown-body content">
                </div>
            </main>
        </div>
        <footer class="footer">

        </footer>
    </div>

</template>

<script>
import store from '@/store';
import { mapState } from 'vuex';
import marked from 'marked';

export default {
    name: 'view-doc',

    props: ['short_url'],

    computed: {
        ...mapState(['doc_raw_content', 'doc_title']),

        docDisplay() {
            console.log(this.doc_raw_content)
            return marked(this.doc_raw_content)
        }
    },

    beforeRouteEnter (to, from, next) {
        store.dispatch('fetchContent', to.params.short_url)
            .then(_ => next())
            .catch(_ => next('/'));
    }
}
</script>

<style scoped>
.wrapper {
    /*-webkit-box-shadow: 0px 5px 8px -5px  #e4e2e9;
    -moz-box-shadow: 0px 5px 8px -5px  #e4e2e9;
    box-shadow: 0px 5px 8px -5px  #e4e2e9;*/
    width: 50vw;
    max-width: 80rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: 'Roboto Mono', monospace;
}
.wrapper .header {
    display: flex;
    border-bottom: 1px solid #e4e2e9;
    opacity: .6;
}
.wrapper .header .icon {
    margin: 0px 15px;
}
.wrapper .main {
    padding: 20px;
}
.wrapper .header .title-obj {
    /*writing-mode: vertical-rl;*/
    /*transform: rotate(180deg);*/
    text-align: right;
    padding: 10px;
}
.wrapper .header .icon {
    margin: 10px;
}
.content {
    width: 100%;
}
.footer {
    width: 100%;
    height: 50px;
    background-color: ;
}
</style>
