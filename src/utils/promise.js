let condition = true;

// Simula el pedido de informacion a una base de datos.
const getData = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condition) {
                resolve(task);
            } else {
                reject("Error");
            }
        }, time);
    });
}

export default getData;