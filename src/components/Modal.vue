<template>
<!-- closeModal is a custom event -->
<!-- click.self means only if the backdrop is clicked and NOT when any child elements are clicked -->
    <div class="backdrop" @click.self='closeModal'>
        <!-- checks theme prop. Since it is sale then add the class sale -->
        <div class="modal" :class="{sale: theme === 'sale'}">
            <h1>{{header}}</h1>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
// how to accepts props from parent components
export default{
    props:['header', 'text', 'theme'],
    methods:{
        // this method can now be used in the parent component because of $emit
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
/* styles will only be applied to this component because of the scoped attribute in the style tag */
.modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: #fff;
    border-radius: 10px;
}

.backdrop{
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}

h1{
    color: #03cfb4;
    border: none;
    padding: 0;
}
.modal.sale{
    background: crimson;
    color: #fff
}
.modal.sale h1{
    color: #fff
}
</style>