<template>
    <div id="to-do-list">
        <input type="text" placeholder="please enter here..." v-model="item_text">
        <button @click="add_item(item_text)">Add</button>
        <ol>
            <li v-for="(item, index) in items" :key="item">
                <span v-html="item">{{ item }}</span>
                <button @click="remove_item(index)">X</button>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item_text: null
        }
    },
    computed: {
        items(){
            return this.$store.state.items;
        }
    },
    methods: {
        add_item: function(item_text){
            this.$store.dispatch('add_item',item_text);
            this.item_text = "";
        },
        remove_item: function(index){
            this.$store.dispatch('remove_item',index);
        }
    }
}
</script>

<style>

</style>