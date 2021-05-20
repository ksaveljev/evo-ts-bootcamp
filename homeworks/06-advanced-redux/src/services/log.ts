export function log(input: any): void {
    fetch('http://localhost:3001/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    }).then((json) => {
        console.log(json);
    }).catch((ex) => {
        console.log(ex)
    });
}
