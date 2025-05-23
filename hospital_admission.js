let category_srvc; //Stores the category selected by the user.
let services; //Stores the selected sub category or the service list base on category.
let selected_services = []; //An empty array that stores the user selected services
let prson_info; //Stores the personal information of the user for safe printing or logging.

let subCat_Lab = [ //Declares the sub categories of Laboratory, stored in object form.
        {name: "Toxicology", desc: "Test if positive in substance use", price: 1500},
        {name: "Colonoscopy", desc: "Examination of Large intestine", price: 500},
        {name: "X-Ray", desc: "Internal imaging of the body", price: 900},
        {name: "Urinalysis", desc: "Urine test to detect if there's something wrong with your kidney", price: 250},
        {name: "Hematology", desc: "Blood analysis", price: 300},
    ]
let subCat_Check = [ // Declares the sub categories of Check ups, stored in objects.
        {name: "Routine Physical Exam", desc: "Health checkup including vital signs, physical inspection, and general well-being assessment.", price: 1500},
        {name: "Blood Sugar Test", desc: "Measures the level of glucose in your blood to detect diabetes or monitor blood sugar control.", price: 150},
        {name: "Cholesterol", desc: "Measures levels of cholesterol and lipids in your blood to assess heart disease risk.", price: 150},
        {name: "Cancer Screening", desc: "Check ups to detect early signs of cancer, may include imaging, blood tests, or tissue analysis.", price: 2000},
        {name: "Dental Checkup", desc: "Routine checkup of teeth, gums, and mouth to detect dental issues", price: 700},
    ]
let subCat_Ops = [//Declares the sub categories of Operations, stored in objects.
       { name: "Appendectomy", desc: "Surgical removal of the appendix, typically due to appendicitis.", price: 12000 },
       { name: "Colon and Rectal Surgery", desc: "Surgical treatment of conditions affecting the colon, rectum, and anus.", price: 15000 },
       { name: "Neurosurgery", desc: "Surgical procedures involving the brain, spinal cord, and nervous system.", price: 20000 },
       {name: "Orthopedic Surgery", desc: "Surgical treatment of bones, joints, ligaments, and muscles.", price: 48000 },
       { name: "Head and Neck Surgery", desc: "Surgery focused on diseases and conditions of the ear, nose, throat, and related structures.", price: 35000 }
    ]
/* This function ask the user if they want to start the admission process and has a if statements where:
if the user said yes, then it will return the displaySrv(),
if the user said no, then it will close the program
if the user sends empty response, alert will pop, then runs the startup again.
if the user said an invalid choice, alert will pop, then runs the startup again.
*/
function startup(){ 
    let opened = prompt("Would you like to schedule an Admission? (yes/no)").toLowerCase()
    
    if (opened === "yes"){
        displaySrv();
    }else if (opened === "no"){
        alert("Thank you for using our system, now closing the program.....")
        alert("Please wait.....")
    }else if (opened === ""){
        alert("This is a required field. Please base your answer to the choices before proceeding. :>")
        startup()
    }else{
        alert("Invalid choice, please try again. Ask for guidance when using if you don't know what to do.")
        startup();
    }

}
/*After startup, this function is called, displaSrv(). It will prompt the user to select between 3 categories,
then display what are the services inside that category. Using switch statements, there are 3 scenarios where the user
inputs 1, the the lab() is called to display the laboratory services, 2 for check ups does the same thing, and 3 for operations.

After that, the function requires the user to confirm if they saw what they need and if they would like to start the admission.
Both yes will proceed the admission, both no returns to the startup().
*/

