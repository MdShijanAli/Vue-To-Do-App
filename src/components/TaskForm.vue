<template>
  <div v-show="modalStatus">
    <slot name="addContent">
      
    </slot>
    <!-- <Button @click="closeModel">close</Button> -->
  </div>
</template>
  
<script setup>
const props = defineProps(['modalStatus']);


const emit = defineEmits(["close"]);
const closeModel = () =>{
emit('close');
}

</script>
  