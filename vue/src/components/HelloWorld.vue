<template>
    <div>
        <p class="text-blue-500">Hello guys In Vue js App in a LARAVEL Main Dir</p>
        <h5>{{ user }}</h5>
    </div>
</template>

<script>
import { mapState } from  "vuex";
export default {

    computed: {
        ...mapState(['user'])
    }

}
</script>
