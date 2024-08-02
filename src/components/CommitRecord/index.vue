<script setup lang="ts">
import {useData} from 'vitepress'
const { page } = useData()
const gitLogs = page.value.gitLogs
</script>

<template>
    修改历史:
    <div v-for="(item,index) in page.gitLogs" :key="item.commitHash" style="font-size: 12px;">
        <!-- {{ item.commitDate }} -->
        {{index+1}}、{{ item.message }}
    </div>
</template>