minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK') }, 3000)
});

minhaPromise()
    .then(response => {
        console.log("retorno api: "+response);
    })
    .catch(err => {
        console.log(err);
    });
