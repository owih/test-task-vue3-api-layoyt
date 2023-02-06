import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import useTableApi from '../api/useTableApi.js';

export const useTableStore = defineStore('table', () => {
    const table = reactive([]);
    const pending = ref(false);
    const getTableFromApiToStore = async () => {
        pending.value = true;
        try {
            const response = await useTableApi();
            if (response.ok) {
                table.value = await response.json();
            }
        } catch (e) {
            console.log(e);
        } finally {
            pending.value = false;
        }
    };

    return { table, pending, getTableFromApiToStore };
});