let presetobject = JSON.parse(localStorage.getItem("setitem"));
welcome.innerHTML = `<b>WELLCOME ${presetobject.uname}</b>`


addamount = () => {
    let bd1Amount = parseFloat(bdAmount.value)


    if (bd1Amount > 0 && bd1Amount != "") {

        let main = JSON.parse(localStorage.getItem(presetobject.email))

        main.balance += bd1Amount

        
        resultB1.innerHTML = `RS : ${main.balance}`
        localStorage.setItem(presetobject.email, JSON.stringify(main))
        console.log(resultB1.innerHTML);

    } else {
        alert("Enter a proper amount")


    }
}

calculate = () => {
    expense_amount = ex1_amount.value
    mObj = JSON.parse(localStorage.getItem(presetobject.email))
    console.log(mObj.balance);
    if (expense_amount > 0 && expense_amount <= mObj.balance) {
        mObj.balance -= expense_amount;
        resultB1.innerHTML=`RS:${mObj.balance}`
        localStorage.setItem(presetobject.email,JSON.stringify(mObj));
        // Expence_details=expense_details.value;
        // Expence_amount=
        eDetails.innerHTML+=` 
        <div class="col-sm-4 mt-1"> <h6 class="ml-2">${expense_details.value}</h6> </div>
        <div class="col-sm-4 mt-1"> <h6 class="ml-2"> ${expense_amount}</h6></div>
        <div class="col-sm-4 mt-1"> <h6 class="ml-2">${mObj.balance}</h6> </div> `

    } else {
        alert("enter proper amount..!")
    }
}

delete_Account=()=>{
    localStorage.clear()
    window.location="./login.html"
}

logout=()=>{
    window.location="./registerpage.html"
}