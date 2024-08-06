<template>
    <div :class="STATUS_CODE[status]" id="animate-container">
        <slot></slot>
    </div>
</template>

<script setup>
const STATUS_CODE = {
   in: 'in',
   out: 'out'
}
defineProps({
    status: String
})

</script>

<style scoped>
#animate-container{
    background-color: #fff;
}
#animate-container.in{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    height: 42px;
    width: 42px;
    border-radius: 50px;
    background-color: transparent;
    box-shadow: var(--vp-shadow-1);
    cursor: pointer;
    transition: all 1s;
}
#animate-container.out{
    width: 150px;
    height: 300px;

}
</style>