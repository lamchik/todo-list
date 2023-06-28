const STORAGE_TASKS_KEY = 'tasks'

const setData = (data: []) => localStorage.setItem(STORAGE_TASKS_KEY, JSON.stringify(data))

