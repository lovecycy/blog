<script setup lang="ts">
import { useData } from 'vitepress'
import { Vue } from 'vitepress/vue-demi'
const { ref } = Vue
const { page, isDark } = useData()
const gitLogs = page.value.gitLogs
const showCommitHistory = ref(false)
</script>

<template>
    <div class="aside-ads-before" :class="{ dark: isDark }" @click="showCommitHistory = !showCommitHistory">
        <div class="sticky-func-icon">
            <svg t="1722679698979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2374" width="20" height="20">
                <path
                    d="M879.5 320v462.3l-32 53.3-32-53.3V320h64m64-64h-192v544l96 160 96-160V256zM943.5 64h-192v128h192V64zM655.5 287h-543c-17.7 0-32-14.3-32-32s14.3-32 32-32h543c17.7 0 32 14.3 32 32s-14.3 32-32 32zM534.8 544H112.5c-17.7 0-32-14.3-32-32s14.3-32 32-32h422.3c17.7 0 32 14.3 32 32s-14.3 32-32 32zM474.5 799h-362c-17.7 0-32-14.3-32-32s14.3-32 32-32h362c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                    p-id="2375"></path>
            </svg>
        </div>
        <Transition name="bloom">
            <div class="commit-history" v-if="showCommitHistory">
                修改历史:
                <div v-for="(item, index) in page.gitLogs" :key="item.commitHash" style="font-size: 12px;">
                    {{ index + 1 }}、{{ item.message }}
                    {{ item.commitDate }}
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.aside-ads-before {
    position: relative;
    width: 100%;
    height: 200px;
}

.sticky-func-icon {
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
}

.sticky-func-icon:hover {
    box-shadow: var(--vp-shadow-2);
}

.sticky-func-icon path {
    fill: var(--vp-c-text-2);
    transition: fill 0.5s;
}

.sticky-func-icon:hover path,
.sticky-func-icon.active path {
    fill: var(--vp-c-text-1);
    transition: fill 0.25s;
}


.commit-history {
    position: absolute;
    top: 40px;
    left: 0px;
    height: 100px;
    background: #FFF;
}
</style>