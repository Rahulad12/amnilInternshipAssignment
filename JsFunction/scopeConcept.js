
function display_scopes() {
    // declare variable in local scope
    let message = "local";

    if (true) {

        // declare block-level variable
        let message = "block-level";

        console.log(`inner scope: ${message}`);
    }

    console.log(`outer scope: ${message}`);
}



// what is wrong case here

function display_scopes() {
    // declare variable in local scope
    let message = "local";

    if (true) {

        // declare block-level variable
        let message1 = "block-level";

        console.log(`inner scope: ${message}`);
    }

    console.log(`outer scope: ${message1}`);
}

// here i am  accessing the message1 outside the block it will throw error because it is block level
