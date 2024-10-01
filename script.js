
function submitData(){
    const FirstName = document.getElementById("FirstName").value
    const LastName = document.getElementById("LastName").value
    const Age = document.getElementById("Age").value
    const Address = document.getElementById("Address").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
    // console.log();
    
    let valide = true;

    if(FirstName === ""){
        alert("Enter the FirstNmae.");
        valide="false";
        window.location.reload();

    }

    if(LastName === ""){
        alert("Enter the last Name.");
        valide="false";
        window.location.reload();

    }
    if(Age === ""){
        alert("Enter the Age.");
        valide="false";
        window.location.reload();

    }

    if(Address === ""){
        alert("Enter the Address.");
        valide="false";
        window.location.reload();

    }

    if(email === ""){
        alert("Enter the Email.");
        valide="false";
        window.location.reload();

    }
    

    if(message === ""){
        alert("Enter the last message");
        valide="false";
        window.location.reload();

    }
    
    if(valide === true){
        alert("Form is Successfully Submited.")

    }
    
}
