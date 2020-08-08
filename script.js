const entries = [{
    title: "The Girl on the Bus",
    date: "July 6th, 2020",
    entry: `On Mondays and Wednesdays, I take route 50 and on Tuesdays and Thursdays, I take route 54 or 56 depending on me waking up to my annoying honking of an alarm clock. Fridays though. Fridays, I wake up more than on time. I do the works. The product-ed, yet semi-organized, tousled hair and the light usage of the chocolate body spray. I want to emphasize on <i>light</i> usage, I’m not a monster who showers in body spray. Anyways, Fridays, I take route 33. <s>Or I like to call the route to my heart.</s> I need to invest in pencils. But I love pens far too much or maybe I’m a person who commits to small stuff. Or maybe I’m afraid to to leave. Oh, I’m getting sidetracked again, sorry about that Journal. I think this was a year ago. I remember missing route 50 on a random Friday. I was just rushing to this bus on route 33. Running and waving in hopes the bus driver would notice me before just leaving me; that was miserable, running. I barely made it and I thank the driver somewhere in my gasping. I reached for my pockets and realized I forgot my wallet. It could not get any worse. It got better, way better. A girl. No, a woman got onto the bus and respectfully scootched aside my defeated standing to pay the fare for me and herself. I was in awe. I don’t think anyone’s done anything for lowly ol’ me. There were barely any seats, but it felt like destiny when the last two remaining seats were across from each other. She sat down with earbuds in and her arms on her purse while her hands held a book and a journal. We have so much alike already. I read. I have a journal. I never thought my Fridays could feel more Friday than ever.
    
    <br>
    <br>
    Longingly,
    <br>
    <i>B.</i>`
}, {
    title: "The Interview",
    date: "July 8th, 2020",
    entry: `Em, are you seriously gonna record this?' 
    
    'Yes, babe. I am serious. It’s for class, okay?'
    
    He sighed. 'Okay, okay. I love you, too.'
    
    'Hehe. Yep.' As she smirks.
    
    
    'So, what do we gotta do?'
    
    'Well. I just gotta say some word and you just say what first pops up. No thinking. Just quick response. No lying either or else it won’t be beneficial.'
    
    'Okay, I think I’ve done this before. Probably. Totally.'
    
    She then excitedly grabs her paper and pencil. 'Hereeeeee we go. Color?'
    
    'Black.'
    
    She scribbles. 'Food?'
    
    'Rice.'
   
    'Pets?'
  
    'Dogs.'

    'Place of living?'
   
    'Apartment.'

    'Marriage?'
   
    'Later.'
   
    'Children?'
    
    'Gross.'
   
    'Okay, I think I’m done.' She quickly grabs her phone and even quicker leaves the room.
    
    'Babe, wait, what’s goi-"
  

    Recording 
    <i>E.</i>
    `
}, {
    title: "A Surprise",
    date: "July 7th, 2020",
    entry: `I am so ready. I got the cake, the clown, and the cast to come. Oh and I got the weird submarine person he absolutely loves for some reason. Maybe one day I'll try to get into it. Anyways, I am gonna go to bed now. Got an early day tomorrow while he's out with the boys. I'll let you know how it goes tomorrow.
    <br>
    <br>
    With love, <br>
    <i>P.</i>
    `
}, {
    title:"The Mother",
    date: "July 12th, 2020",
    entry: `I am writing this because Ms.Haynes told me to. Mother told me to take out the trash to the usual alley. I did it. I went back home and I saw the neighbors yelling at each other. Now Im writing in this journal that Ms. Haynes told me to do. I dont know how to end this. 
    <i>G.</i>    
    `
}]

document.querySelector("#search-btn").onclick = function searchFilter(title, filters) {
    
}

// Filter Functions(WIP)

// const filters = {
//     searchText: ""
// }

// const renderSearch = function (title, filters) {
//     const filteredTitles = entries.filter(function (title) {
//         return entries.title.toLowerCase().includes(filters.searchText.toLowerCase())
//     })

//     document.querySelector("#entries-section").innerHTML = ""

//     filteredTitles.forEach(function (searchTitle) {
//         const header = document.createElement('h3')
//         header.textContent = searchTitle.title
//         document.querySelector("#entries-section").appendChild(header)
//     })
// }


// renderSearch(entries, filters)

// document.querySelector("#search-title").addEventListener("input", function (e) {
//     filters.searchText = e.target.value
//     renderSearch(entries, filters)
// })

// Read and Create Array onto Aprropriate body Sections(WIP)

entries.forEach(entry => console.log(entry))

const renderEntries = function (entry) {
    document.querySelector("#section-post-1").innerHTML = ""

    document.querySelector("#section-post-1").appendChild(generateTitleDOM(entries))
    document.querySelector("#section-post-1").appendChild(generateDateDOM(entries))
    document.querySelector("#section-post-1").appendChild(generateEntryDOM(entries))

}

const generateTitleDOM = function (title, index) {
    const nameOfTitle = document.createElement("h4")
    nameOfTitle.innerHTML = `<i>${entries[0].title}</i>`
    return nameOfTitle
}

const generateDateDOM = function (date) {
    const dateOfEntry = document.createElement("p")
    dateOfEntry.innerHTML = `<i>${entries[0].date}</i>`
    return dateOfEntry
}

const generateEntryDOM = function (entry) {
    const entryOfStory = document.createElement("p")
    entryOfStory.innerHTML = `${entries[0].entry}`
    return entryOfStory
}


renderEntries(entries)

// Add Entries

let pastEntries = []

document.querySelector("#add-entry").addEventListener("submit", function (e) {
    e.preventDefault()
    let addTitle = e.target.elements.addTitle.value
    let addEntry = e.target.elements.addEntry.value
    let addDate = e.target.elements.addDate.value
    pastEntries.push(entries.shift())
    entries.push({
        title: addTitle,
        entry: addEntry,
        date: addDate
    })
    console.log(pastEntries)
    console.log(entries)
})
