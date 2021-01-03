<template>
<!-- closeModal is a custom event -->
<!-- click.self means only if the backdrop is clicked and NOT when any child elements are clicked -->
    <div class="backdrop" @click.self='closeModal'>
        <!-- checks theme prop. Since it is sale then add the class sale -->
        <div class="modal" :class="{sale: theme === 'sale'}">
            <!-- <h1>{{header}}</h1>
            <p>{{text}}</p> -->
            <slot>default content. this text will only show up if there isnt a slot sent to this component (not named)</slot>
            <div class="actions">
                <slot name='links'></slot>
            </div>
        </div>
    </div>
</template>

<script>
// how to accepts props from parent components
export default{
    // props:['header', 'text', 'theme'],
    props:['theme'],
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
.modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
}
.modal.sale{
    background: crimson;
    color: #fff
}
.modal.sale h1{
    color: #fff
}
.modal.sale .actions {
   color: white;
 }
 .modal.sale .actions a {
    color: white;
 }
</style>