<template>
    <div class="animate-container">
        <div :class="STATUS_CODE[status]" class="animate-inner">
            <slot></slot>
        </div>
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
.animate-container {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
}

.animate-inner.in {
    height: 42px;
    width: 42px;
    border-radius: 50px;
    transition: width .2s,
        height .2s,
        border-radius .1s ease-in;
}

.animate-inner.out {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    transition: width .2s,
        height .2s,
        border-radius .1s ease-out;
}
</style>