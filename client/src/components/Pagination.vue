<script>
export default {
    name: 'Pagination',
    props: {
        maxVisibleButtons: {
            type: Number,
            required: false,
            default: 3
        },
        totalPages: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
    },
    computed: {
        startPage() {
            if (this.currentPage === 1) {
                return 1;
            }

            if (this.currentPage === this.totalPages) { 
                return this.totalPages - this.maxVisibleButtons + 1;
            }

            return this.currentPage - 1;
        },
        endPage() {
            return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        },
        pages() {
            const range = [];

            for (let i = this.startPage; i <= this.endPage; i+= 1 ) {
                range.push({
                    name: i,
                    isDisabled: i === this.currentPage 
                });
            }

            return range;
        },
        isInFirstPage() {
            return this.currentPage === 1;
        },
        isInLastPage() {
            return this.currentPage === this.totalPages;
        },
    },
    methods: {
        onClickFirstPage() {
            this.$emit('pagechanged', 1);
        },
        onClickPreviousPage() {
            this.$emit('pagechanged', this.currentPage - 1);
        },
        onClickPage(page) {
            this.$emit('pagechanged', page);
        },
        onClickNextPage() {
            this.$emit('pagechanged', this.currentPage + 1);
        },
        onClickLastPage() {
            this.$emit('pagechanged', this.totalPages);
        },
        isPageActive(page) {
            return this.currentPage === page;
        },
    }
}
</script>

<template>
    <div class="pagination">
        <ul>
            <li>
                <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
                    First
                </button>
            </li>
            <li>
                <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
                    Previous
                </button>
            </li>
            <li v-for="page in pages" :key="page.name">
                <button type="button" @click="onClickPage(page.name)" :disabled="page.isDisabled">
                    {{ page.name }}
                </button>
            </li>
            <li>
                <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
                    Next
                </button>
            </li>
            <li>
                <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
                    Last
                </button>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>
