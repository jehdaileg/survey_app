<template>
    <div>
        <h5>Hello guys In Vue js App in a LARAVEL Main Dir</h5>
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
