let category = document.getElementById('category')
let list = document.getElementById("list")





let arr = [
    {
        brand: "Samsung",
        model: "A30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Samsung",
        model: "A10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb"
    },
    {
        brand: "Samsung",
        model: "A20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb"
    },
    {
        brand: "Vivo",
        model: "Y20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb"
    },
    {
        brand: "Vivo",
        model: "Y11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb"
    },
    {
        brand: "Vivo",
        model: "Y15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb"
    },
    {
        brand: "Motorola",
        model: "123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb"
    },
    {
        brand: "Iphone",
        model: "12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Iphone",
        model: "13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Iphone",
        model: "X",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
]

var search = document.getElementById("search")

function allitems(e, id) {
    e.map((e) => {
        // console.log(e.brand)
        return id.innerHTML += `<tr><td>${e.model}</td>
        <td>${e.brand}</td>
        <td>${e.price}</td>
        <td>${e.camera}</td>
        <td>${e.rom}</td>
        <td>${e.ram}</td><tr/>
        `
    })
}
allitems(arr, sublist)

function abc() {
    selectedId.innerHTML = ""
    // console.log(category.value, "CAT")
    if (category.value == 'model') {
        newArr = arr.filter((e) => {
            // console.log(e.model, "E")
            if (e.model == search.value) {
                return e
            }
        })
    } else {
        if (category.value == 'brand') {
            newArr = arr.filter((e) => {
                // console.log(e.brand, "E")
                if (e.brand == search.value) {
                    return e
                }
            })

        } else {
            if (category.value == 'ram') {
                newArr = arr.filter((e) => {
                    // console.log(e.ram, "E")
                    if (e.ram == search.value) {
                        return e
                    }
                })
            }
        }
    }
    allitems(newArr, selectedId)
    // console.log(newArr, "newArr")
}