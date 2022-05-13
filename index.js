/*
 * Add your JavaScript to this file to complete the assignment.  Don't forget
 * to add your name and @oregonstate email address below.
 *
 * Name: Charlemagne Martinez
 * Email: martcha2@oregonstate.edu
 */

// 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
// CLICKING ON ADD TWIT BUTTON TO UNHIDE MODAL AKA TO HAVE MODAL OPEN UP
var addTwitButton = document.getElementById('create-twit-button')
var addTwitModal = document.getElementById('create-twit-modal')
var modalBackdrop = document.getElementById('modal-backdrop')

// referenced: https://www.w3schools.com/howto/howto_css_modals.asp ("modal js")
function openUpOpenUp()
{
    addTwitButton.addEventListener('click', function()
    {
        console.log("CHECK: this red create twit button registering!! (hopefully)")

        addTwitModal.style.display = "block"
        modalBackdrop.style.display = "block"
    })
}
openUpOpenUp()



// 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
// CLOSING THE MODAL WHEN CLICKING CANCEL OR X BUTTON
// referenced: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
// AHHHHHHHHH. FORGOT "getElementsByClassName" returns an array like object so had to put index.
// spent longer than expected cuz of that 😢 😢 😢
// referenced: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
// referenced: https://stackoverflow.com/questions/15968911/how-to-clear-text-area-with-a-button-in-html-using-javascript ("clear text in textarea")
// referenced: https://stackoverflow.com/questions/11845678/adding-multiple-event-listeners-to-one-element (javascript check for two event listeners)

var modalCloseButton = document.getElementsByClassName('modal-close-button')
var modalCancelButton = document.getElementsByClassName('modal-cancel-button')
var twitTextInput = document.getElementById('twit-text-input')
var authorInput = document.getElementById('twit-attribution-input')

function exitModal()
{
    // try see if there's a way to combine if either the 'cancel' or 'x' button is clicked 
    // and then just mash them together cuz what I have right now seems kinda redundant
    // 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
    // what I searched so far for this ^: "conditional statement with two event listeners javascript"
    // UPDATE: the lecture code and third referenced link helped for this

    modalCloseButton[0].addEventListener('click', handleClosing)

    modalCancelButton[0].addEventListener('click', handleClosing)

}
exitModal()

function handleClosing(event)
{
    if (twitTextInput.value !== "")
    {
        twitTextInput.value = ""
    }

    if (authorInput.value !== "")
    {
        authorInput.value = ""
    }

    addTwitModal.style.display = "none"
    modalBackdrop.style.display = "none"
}





// 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
// "3." and "4." of '1. Support inserting new twits'
// refer to week 6 mon create.js file (and the lecture recording as well!).
// have a createTwit function ig (maybe map out or jot down my thoughts
// for this part, 3. and 4. of "1. Support inserting new twits")
var twitContainer = document.getElementsByClassName('twit-container')

// referenced lecture notes and https://stackoverflow.com/questions/5831413/get-textarea-text-with-javascript-or-jquery (grab content of textarea)
function createTwit(twitValue, authorValue)
{
    var twitArticle = document.createElement('article')
    twitArticle.classList.add('twit')

    var twitIconDiv = document.createElement('div')
    twitIconDiv.classList.add('twit-icon')
    twitArticle.appendChild(twitIconDiv)

    var iTag = document.createElement('i')
    iTag.classList.add('fas')
    iTag.classList.add('fa-bullhorn') 
    twitIconDiv.appendChild(iTag)

    var twitContentDiv = document.createElement('div')
    twitContentDiv.classList.add('twit-content')
    twitArticle.appendChild(twitContentDiv)

    var pText = document.createElement('p')
    pText.classList.add('twit-text')
    pText.textContent = twitValue // CHECK IF THIS WORKS
    twitContentDiv.appendChild(pText)

    var pAuthor = document.createElement('p')
    pAuthor.classList.add('twit-author')
    // MAYBE NO TEXT CONTENT IS SET TO THIS, RATHER TO THE "a" WITHIN THIS 'p'????
    twitContentDiv.appendChild(pAuthor)

    var aTagLink = document.createElement('a')
    aTagLink.href = "#" // CHECK THIS
    aTagLink.textContent = authorValue // CHECK IF WORKS
    pAuthor.appendChild(aTagLink)


    // the final touch, appending article to container, and since the other elements are descendants of it, should work...
    twitContainer[0].appendChild(twitArticle)
}


var createTwitButton = document.getElementsByClassName('modal-accept-button')
var enteredText = twitTextInput.value
var enteredAuthor = authorInput.value

