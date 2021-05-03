<template>
    <commonTable 
    :data="[]"
    :titles="homeTableTitles"
    >
    </commonTable>
</template>

<script>
import commonTable from '../components/common/table/commonTable';
import titles from '../model/dummyHomeTableTitles';

export default {
    components: {
        commonTable
    },
    data() {
        return {
            homeTableTitles: titles
        }
    },
}
</script>

