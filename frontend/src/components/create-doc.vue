<template>
    <div class="wrapper">
        <header class="header">
            <div class="form-control">
                <v-input placeholder="Enter Title" size="large" v-model="title"></v-input>
            </div>
        </header>
        <main class="main">
            <div class="editor-container">
                <div class="line-number">
                    <p class="line" v-for="i in linenumber" :key="i">{{ i }}</p>
                </div>
                <textarea class="editor" ref="editor" @input="inputText">{{ rawcontent }}</textarea>
                <div class="preview" ref="preview" v-show="showPreview">
                </div>
            </div>
        </main>
        <footer class="footer">
            <v-button icon="save" @click.native="saveDoc">SAVE</v-button>
            <v-button icon="desktop" @click.native="togglePreview">{{ buttonText }}</v-button>
        </footer>
    </div>
</template>

<script>
import marked from 'marked';
import autosize from 'autosize';

export default {
    name: 'create-doc',

    data() {
        return {
            linenumber: 1,
            title: '',
            rawcontent: '',
            showPreview: false
        }
    },

    computed: {
        buttonText() {
            return this.showPreview? 'EDIT' : 'PREVIEW';
        }
    },

    methods: {
        inputText(e) {
            this.rawcontent = e.target.value
        },

        togglePreview() {
            this.showPreview = !this.showPreview;
            this.$refs.preview.innerHTML = marked(this.rawcontent);
        },

        saveDoc() {
            this.$store.dispatch('saveDoc', {
                title: this.title,
                content: this.rawcontent
            }).then((data) => {
                let { data: redirect_url } = data;
                this.$router.push(`/${redirect_url}`)
            })
        }
    },

    watch: {
        rawcontent(oldval, newval) {
            // var a = this.$refs.editor.innerHTML;
            // this.linenumber = a.split('</div>').length || 1;
            var a = this.rawcontent.split('\n');
            this.linenumber = a.length || 1;
        }
    },

    mounted() {
        this.$nextTick(() => {
            autosize(this.$refs.editor);
        });
    }
}
</script>

<style scoped="true">
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
    background: #fff;
    padding: 20px;
    width: 100%;
}
.header .form-control {
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.wrapper .main {
    padding: 20px;
    min-height: 500px;
}
.editor-container {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    line-height: 1.5;
    width: 100%;
    display: flex;
    padding: 15px;
    position: relative;
}
.preview {
    position: absolute;
    background: #fff;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    padding: 20px 50px;
}
.editor-container .line-number {
    width: 30px;
    text-align: right;
}
.editor-container .line-number .line {
    margin: 0;
    padding: 0;
    height: 19px;
}
.editor-container .editor {
    flex-grow: 1;
    outline: none;
    line-height: 19px;
    padding-left: 15px;
    color: #000;
    border: none;
    resize: none;
    text-align: left;
}
.wrapper .footer {
    background: #fff;
    padding: 20px;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
