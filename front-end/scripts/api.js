const API_URL = 'http://localhost:8080/api/tasks';

// GET task
export async function getTasks() {
    const response = await fetch(API_URL);
    if(!response.ok) throw new Error('failed to get task');
    return await response.json();
}

// POST task
export async function postTask(taskData) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
    });
    if(!response.ok) throw new Error('failed to post task');
    return await response.json();
}

// PUT task
export async function putTask(id, taskData) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
    });
    if(!response.ok) throw new Error('failed to put task');
    return await response.json();
}

// DELETE task
export async function deleteTask(id, taskData) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(taskData),
    });
    if(!response.ok) throw new Error('failed to delete task');
    return await response.json();
}
