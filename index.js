const mahasiswaNim = '20230040263'
const updateData = {
    nama: 'Agung',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Cisaat'
}

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log ('Error', error))