function whenCreateTwitButtonClicked()
{
    createTwitButton[0].addEventListener('click', function()
    {
        // maybe while loop?? WAIT NVM, since this is a singular action, I think we good if there's just an if or else.
        // see if what I have rn works
        // UPDATE: yessir

        if ((twitTextInput.value === "" && authorInput.value === "") 
        || (twitTextInput.value === "") || (authorInput.value === ""))
        {
            alert("Both fields should have text in them before a new Twit can be created!!")
        }

        else
        {
            // these next 2 lines seem to help so LEAVE
            enteredText = twitTextInput.value
            enteredAuthor = authorInput.value

            createTwit(twitTextInput.value, authorInput.value)

            twitTextInput.value = ""
            authorInput.value = ""
            addTwitModal.style.display = "none"
            modalBackdrop.style.display = "none"

            // 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
            // FOR CHECKING ONLY
            // console.log('CHECK: number of twits now: ', twitLength.length)
            // console.log("number of indices in twits: ", twits.length)
            // console.log("number of indices in twitText: ", twitText.length)
            // console.log("number of indices in authorText: ", authorText.length)

            // 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
            // TRYING THINGS HERE!!!
            amountOfTwits++
            console.log("this amount of twits now: ", amountOfTwits)

            twitTextArray = makeArray(amountOfTwits, 3, enteredText) 
            authorArray = makeArray(amountOfTwits, 4, enteredAuthor)



            // 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
            // hmmm, so the above seems fine ^^^. 
            // BUT, if I did a search and twits were removed, THEN
            // I decide to create another twit, whatever remains, if any, 
            // and that newly created twit OVERRIDES the original set of 8 tweets
            // and whatever I added. SO make a conditional about this???
            // or maybe change up when I decide to call makeArray like above^^^^^
            // UPDATE: made heavy edits to makeArray so we all good (I THINK?????)
            // 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 

        }


    })
}
whenCreateTwitButtonClicked()



// 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
// JUST PLAYING AROUND HERE TO SEE HOW I CAN DO WHAT I'M THINKING OF FOR RE-SEARCH
// SEE WHAT ID/CLASS I CAN USE TO FIGURE OUT HOW MUCH TWITS THERE ARE...
var twitLength = document.getElementsByClassName('twit')
console.log('CHECK: number of twits now (twitLength): ', twitLength.length)


/*
// reminder: creates array like object...
var twits = document.getElementsByClassName('twit')
console.log("number of indices in twits: ", twits.length)
//for (i = 0; i < twitLength.length; i++)
for (i = 0; i < twits.length; i++)
{
    console.log(twits[i].textContent)
}
*/

// reminder: creates array like object that's live...
var twitText = document.getElementsByClassName('twit-text')
console.log("CHECK: number of indices in twitText: ", twitText.length)
/*
//for (i = 0; i < twitLength.length; i++)
for (i = 0; i < twitText.length; i++)
{
    console.log(twitText[i].textContent)
}
*/

// reminder: creates array like object that's live...
var authorText = document.getElementsByClassName('twit-author')
console.log("CHECK: number of indices in authorText: ", authorText.length)
/*
//for (i = 0; i < twitLength.length; i++)
for (i = 0; i < authorText.length; i++)
{
    console.log(authorText[i].textContent)
}
*/


