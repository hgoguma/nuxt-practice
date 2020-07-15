<template>
<div class="contents">

    <AppInput :icon="icon" :submit="submit" />
    <div class="row">
        <div class="col-6">

        <h3>Draggable</h3>

        <draggable
            :list="list"
            :disabled="!enabled"
            class="list-group"
            ghost-class="ghost"
            :move="checkMove"
            @start="dragging = true"
            @end="dragging = false"
        >
            <div
            class="list-group-item"
            v-for="element in list"
            :key="element.name"
            >
            {{ element.name }}
            </div>
        </draggable>
        </div>
    </div>


</div>
</template>

<script>
import draggable from "vuedraggable";
import AppInput from '@/components/common/AppInput'

let id = 1;

export default {
    components: {
        draggable,
        AppInput
    },
    data() {
        return {
            icon: 'plus',
            enabled: true,
            list: [
                { name: "John", id: 0 },
                { name: "Joao", id: 1 },
                { name: "Jean", id: 2 }
            ],
            dragging: false
        };
    },
    computed: {
        // draggingInfo() {
        //     return this.dragging ? "under drag" : "";
        // }
    },
    methods: {
        submit(inputVal) {
            console.log('submit!', inputVal);
            this.list.push({name: inputVal, id: 3});
        },
        checkMove: function(e) {
            window.console.log("Future index: " + e.draggedContext.futureIndex);
        }
    }
};
</script>

<style scoped>
    @import '@/assets/style.css';

    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
    }
</style>