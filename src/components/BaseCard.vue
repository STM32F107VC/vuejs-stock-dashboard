<template>
    <div class="card">
        <div><img :src="company.imgPath" :alt="company.name"> <span>{{ company.name }}</span></div>
        <div>Revenue Q1 2024</div>
        <div>
            <div>{{ company.imgPath }}</div>
            <div>
                <div>+1.00</div>
                <div>2.83%</div>
            </div>
        </div>
        <div>In Bill USD</div>
    </div>
</template>

<script>
export default {
    props: {
        company: {
            type: Object,
            required: true,
        },
    },
};

</script>

<style scoped>
.card {
    background-color: #011F35;
    border-radius: 16px;
    padding: 20px 32px;
    height: 200px;
    width: 200px;
    color: white;
    /** Testing color */
}
</style>