// 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
// referenced for this makeArray function:
// lecture notes!
// https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript ("declare length of array javascript")
// https://stackoverflow.com/questions/931872/what-s-the-difference-between-array-and-while-declaring-a-javascript-ar ("create empty array javascript")
// https://www.w3schools.com/js/js_arrays.asp ("arrays javascript")
// https://stackoverflow.com/questions/11403068/what-is-the-way-of-declaring-an-array-in-javascript ("declare array javascript")
// https://www.digitalocean.com/community/tutorials/understanding-arrays-in-javascript (access content of array javascript)
// https://bit.ly/3ypQr5k (javascript does a function need all arguments)
// https://stackoverflow.com/questions/33903514/change-array-size-by-just-adding-element-and-no-push-javascript 
// (can arrays in javascript change size; referencfed the above link when doing 'array[size-1]')
// https://stackoverflow.com/questions/14597246/javascript-console-logobject-vs-concatenating-string ("concatenate console log")
// (used the above link for checking purposes when using console.log)
function makeArray(size, whichContent, input)
{
    var array = []

    // for initial initialization of twitTextArray, set to OG 8 twit text
    if (whichContent === 1)
    {
        for (i = 0; i < size; i++)
        {
            array[i] = twitText[i].textContent
        }

    }

    // for initial initialization of authorArray, set to OG 8 authors
    else if (whichContent === 2)
    {
        for (i = 0; i < size; i++)
        {
            array[i] = authorText[i].textContent
        }
    }

    // good riddance to these one-off errors LOL


    // for when a twit gets created, update the twitTextArray by
    // copying the contents to a temp array, then setting the last
    // index to the user input for twit text
    else if (whichContent === 3) 
    {
        var tempArray = []

        for (i = 0; i < size; i++)
        {
            // if loop reaches last index, stop the array contents copying
            if (i === size-1)
            {
                break
                //tempArray[i] = input;
            }

            console.log('CHECK: iteration: ', + i+1)
            tempArray[i] = twitTextArray[i]
            // array[i] = twitTextArray[i]
        }

        // set array to temp array (so contents transfers) and set last index to the last twit text input
        array = tempArray
        console.log("CHECK: array length: ", array.length)
        array[size-1] = input
        console.log("CHECK: contents of array at last index: ", array[size-1])
    }

    // for when a twit gets created, update the authorArray
    else if (whichContent === 4)
    {
        var tempArray = []

        // for (i = 0; i < size - 1; i++)
        for (i = 0; i < size; i++)
        {
            // if loop reaches last index, stop the array contents copying
            if (i === size-1)
            {
                break
                //tempArray[i] = input;
            }

            console.log('CHECK: iteration: ',  + i+1)

            tempArray[i] = authorArray[i]
            // array[i] = twitTextArray[i]
        }

        // set array to temp array (so contents transfers) and set last index to the last twit text input
        array = tempArray
        console.log("CHECK: array length: ", array.length)
        array[size-1] = input
        console.log("CHECK: contexts of array at last index: ", array[size-1])

    }
    

    return array
}

// initial initialization of amountOfTwits before increment in whenCreateTwitButtonClicked()
var amountOfTwits = twitLength.length

var twitTextArray = makeArray(amountOfTwits, 1) 
for (i = 0; i < twitTextArray.length; i++)
{
    console.log('CHECK: twitTextArray contents @ index ' + i, twitTextArray[i])
}

var authorArray = makeArray(amountOfTwits, 2)
for (i = 0; i < authorArray.length; i++)
{
    console.log('CHECK: authorArray contents @ index ' + i, authorArray[i])
}




// 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
// "2. Support twit searches", specifically the search button and "enable re-searching" for now...
// referenced:
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent (regarding difference between textContent and innerText)
// https://bobbyhadz.com/blog/javascript-get-text-of-paragraph (also referenced for textContent and innerText)
// https://www.w3schools.com/jsref/jsref_includes.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
// https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/ (filter search javascript)
var searchButton = document.getElementById('navbar-search-button')
var twit = document.getElementsByClassName('twit')
var timesClicked = 0;

// SEEMS LIKE I DON'T NEED THE FOLLOWING VAR?
var initialQuery = document.getElementById('navbar-search-input') // was named currentQuery


function whenSearchButtonClicked()
{
    searchButton.addEventListener('click', function()
    {
        console.log('CHECK: THIS IS REGISTERING, A SEARCH BUTTON CLICK')
        var searchQuery = document.getElementById('navbar-search-input')

        // was thinking of using this if block for something like if the query now doesn't
        // match the current query or smth like that...
        // I NEVER REASSIGN "initialQuery" but I think this helps so keep for now lol
        // I guess it pretty much resets by removing any remaining twits and then adding all back before
        // IDK ABOUT THIS LOL
        // WAIT NVM. Earlier w/ this if block commented out some problems seemed to happen but now no more??? WHAT
        // HOLDUP. maybe me moving that if block below from whenSearchTermInputClicked() to here helped?

        /*
        if (searchQuery.value !== initialQuery.value)
        {
            while (twitLength.length > 0)
            {
                for (i = 0; i < twitLength.length; i++)
                {
                    console.log('CHECK: removing remaining twit(s)')
                    twitContainer[0].removeChild(twit[i])
                }
            }

            for (i = 0; i < twitTextArray.length; i++)
            {
                createTwit(twitTextArray[i], authorArray[i])
            }
        }
        */
        
        // 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
        // MOVED THIS IF BLOCK FROM whenSearchTermInputClicked to this function
        // else if (twitLength.length != twitTextArray.length)
        // if any twits are remaining, remove the rest, then add every twit back before next for loop
        if (twitLength.length !== twitTextArray.length && searchTerm !== "")
        {
            while (twitLength.length > 0)
            {
                for (i = 0; i < twitLength.length; i++)
                {
                    console.log('CHECK: removing remaining twit(s)')
                    twitContainer[0].removeChild(twit[i])
                }
            }

            for (i = 0; i < twitTextArray.length; i++)
            {
                createTwit(twitTextArray[i], authorArray[i])
            }
        }


        // 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
        // SEE WHAT VAR I SHOULD SET I TO 
        for (i = twit.length - 1; i >= 0; i--)
        {   
            // textContent accesses text contained within a node and its descendants
            // SOOOOO if "twit" refers to article element, text included includes the twit-text and twit-author
            // from searching, ".includes() returns either true or false"
            if (twit[i].textContent.toLowerCase().includes(searchQuery.value.toLowerCase()))
            {
                // don't do anything in terms of DOM for any twits that match the searchQuery ig
            }
            else
            {
                twitContainer[0].removeChild(twit[i])
            }
            
        }

        timesClicked++

    })
}