function displaySrv(){
    alert("Hospital Admission")
let selecta = prompt("Categories of Services \n1. Laboatory \n2. Check-Ups \n3. Operations")

    switch(selecta){
        case "1":
            lab();
            break;
        case "2":
            checkUps();
            break;
        case "3":
            ops();
            break;
        default:
            alert("Invalid Choice")
            alert("Or maybe you press the ENTER key 2 times")
            alert("Try Again")
            displaySrv();
            break;

    }

let conf1 = prompt("Have you found the service you need? (yes/no)").toLowerCase();
let conf2 = prompt("Would you like to proceed in availing our service? (yes/no)").toLowerCase();

    if (conf1 === "yes" && conf2 === "yes"){
    admission();
    }else if (conf1 === "no" && conf2 === "no"){
        alert("Thank you for using our system, rerouting you to home....")
        startup();
        //triggered if the user sends an empty response to the prompt
    }else if (conf1 === " " && conf2 === " "){
        alert("This is a required field, please try again")
        conf1 = prompt("Have you found the service you need? (yes/no)").toLowerCase();
        conf2 = prompt("Would you like to proceed in availing our service? (yes/no)").toLowerCase();
        //triggered if the user sends a yes and no, vice versa to the prompt
    }else{
        alert("The only accepted output is two 'yes' and two 'no'. Try Again")
            displaySrv();
}
}


/* admission(), is where the user enters their personal info, after that, the variable prson_info that was declared
earlier, was the one storing the user response.
*/
function admission(){
    alert("Welcome to the admission section")
    prson_info = {
        name: prompt("Enter your full name:"),
        date_of_birth: prompt("Enter your date of birth (MM-DD-YYYY):"),
        address: prompt("Enter your address:"),
        gender: prompt("Enter your gender:")
    }
    //logs to see the personal info
    console.log("Personal Details:")
    console.log(prson_info)
        categoryService();
}


/*categoryService function prompts the user to select a category of service, then if they chooses a number, it will store
the corresponding value of category_srvc to the declared variable earlier. After the selection, it will call the corresponding 
function to print the services (lab(), check(), and ops()), then calLs the spec_Srv function
*/
function categoryService(){
    let cat = prompt("Please input the number of the category you selected: (1. Laboratory, 2. Check Ups, 3. Operations ) ")

    switch (cat){
        case "1":
            category_srvc = "Laboratory"
            lab();
            spec_Srv();
            break;
        case "2":
            category_srvc = "Check-ups"
            checkUps();
            spec_Srv();
            break;
        case "3":
            category_srvc = "Operation"
            ops();
            spec_Srv();
            break;
        default:
            alert("Invalid Option")
            categoryService();
    }
}
/*After the categoryService(), spec_Srv function is called, it will get the value of category_srvc. Then change the value
of service with the value of subCat_Lab, subCat_Check, or subCat_Ops.

After that, it prompts the user to select the number of the services based on the number of the service in order.
*/

function spec_Srv(){
    if (category_srvc === "Laboratory"){
        services = subCat_Lab;
    }else if (category_srvc === "Check-ups"){
        services = subCat_Check;
    }else if (category_srvc === "Operation"){
        services = subCat_Ops
    }else{
        alert("Error Occurred, please try again")
    }
let choice = parseInt(prompt("Please enter the number of the service you want: :"));
    
    if (choice >= 1 && choice <= 5) { //This will be triggered if choice is greater than or equal to one or less than or equal to 5
        let selected = services[choice - 1]; //Declares selected which stores the value of services[i]. The choice -1 means that the 
        //choice variable which is a number is subtracted by 1 to match the indexing of the items in a array.
        selected_services.push(selected);//This adds the selected service by the user to the selected_service array
        console.log(`Service Name: ${selected.name}`);
        console.log(`Description: ${selected.desc}`);
        console.log(`Price: ${selected.price} pesos`);
        alert("Service successfully added to your selection.");
        console.log(selected_services.name, selected_services.desc, selected_services.price)
        dob()//Calls this function to set the date of service of the selected service
        optionship();//Calls the optionship functions after the date of service
    } else {
        alert("Invalid selection. Please try again.");
        spec_Srv(); //if the selection fails, it will call spec_Srv function
    }


}

//Optionship function is used to prompt the user whether they like to add another service to their list of services availed.
//if user typed yes, it will call categoryService function again
//if user typed no, it will call the remove service function
//if use typed something else, them it will raise an error and run the optionship again.
function optionship(){
    let addNew = prompt("Would you like to avail another service? (yes/no)").toLowerCase()
    switch(addNew){
        case "yes":
            return categoryService();
          
        case "no":
            return removeService();
        default:
            alert("Invalid Choice")
           return optionship();
    }

}

