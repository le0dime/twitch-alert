<template>
  <div>
    <ion-header>
      <ion-toolbar :color="color">
        <ion-title>
            <slot name="title"></slot>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fulscreen>
      <slot name="content"></slot>
    </ion-content>
  </div>
</template>

<script>
export default {
    props: {
        color: String
    }
};
</script>

<style>
</style>