<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.button {
    background: $accent-color;
    box-shadow: -3px -3px 6px 0px rgba(174, 174, 192, 0.40), 3px 3px 6px 0px rgba(0, 0, 0, 0.40);
    border: none;
    color: #fff;
    font-size: 24px;
    padding: 10px 50px;
    border-radius: 20px;
    cursor: pointer;
    border: 2px solid transparent;

    &:hover {
        box-shadow: -3px -3px 6px 0px rgba(174, 174, 192, 0.20) inset, 3px 3px 6px 0px rgba(0, 0, 0, 0.40) inset;
        border: 2px solid rgba(0, 0, 0, 0.40);
    }
}
</style>