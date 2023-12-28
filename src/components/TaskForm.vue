<template>
  <div v-show="modalStatus">
    <slot name="addContent">
      
    </slot>
    
  </div>
</template>
  
<script setup>
const props = defineProps(['modalStatus']);


const emit = defineEmits(["close"]);


</script>
  