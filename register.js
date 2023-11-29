register = () => {
    account = {
        uname: Uname1.value,
        upassword: password1.value,
        email: Uemail.value,
        balance:0
    }
    if(account.uname==""||account.upassword==""||account.email==""){
        alert("Column is empty, please fill it ")
    }else if(account.email in localStorage){
        alert("Account is already exist, go for the sign in ")
    }else{
    console.log(account);
    localStorage.setItem(`${account.email}`,JSON.stringify(account))
    window.location="./login.html"
    }
}