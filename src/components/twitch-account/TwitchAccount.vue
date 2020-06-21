<template>
    <ta-page :color="'tertiary'">
        <template v-slot:title>Buscar Cuenta</template>
        <template v-slot:content>
            <ion-searchbar animated debounce="1000" placeholder="Ingresa el nombre de la cuenta"></ion-searchbar>
        </template>
    </ta-page>
</template>
<script>
import TaPage from '../page/Page';

export default {
    
    components: {
        TaPage
    },

    
}
</script>