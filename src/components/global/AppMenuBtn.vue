<template>
    <button class="app-menu-btn flex-center w-10 h-10 relative">
        <svg class="burger" version="1.1" viewBox="0 0 100 100">
            <path class="line line1" d="M 30,65 H 70" />
            <path
                class="line line2"
                d="M 70,50 H 30 C 30,50 18.644068,50.320751 18.644068,36.016949 C 18.644068,21.712696 24.988973,6.5812347 38.79661,11.016949 C 52.604247,15.452663 46.423729,62.711864 46.423729,62.711864 L 50.423729,49.152542 L 50.423729,16.101695"
            />
            <path
                class="line line3"
                d="M 30,35 H 70 C 70,35 80.084746,36.737688 80.084746,25.423729 C 80.084746,19.599612 75.882239,9.3123528 64.711864,13.559322 C 53.541489,17.806291 54.423729,62.711864 54.423729,62.711864 L 50.423729,49.152542 V 16.101695"
            />
        </svg>
        <svg class="x" version="1.1" viewBox="0 0 100 100">
            <path class="line" d="M 34,32 L 66,68" />
            <path class="line" d="M 66,32 L 34,68" />
        </svg>
    </button>
</template>

<script lang="ts" setup></script>

<style>
    .app-menu-btn svg {
        @apply absolute w-full h-full transition-all duration-300 ease-in-out;
        fill: none;
        stroke: #121212;
        stroke-width: 5;
        stroke-linecap: round;
        transition: all 0.3s ease-in-out;
    }
    .app-menu-btn.active svg {
        stroke: #fff;
    }

    .app-menu-btn svg.x {
        @apply w-full h-full;
        opacity: 0;
        transform: scale(0);
    }

    .app-menu-btn.active svg.burger {
        @apply w-full h-full;
        opacity: 0;
        transform: scale(0.5);
    }

    .app-menu-btn.active svg.x {
        opacity: 1;
        transform: scale(1);
    }

    .app-menu-btn .line {
        transition: all 0.3s ease-in-out;
    }

    .app-menu-btn .line1 {
        stroke-dasharray: 40 139;
        stroke-dashoffset: 0;
    }

    .app-menu-btn .line2 {
        stroke-dasharray: 40 180;
        stroke-dashoffset: 0;
    }

    .app-menu-btn .line3 {
        stroke-dasharray: 40 139;
        stroke-dashoffset: 0;
    }

    .app-menu-btn.active .line1 {
        stroke-dashoffset: -98;
    }

    .app-menu-btn.active .line2 {
        stroke-dashoffset: -180;
    }

    .app-menu-btn.active .line3 {
        stroke-dashoffset: -98;
    }
</style>
