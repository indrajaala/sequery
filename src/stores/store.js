import {ref, computed} from "vue";

const rows = ref([]);
const columns = ref([]);

const loading = ref(false)

function resetRowsAndColumns() {
    rows.value = [];
    columns.value = [];
}

function seedUsers() {
    resetRowsAndColumns();
    loading.value = true;
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => {
            columns.value = Object.keys(data.users[0]).map((user) => {
                return {name: user, label: user, field: user, align: 'left'}
            })
            rows.value = data.users;
            loading.value = false
        });
}

function seedTodos() {
    resetRowsAndColumns();
    loading.value = true;
    fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(data => {
            columns.value = Object.keys(data.todos[0]).map((todo) => {
                return {name: todo, label: todo, field: todo, align: 'left'}
            })
            rows.value = data.todos;
            loading.value = false

        });
}

function seedTreats() {
    resetRowsAndColumns();
    loading.value = true

    const columnsData = [
        {
            name: 'index',
            label: '#',
            field: 'index'
        },
        {
            name: 'name',
            required: true,
            label: 'Dessert (100g serving)',
            align: 'left',
            field: row => row.name,
            format: val => `${val}`,
            sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
    ]

    const seed = [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            sodium: 87,
            calcium: '14%',
            iron: '1%'
        },
        {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            sodium: 129,
            calcium: '8%',
            iron: '1%'
        },
        {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            sodium: 337,
            calcium: '6%',
            iron: '7%'
        },
        {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            sodium: 413,
            calcium: '3%',
            iron: '8%'
        },
        {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            sodium: 327,
            calcium: '7%',
            iron: '16%'
        },
        {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            sodium: 50,
            calcium: '0%',
            iron: '0%'
        },
        {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            sodium: 38,
            calcium: '0%',
            iron: '2%'
        },
        {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            sodium: 562,
            calcium: '0%',
            iron: '45%'
        },
        {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            sodium: 326,
            calcium: '2%',
            iron: '22%'
        },
        {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            sodium: 54,
            calcium: '12%',
            iron: '6%'
        }
    ]

// we generate lots of rows here
    let rowsData = []
    for (let i = 0; i < 1000; i++) {
        rowsData = rowsData.concat(seed.slice(0).map(r => ({ ...r })))
    }
    rowsData.forEach((row, index) => {
        row.index = index
    })
    columns.value = columnsData;
    rows.value = rowsData;
    loading.value = false

}

export {rows, columns, seedUsers, seedTodos, seedTreats,loading, resetRowsAndColumns}
