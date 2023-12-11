const postURL = "https://forms.maakeetoo.com/formapi/995";

const free = document.getElementById('free')
const pro = document.getElementById('pro')
const enterprice = document.getElementById('enterprice')

const handlePlaceOrder = async (username, mail, comments) => {

    if (username.value != '' && mail.value != '') {
        if (window.confirm("Do you want to Proceed?")) {
            const res = await fetch(postURL, {
                method: "POST",
                body: JSON.stringify({
                    firstname: username.value,
                    email: mail.value,
                    message: comments.value
                }),
                headers: {
                    'Content-Type': 'application/json',
                },

            })
            await res.json().then((msg) => {
                console.log(msg)
            })

            username.value = ''
            mail.value = ''
            comments.value = ''
        }
    } else {
        window.alert('Enter Name and Email to BUY!');
    }
}

const handleRangeChange = (rangeValue) => {
    document.getElementById('rangeValue').innerHTML = rangeValue

    if (rangeValue <= 10) {
        free.classList.add('highlighted')
        pro.classList.remove('highlighted')
        enterprice.classList.remove('highlighted')
    } else if (rangeValue <= 20) {
        free.classList.remove('highlighted')
        pro.classList.add('highlighted')
        enterprice.classList.remove('highlighted')
    } else {
        free.classList.remove('highlighted')
        pro.classList.remove('highlighted')
        enterprice.classList.add('highlighted')
    }
}