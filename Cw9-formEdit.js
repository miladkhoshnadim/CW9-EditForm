
class Person {
    firstname;
    lastname;
    static addPerson() {
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        new Person(firstname, lastname)
    }

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.addtoTabel();
    }

    addtoTabel() {
        const tbody = document.getElementById('tbody');
        this.tr = document.createElement('tr');
        this.tr.innerHTML = `
            <td class="border"><input class='checkBox' type="checkbox"></td>
            <td class="border">${this.firstname}</td>
            <td class="border">${this.lastname}</td>
            <td class="border"><button id="deletbottenRow">DELETE</button> <button id="EditbottenRow">EDIT</button></td>`;
        const buttons = this.tr.querySelectorAll('button')
        // this.tr.querySelector('button').addEventListener('click', this.removeBtn.bind(this));
        buttons[0].addEventListener('click', this.removeBtn.bind(this));
        buttons[1].addEventListener('click', this.editBtn.bind(this));
        tbody.appendChild(this.tr);
        if (document.getElementById('add').classList.contains('hiden')) {
            document.getElementById('add').classList.remove("hiden");
            document.getElementById('edit').classList.add("hiden");
        }
    }

    removeBtn() {
        // console.log(this)
        this.tr.remove();
    }

    editBtn() {
        const td = this.tr.querySelectorAll('td')
        document.getElementById('firstname').value = td[1].innerText;
        document.getElementById('lastname').value = td[2].innerText;
        this.tr.remove();
        document.getElementById('edit').classList.remove("hiden");
        document.getElementById('add').classList.add("hiden");
    }

    // static removeCheck(){
    //     this.removeChecked
    // }

    // removeChecked() {
    //     const checkbox = document.getElementsByClassName('checkBox');
    //     console.log(checkbox)
    //     for (let index of checkbox) {
    //         console.log(index)
    //         if (document.getElementById("index").checked = true) {
    //             index.remove();
    //         };
    //     }

    // }

}


document.getElementById('add').addEventListener('click', Person.addPerson)
document.getElementById('edit').addEventListener('click', Person.addPerson)

// document.getElementById('deletCHeced').addEventListener('click', Person.removeCheck)


document.getElementById('deletCHeced').addEventListener('click', function () {


    const checkbox = document.getElementsByClassName('checkBox');
    // console.log(checkbox)
    for (let i = checkbox.length - 1; i >= 0; i--) {

        if (checkbox[i].checked == true) {
            checkbox[i].parentNode.parentNode.remove();
        };
    }

})


document.getElementById('checkedAll').addEventListener('click', function () {
    const checkbox = document.getElementsByClassName('checkBox');

    if (document.getElementById('checkedAll').checked == true) {
        for (let index of checkbox) {
            index.checked = true
        }

    } else {
        for (let index of checkbox) {
            index.checked = false;
        }

    }
});





