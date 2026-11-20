minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK') }, 2000)
});

minhaPromise()
    .then(response => {
        console.log('1:'+response);
    })
    .catch(err => {
        console.log(err);
    });

try {
    var x = minhaPromise();
    console.log('2:'+x);
} catch(err) {
    console.log(err);
}

async function executaPromise(){
    const response = await minhaPromise();
    console.log('3:'+response);
    const response1 = await minhaPromise();
    console.log('4:'+response1);
    const response2 = await minhaPromise();
    console.log('5:'+response2);
}
executaPromise();

const executaPromise2 = async () => {
    console.log('6:'+await minhaPromise());
    console.log('7:'+await minhaPromise());
    console.log('8:'+await minhaPromise());
}
executaPromise2();