//RemoveService function is a function that prompts the user if they want to remove an item in their selected items.
//if user typed yes, it will call removal function
//if user typed no, then it will proceed to the receipt function
//if user typed return, then the optionship function is called
//Lastly, if user typed something else, it will raise an error and call removeService again
function removeService(){
    let removes = prompt("Will you remove an item? (yes/no). Or Type 'return' to return to the previous page").toLowerCase()
    switch(removes){
        case "yes":
            return removal();
            
        case "no":
            alert("Proceeding to receipts please wait.........")
           return receipts();
           
        case "return":
            alert("Returning you to adding new service. Please wait")
           return optionship();
            
        default:
            alert("Invalid Choice!")
            removeService();
            break;
    }
}     

//Removal function, prompts the user to select the index of the item they want to remove.
//After selecting the index they wand to remove removed_items will store the removed items
function removal(){
let indexing = parseInt(prompt(`Choose a number you want to remove from 1 to ${selected_services.length}`));
             if (indexing >= 1 && indexing <= selected_services.length){
       let removed_items = selected_services.splice(indexing -1, 1)
            console.log(`Service successfully removed ${removed_items.name}`)
                    alert("Updating your selected service please wait.......")
                        receipts();
                }else{
                    alert("Perhaps you forgot the number of your service? ")
                }
}

//This functions logs the receipts, compiling all of the users input.
function receipts(){
    alert("Processing your receipt.....")
    alert("Receipt processed Successfully")
    console.log(`Name: ${prson_info.name}`)
    console.log(`Date of Birth ${prson_info.date_of_birth}`)
    console.log(`Address: ${prson_info.address}`)
    console.log(`Gender: ${prson_info.gender}`)
    console.log("Patient")
    alert("Services you Availed:");
    for (let i = 0; i < selected_services.length; i++) {
        let svr = selected_services[i]
        console.log(`${i + 1}. ${svr.name} - ${svr.desc} - ${svr.price} - ${svr.date_of_service}`);
    };
    payments();
}

/*Payments function, is the function where the user is required to pay the total amount of the price of the
services they availed*/
function payments() {
let pay_pay_pay = prompt("Would you like to proceed to payment? (yes/no)").toLowerCase();

    if (pay_pay_pay === "yes") {
    let total_amount = 0;
        for (let i = 0; i < selected_services.length; i++) {
            total_amount += selected_services[i].price
        }

        console.log(`The total payment is: ${total_amount}`);
        alert(`The total payment is: ${total_amount}`);


        let disc = prompt("Are you a senior citizen? (yes/no)").toLowerCase();
        switch (disc) {
            case "yes":
                senior_validation(total_amount)
                break;
            case "no":
                payment_money_input(total_amount);
                break;
            default:
                alert("Invalid Option")
        }
    } else if (pay_pay_pay === "no") {
        let confirmations1 = prompt("Do you want to make changes in your services of choice? (yes/no)").toLowerCase();
        switch (confirmations1) {
            case "yes":
                optionship()
                break;
            case "no":
                alert("Routing you to payment......");
                payments()
                break;
            default:
                alert("Invalid Choice.")
                payments();
        }
    }
}

/* Senior validation function, serves as another root if the user said that they are a senior citizen. This function
will require the user to type their age and see if it match the required classification of a senior citizen,*/

function senior_validation(total_amount) {
    let age_val = parseInt(prompt("Please enter your age: "));

    if (age_val >= 60) {
        alert("Senior citizen validated. You are eligible for a 20% discount.");
        let discounted_amount = total_amount * 0.80;
        console.log("With Senior Citezen Discount: ", discounted_amount)
        payment_money_input(discounted_amount);
    } else {
        alert("Sorry, you are not eligible for a senior discount.");
        payment_money_input(total_amount);
    }
}

/*payment money input function is where the user going to type the amount they are going to deposit. The total amount is passed
by  payment_money_input(total_amount) to the payment_money_input(to_be_expected_pay).

Then checks if it match before alerting the completion action, if missing, it will show the deficit and run the function again.
*/
function payment_money_input(to_be_expected_pay) {
    let payment_confirm = parseFloat(prompt("Enter the amount to deposit: "));
    console.log(payment_confirm)
    if (payment_confirm == to_be_expected_pay) {
        alert("Payment successful! Thank you for using our service.");
    } else {
        let missing_depo = to_be_expected_pay - payment_confirm
        alert(`Insufficient funds, missing by: ${missing_depo}`);
        alert("Please try again and input to match the total... \nRerouting you back to the payment portal")
        payment_money_input(to_be_expected_pay);
    }

    goback();
}

