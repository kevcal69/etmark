<template>
    <div class="main">
        <div class="hero">
            <span class="title">Et.Mark</span> - a bad alternative to <span class="github">Github Gists</span>. Write your document now.
        </div>
        <div class="hr">

        </div>
        <div class="img">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home'
    }
</script>

<style scoped>
.main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.main .hero {
    font-family: 'Roboto Mono', monospace;
    width: 500px;
    text-align: center;
    font-size: 18px;
}
.main .hero .title {
    color: #efd67f;
}
.main .hr {
    margin: 50px 0px;
    width: 100%;
    border-bottom: 1px solid black;
}
.main .img {
    border: 1px solid #dedede;
    border-radius: 5px;
    background: url('https://i.imgur.com/LIN6avo.png');
    background-size: cover;
    width: 700px;
    height: 600px;
    opacity: .6;
}
.main .img:hover {
    opacity: 1;
}
</style>
