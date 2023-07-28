<template>
    <div class="input">
        <input :value="modelValue" :placeholder="placeholder" :type="type" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" :class="{ 'not-empty' : modelValue.length }">
        <label v-if="label">{{ label }}</label>
    </div>
</template>

<script setup lang="ts">

defineEmits(['update:modelValue']);

defineProps({
    type: {
        type: String,
        default: 'text'
    },
    label: {
        type: String
    },
    placeholder: {
        type: String
    },
    modelValue: {
        type: String,
        default: ''
    }
});
</script>

<style lang="scss" scoped>
.input {
    position: relative;
    width: 100%;

    label {
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        pointer-events: none;
        transition: 0.2s all ease-in-out;
        font-weight: 500;
    }
    
    input {
        border-radius: 25px;
        border: 2px solid rgba(0, 0, 0, 0.40);
        background: #272E36;
        box-shadow: -3px -3px 6px 0px rgba(174, 174, 192, 0.40) inset, 3px 3px 6px 0px rgba(0, 0, 0, 0.40) inset;
        font-size: 18px;
        padding: 10px 25px;
        color: #fff;
        width: 100%;
        outline: none;
        transition: 0.2s all ease-in-out;

        &:hover {
            border-color: rgba(255, 255, 255, 0.20);
        }

        &:focus,
        &.not-empty {
            border-color: $accent-color;

            & + label {
                top: -25px;
                transform: none;
                color: $accent-color;
            }
        }
    }
}
</style>