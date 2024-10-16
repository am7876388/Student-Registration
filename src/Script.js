// The Github link of the Project is added in the README.md File
document.addEventListener("DOMContentLoaded",() =>{
    const Submit = document.getElementById("Submit"); // Button which is used to Submit the Data in the Form 
    const Container = document.getElementById("Display-container"); // It is the Section in which the Data is Displayed
        const Displaying = (Name,ID,Email,Contact) =>{ //The main function which is used to Display the Data
            const Data = document.createElement("div");
            Data.className = "Data";
            const Datas = document.createElement("div");
            Datas.className = "Datas";
            const Reset = document.createElement("button");
            Reset.className = "Reset";
            const Delete = document.createElement("button");
            Delete.addEventListener("click",() =>{       //The main delete button which will be inserted dynamically to every data produced
                const parent = Delete.parentNode.parentNode;
                const Previous = JSON.parse(localStorage.getItem("FORMDATA")) || [];
                const Index = Previous.findIndex(Daata =>
                    Daata.NAME ===  Name && Daata.id === ID && Daata.email === Email && Daata.contact === Contact //Finding the correct data in the local storage so that it can be deleted
                )
                if(Index !== -1){
                    Previous.splice(Index,1);
                    localStorage.setItem("FORMDATA",JSON.stringify(Previous)); //Deleting the Data and updating it in the localstorage
                }
                parent.remove();
            });
            Delete.className = "Delete";
            Reset.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>'
            Delete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>'
            let num1 = [];
            Reset.addEventListener("click",() =>{ //The main reset or update button
                const parent = Reset.parentNode.parentNode;
                const child = parent.querySelectorAll(".Datas");
                if(Reset.className === "Reset"){
                for(let i = 0; i < 4; i++){
                    const text = child[i].textContent;
                    num1.push(text);
                    child[i].textContent = ""; //Removing the content inside the field
                    const input = document.createElement("input");
                    input.setAttribute("required","");
                    if(i === 1){
                        input.setAttribute("type","number"); //Switching the cotent of the field with the inputs to take in the new value 
                    }
                    if(i === 2){
                        input.setAttribute("type","email")
                    }
                    if(i === 3){
                        input.setAttribute("type","tel");
                    }
                    input.value = text;
                    child[i].appendChild(input); //Appending the inputs to the div
                    Reset.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>'             
                }
                Reset.className = "Done"; 
            }
            else{
                const LocalStorage = JSON.parse(localStorage.getItem("FORMDATA"));
                const num2 = LocalStorage.findIndex(localData =>
                    localData.NAME === num1[0] && localData.id === num1[1] && localData.email === num1[2] && localData.contact === num1[3]
                ); //Data is searched and find out in the Localstorage
                let num3 = num1;
                num1 = [];
                for(let i = 0; i < 4; i++){
                    const inputs = child[i].querySelector("input");
                    const Data = inputs.value;
                    if(Data === ""){ //Before submiting the updated Data the data is checked thoroughly and if there is any error then an alert is shown
                    num1.push(num3[i]);
                    alert("One of the Fields is Empty");
                    }
                    if(i === 1 && NotNumber(Data)){
                    num1.push(num3[i]);
                    alert("One of the Fields is Wrong");
                    }
                    if(i === 3 && (NotNumber(Data) || Data.length !== 10 )){
                        num1.push(num3[i]);
                        alert("One of the Fields is Wrong");
                    }
                    if(i === 2 && Notemail(Data)){
                        num1.push(num3[i]);
                        alert("One of the Fields is Wrong");
                    }
                    else{
                    num1.push(Data);
                    }
                }
                for(let i = 0; i < 4; i++){
                    child[i].innerHTML = num1[i];
                    Reset.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>'                    
                }
                if(num2 !== -1){
                    LocalStorage[num2].NAME = num1[0]; //Updating the Data in Localstorage  
                    LocalStorage[num2].id = num1[1];
                    LocalStorage[num2].email = num1[2];
                    LocalStorage[num2].contact = num1[3]; 
                }
                localStorage.setItem("FORMDATA",JSON.stringify(LocalStorage));
                num1 = [];
                Reset.className = "Reset";
            }
            });
            Datas.textContent = Name;
             Data.appendChild(Datas);
             const IDdiv = document.createElement("div");
             IDdiv.className = "Datas";
             IDdiv.textContent = ID;
             Data.appendChild(IDdiv);
             const EmailDiv = document.createElement("div");
             EmailDiv.className = "Datas";
             EmailDiv.textContent = Email;
             Data.appendChild(EmailDiv);
             const ContactDiv = document.createElement("div");
             ContactDiv.className = "Datas";
             ContactDiv.textContent = Contact;
             Data.appendChild(ContactDiv);
             const ButtonsDiv = document.createElement("div");
             ButtonsDiv.className = "Datas";
             ButtonsDiv.textContent = "";
             ButtonsDiv.appendChild(Reset);
             ButtonsDiv.appendChild(Delete);
             Data.appendChild(ButtonsDiv);
             Container.appendChild(Data);
            }
            Submit.addEventListener("click",() =>{ //Event Listener is being added to the Submit button
                const Name = document.getElementById("NameInput").value;
                const ID = document.getElementById("IDinput").value;
                const Email = document.getElementById("EmailInput").value;
                const Contact = document.getElementById("ContactInput").value;
        if(Name && ID && Email && Contact && typeof(Number(Contact)) === "number" && !isNaN(Contact) && Contact.length === 10 && typeof(Number(ID)) === "number" && !isNaN(ID)){
            Displaying(Name,ID,Email,Contact); //After Data is checked in the above line the Data is passed in the Displaying function
            const StoreData = {
                NAME:Name,
                id:ID,
                email:Email,
                contact:Contact
            }
            const existing = JSON.parse(localStorage.getItem("FORMDATA")) || [];
            existing.push(StoreData);
            localStorage.setItem("FORMDATA",JSON.stringify(existing));
        }
        else{
            alert("Enter all the Fields Correctly and check that none of it should be empty the email should be valid and Contact number should be of 10 length");
        }
    })
    const NotNumber = (num4) =>{ //Function to check if the mobile number is valid or not
   if(typeof(Number(num4)) !== "number" || isNaN(num4)){
    return true;
   }
   else{
    return false;
   }
    }
    const Notemail = (num5) =>{ //Function to check if the email is valid or not
        const num6 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(num6.test(num5)){
            return false;
        }
        else{
            return true;
        }
    }    
    const load = () =>{ //Function to actually load the data by starting it even before submit button is clicked
            const PreviousData = JSON.parse(localStorage.getItem("FORMDATA")) || [];
            PreviousData.forEach(data => {
                Displaying(data.NAME,data.id,data.email,data.contact);
            });
        }
        load();      
})