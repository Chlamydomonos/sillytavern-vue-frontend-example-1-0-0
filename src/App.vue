<template>
    <div class="test-div">test</div>
    <div class="with-frame">
        流式传输的消息：
        <div v-html="renderMessage(rawMessage)"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';

const rawMessage = ref<string>(inject('initialMessage', ''));
const eventEmitter = inject('frontendEventEmitter', undefined as any);
const { renderMessage } = inject('wrapperApi', undefined as any);
eventEmitter?.on('messageUpdated', (message: string) => {
    rawMessage.value = message;
});
</script>

<style scoped>
.test-div {
    color: red;
}

.with-frame {
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
}
</style>
