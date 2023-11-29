login = () => {
    email1 = email2.value
    password3 = password2.value
    console.log(password3);
    if (email1 != "" && password3 != "") {
        if (email1 in localStorage) {
            key = localStorage.getItem(email1)
            key2 = JSON.parse(key)
            if (password3 === key2.upassword) {
                localStorage.setItem("setitem", JSON.stringify(key2))//here i create an another object in local storage to fetch datas when in the home.
                alert("logged in successfully")

                window.location = "./home.html"


            } else {
                alert("password is incorrect")
            }

        } else {
            alert("Email id is not exist,go to the sign up")
        }

    } else {
        alert("Fill all the Column")
    }


}