whenSearchButtonClicked()




var searchTerm = document.getElementById('navbar-search-input')

function whenSearchTermInputClicked()
{
    // var searchTerm = document.getElementById('navbar-search-input')

    searchTerm.addEventListener('click', function()
    {

        // 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
        // !!!!
        // TRY FIGURE OUT IF I CAN HAVE A NEW QUERY AND CLICK OF THE SEARCH 
        // BE DONE OVER ALL THE TWITS RATHER THAN WHAT'S REMAINING...
        // UPDATE: did some edits in this function and whenSearchButtonClicked()
        // which I THINK FIXES IT NOW?????
        // 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 


        // dealing with if the search term is completely cleared by user.
        // remove any remaining twits from past searches than reset and add back all the twits, both og and any added ones
        if (searchTerm.value === "" && timesClicked > 0)
        {
            console.log("CHECK: passed search term value is nothing and times clicked conditional statement")

            while (twitLength.length > 0)
            {
                for (i = 0; i < twitLength.length; i++)
                {
                    console.log('CHECK: removing remaining twit(s)')
                    twitContainer[0].removeChild(twit[i])
                }
            }

            for (i = 0; i < twitTextArray.length; i++)
            {
                createTwit(twitTextArray[i], authorArray[i])
            }

        }

        // 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
        // MOVED THIS IF BLOCK FROM THIS FUNCTION TO whenSearchButtonClicked()
        /*
        else if (twitLength.length !== twitTextArray.length && searchTerm !== "")
        //else if (twitLength.length != twitTextArray.length)
        {
            while (twitLength.length > 0)
            {
                for (i = 0; i < twitLength.length; i++)
                {
                    console.log('CHECK: removing remaining twit(s)')
                    twitContainer[0].removeChild(twit[i])
                }
            }

            for (i = 0; i < twitTextArray.length; i++)
            {
                createTwit(twitTextArray[i], authorArray[i])
            }
        }
        
        */

    })
    
}
whenSearchTermInputClicked()




// 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 🦒❗️ 
// LIVE SEARCH!!
function liveSearchQuery()
{
    searchTerm.addEventListener('input', function()
    {
        var searchQuery = document.getElementById('navbar-search-input')

        // based on my thought process: 
        // SEE WHAT EXACTLY TO PUT HERE THAT  REETS THE TWITS BEFORE REMOVING THEM
        
        
        // if (twitLength.length !== twitTextArray.length && searchQuery.value !== "")
        if (twitLength.length !== twitTextArray.length)
        {
            // THANK YOU WHILE LOOP (switched 'if' for 'while' and AYO IT WORK NOW AHHHHHHHH)
            // also added the second for loop in this if statement only from the commented out
            // portion below right after the while loop and I think that helped also???
            // ALSO. I think removing the '&& searchQuert.value !== "" ' in conditional helped?
            while (twitLength.length > 0)
            {
                for (i = 0; i < twitLength.length; i++)
                {
                    console.log('CHECK: removing remaining twit(s)')
                    twitContainer[0].removeChild(twit[i])
                }
            }

            for (i = 0; i < twitTextArray.length; i++)
            {
                createTwit(twitTextArray[i], authorArray[i])
            }
        }

        /*
        if (twitLength.length === 0 && searchQuery.value === "")
        {
            for (i = 0; i < twitTextArray.length; i++)
            {
                createTwit(twitTextArray[i], authorArray[i])
            }
        }
        */

        for (i = twit.length - 1; i >= 0; i--)
        {   
            // textContent accesses text contained within a node and its descendants
            // SOOOOO if "twit" refers to article element, text included includes the twit-text and twit-author
            // from searching, ".includes() returns either true or false"
            if (twit[i].textContent.toLowerCase().includes(searchQuery.value.toLowerCase()))
            {
                // don't do anything in terms of DOM for any twits that match the searchQuery ig
            }

            else
            {
                twitContainer[0].removeChild(twit[i])
            }
            
        }
            
        

        

        
    })



}



liveSearchQuery()
