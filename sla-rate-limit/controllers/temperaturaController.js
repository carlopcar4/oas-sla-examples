export function getTemperaturas(_, res) {
    res.send([{ "id": 1, "location": "Cádiz" }])
}



export function findByid(_, res) {
    res.send({ "id": 1, "location": "Cádiz" })
}