//After payment, this is executed if the user wants to go to the startup or not
function goback(){
let gogogo = prompt("Do you want to return from the start? (yes/no)").toLowerCase()

    switch(gogogo){
        case "yes":
            alert("Going back to startup, please wait.....")
            startup();
            break;
        case "no":
            alert("Thank you for using our system.")
            break;
        default:
            alert("Maybe you double entered?")
            alert("Or put an Invalid Choice.")
            alert("Please try again");
            goback();
            break;
    }
}

/*This function is for the date of service, once the user puts the input, it will run a loop in which, in the selected service
array, date_of_service is added as a new key and dob will be the value of it*/
function dob(){
let dob = prompt("Set the date of your service: ")
for (let i = 0; i < selected_services.length; i++){
    selected_services[i].date_of_service = dob
}
}


//Function that prints the services of laboratory once called
function lab(){
    console.log("1. Laboratory Services")
    console.log("1. ", "Service Name:", subCat_Lab[0].name,"-", "Item Description: ", subCat_Lab[0].desc,"-", "Price in Pesos: ", subCat_Lab[0].price)
    console.log("2. ", "Service Name:", subCat_Lab[1].name,"-", "Item Description: ", subCat_Lab[1].desc,"-", "Price in Pesos: ", subCat_Lab[1].price)
    console.log("3. ", "Service Name:", subCat_Lab[2].name, "-", "Item Description: ", subCat_Lab[2].desc,"-", "Price in Pesos: ", subCat_Lab[2].price)
    console.log("4. ", "Service Name:", subCat_Lab[3].name, "-", "Item Description: ", subCat_Lab[3].desc, "-", "Price in Pesos: ", subCat_Lab[3].price)
    console.log("5. ", "Service Name:", subCat_Lab[4].name,"-", "Item Description: ", subCat_Lab[4].desc, "-", "Price in Pesos: ", subCat_Lab[4].price)   
}
//Function that prints the services of checkups once called
function checkUps(){
    console.log("2. Check-ups")
    console.log("1. ", "Service Name:", subCat_Check[0].name,"-", "Item Description: ", subCat_Check[0].desc,"-", "Price in Pesos: ", subCat_Check[0].price)
    console.log("2. ", "Service Name:", subCat_Check[1].name,"-", "Item Description: ", subCat_Check[1].desc,"-", "Price in Pesos: ", subCat_Check[1].price)
    console.log("3. ", "Service Name:", subCat_Check[2].name, "-", "Item Description: ", subCat_Check[2].desc,"-", "Price in Pesos: ", subCat_Check[2].price)
    console.log("4. ", "Service Name:", subCat_Check[3].name, "-", "Item Description: ", subCat_Check[3].desc, "-", "Price in Pesos: ", subCat_Check[3].price)
    console.log("5. ", "Service Name:", subCat_Check[4].name,"-", "Item Description: ", subCat_Check[4].desc, "-", "Price in Pesos: ", subCat_Check[4].price)   
}
//Function that prints the services of operations once called
function ops(){
    console.log("3. Operation Services")
    console.log("1. ", "Service Name:", subCat_Ops[0].name,"-", "Item Description: ", subCat_Ops[0].desc,"-", "Price in Pesos: ", subCat_Ops[0].price)
    console.log("2. ", "Service Name:", subCat_Ops[1].name,"-", "Item Description: ", subCat_Ops[1].desc,"-", "Price in Pesos: ", subCat_Ops[1].price)
    console.log("3. ", "Service Name:", subCat_Ops[2].name, "-", "Item Description: ", subCat_Ops[2].desc,"-", "Price in Pesos: ", subCat_Ops[2].price)
    console.log("4. ", "Service Name:", subCat_Ops[3].name, "-", "Item Description: ", subCat_Ops[3].desc, "-", "Price in Pesos: ", subCat_Ops[3].price)
    console.log("5. ", "Service Name:", subCat_Ops[4].name,"-", "Item Description: ", subCat_Ops[4].desc, "-", "Price in Pesos: ", subCat_Ops[4].price)   
}

startup();


