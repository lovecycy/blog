<script setup>
import { useRouter } from 'vitepress'
const props = defineProps({
    to: String
})
const { go } = useRouter()
go(props.to)
</script>