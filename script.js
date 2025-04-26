
const form = document.getElementById(`form`)
const searchInput = document.getElementById(`searchInput`)
const submitButton = document.getElementById(`submit-button`)
const meaningContainer = document.querySelector(`.meaning-container`)
const nameTitle = document.querySelector(`.nameTitle`)
const nameMeaning = document.querySelector(`.nameMeaning`)

const AllahName = [
    {
        name: "Ar-Rahman",
        meaning: "The Beneficent",
        explanation: "Ar-Rahman is the All-Compassionate. His mercy is vast and encompasses all of creation in this world, without any distinction between believers and disbelievers."
    },
    {
        name: "Ar-Rahim",
        meaning: "The Merciful",
        explanation: "Ar-Rahim is the Especially Merciful. This name highlights Allah's particular mercy and compassion towards the believers, which will be fully manifested in the Hereafter."
    },
    {
        name: "Al-Malik",
        meaning: "The King",
        explanation: "Al-Malik is the Absolute Ruler and Sovereign of the entire universe. He has complete authority and power over all things, and nothing can happen without His will."
    },
    {
        name: "Al-Quddus",
        meaning: "The Most Sacred",
        explanation: "Al-Quddus is the Holy, Pure, and Perfect. He is free from any imperfections, flaws, or limitations. He is exalted above all that His creation ascribes to Him."
    },
    {
        name: "As-Salam",
        meaning: "The Source of Peace, The Flawless",
        explanation: "As-Salam is the Giver of Peace and Security. He is free from all defects and imperfections. Paradise is also called the Abode of Peace (Dar as-Salam) because it is free from all troubles."
    },
    {
        name: "Al-Mu'min",
        meaning: "The Infuser of Faith",
        explanation: "Al-Mu'min is the Granter of Security and Faith. He assures His servants and protects them from fear. He is the one who affirmed the truthfulness of His prophets through miracles and clear signs."
    },
    {
        name: "Al-Muhaymin",
        meaning: "The Preserver of Safety",
        explanation: "Al-Muhaymin is the All-Watchful Guardian, the Overseer. He watches over His creation, protecting and preserving it. He is the ultimate witness to everything."
    },
    {
        name: "Al-Aziz",
        meaning: "All Mighty",
        explanation: "Al-Aziz is the All-Mighty, the Invincible, the Honorable. He possesses power that cannot be resisted, honor that cannot be diminished, and might that cannot be overcome."
    },
    {
        name: "Al-Jabbar",
        meaning: "The Compeller, The Restorer",
        explanation: "Al-Jabbar is the Irresistible Compeller, the One who can mend and restore what is broken. His will prevails over all, and He can enforce His decree upon His creation."
    },
    {
        name: "Al-Mutakabbir",
        meaning: "The Supreme, The Majestic",
        explanation: "Al-Mutakabbir is the Supreme in Majesty, the One who is far above the attributes of His creation. True greatness and pride belong to Him alone."
    },
    {
        name: "Al-Khaliq",
        meaning: "The Creator, The Maker",
        explanation: "Al-Khaliq is the Originator, the Creator who brings things into existence from nothing. He plans, measures, and determines the form and nature of all that He creates."
    },
    {
        name: "Al-Bari",
        meaning: "The Evolver",
        explanation: "Al-Bari is the Maker who fashions and forms what He has created. He brings forth order and harmony from nothingness, shaping His creation with wisdom and purpose."
    },
    {
        name: "Al-Musawwir",
        meaning: "The Fashioner",
        explanation: "Al-Musawwir is the Bestower of Forms, the One who gives everything its unique shape and appearance. He designs and differentiates His creation in countless ways."
    },
    {
        name: "Al-Ghaffar",
        meaning: "The Constant Forgiver",
        explanation: "Al-Ghaffar is the Oft-Forgiving. He constantly forgives the sins of His servants, no matter how great, as long as they seek His forgiveness."
    },
    {
        name: "Al-Qahhar",
        meaning: "The All-Subduer",
        explanation: "Al-Qahhar is the All-Dominant, the Irresistible Subduer. He has absolute power and control over His creation, and everything is humbled before His might."
    },
    {
        name: "Al-Wahhab",
        meaning: "The Supreme Bestower",
        explanation: "Al-Wahhab is the Generous Bestower, the One who gives freely and without any expectation of return. His gifts are abundant and encompass all aspects of life."
    },
    {
        name: "Ar-Razzaq",
        meaning: "The Provider",
        explanation: "Ar-Razzaq is the Sustainer, the Provider of all sustenance and provisions for His creation. He ensures that every living being receives what it needs."
    },
    {
        name: "Al-Fattah",
        meaning: "The Supreme Opener",
        explanation: "Al-Fattah is the Opener, the Judge, the Victory Giver. He opens what is closed, resolves difficulties, and grants victory to His servants."
    },
    {
        name: "Al-Alim",
        meaning: "The All-Knowing",
        explanation: "Al-Alim is the All-Knowing, the Omniscient. His knowledge encompasses everything, the seen and the unseen, the past, the present, and the future."
    },
    {
        name: "Al-Qabid",
        meaning: "The Withholder",
        explanation: "Al-Qabid is the Withholder, the One who constricts and takes away. He can withhold blessings or provisions according to His wisdom."
    },
    {
        name: "Al-Basit",
        meaning: "The Extender",
        explanation: "Al-Basit is the Extender, the One who expands and grants abundantly. He can increase blessings, provisions, and opportunities for His servants."
    },
    {
        name: "Al-Khafid",
        meaning: "The Reducer",
        explanation: "Al-Khafid is the Abaser, the One who lowers or degrades. He can bring down those who are arrogant or transgress."
    },
    {
        name: "Ar-Rafi",
        meaning: "The Exalter",
        explanation: "Ar-Rafi is the Exalter, the One who elevates and raises in status. He honors His righteous servants and raises them in rank."
    },
    {
        name: "Al-Mu'izz",
        meaning: "The Honourer, the Bestower",
        explanation: "Al-Mu'izz is the Giver of Honor and Might. He bestows honor upon whom He wills and strengthens His beloved servants."
    },
    {
        name: "Al-Mudhill",
        meaning: "The Dishonourer",
        explanation: "Al-Mudhill is the Giver of Dishonor and Humiliation. He humbles those who reject Him and turn away from His path."
    },
    {
        name: "As-Sami",
        meaning: "The All-Hearing",
        explanation: "As-Sami is the All-Hearing. His hearing encompasses all sounds, voices, and whispers, whether they are spoken aloud or concealed."
    },
    {
        name: "Al-Basir",
        meaning: "The All-Seeing",
        explanation: "Al-Basir is the All-Seeing. His sight encompasses everything, the seen and the unseen, the apparent and the hidden."
    },
    {
        name: "Al-Hakam",
        meaning: "The Impartial Judge",
        explanation: "Al-Hakam is the Ultimate Judge, the One who decides with absolute justice. His judgment is perfect and free from any bias."
    },
    {
        name: "Al-Adl",
        meaning: "The Utterly Just",
        explanation: "Al-Adl is the Perfectly Just. He is fair in all His dealings and never oppresses His creation. His justice will be fully manifested on the Day of Judgment."
    },
    {
        name: "Al-Latif",
        meaning: "The Subtle One, the Most Gentle",
        explanation: "Al-Latif is the Subtle, the Gentle, the Kind. He is aware of the finest details and acts with utmost kindness and tenderness towards His servants."
    },
    {
        name: "Al-Khabir",
        meaning: "The All-Aware",
        explanation: "Al-Khabir is the All-Aware, the Well-Informed. He has perfect knowledge of the inner and outer states of His creation."
    },
    {
        name: "Al-Halim",
        meaning: "The Most Forbearing",
        explanation: "Al-Halim is the Most Forbearing, the Clement. He does not hasten to punish His servants for their sins but gives them time to repent."
    },
    {
        name: "Al-Azim",
        meaning: "The Magnificent, the Infinite",
        explanation: "Al-Azim is the Magnificent, the Grand, the Infinite in greatness and majesty. His attributes are boundless and beyond human comprehension."
    },
    {
        name: "Al-Ghaffur",
        meaning: "The Great Forgiver",
        explanation: "Al-Ghaffur is the Great Forgiver, the Most Pardoning. His forgiveness is immense and covers the multitude of sins for those who seek it."
    },
    {
        name: "Ash-Shakur",
        meaning: "The Most Appreciative",
        explanation: "Ash-Shakur is the Most Appreciative, the Rewarder of Good. He acknowledges and rewards even the smallest good deeds of His servants with immense blessings."
    },
    {
        name: "Al-Aliyy",
        meaning: "The Most High, the Exalted",
        explanation: "Al-Aliyy is the Most High, the Exalted in status and rank. He is far above His creation in every aspect of His being and attributes."
    },
    {
        name: "Al-Kabir",
        meaning: "The Most Great",
        explanation: "Al-Kabir is the Most Great, the Supreme in greatness. Nothing is greater than Him, and His majesty is beyond compare."
    },
    {
        name: "Al-Hafiz",
        meaning: "The Preserver",
        explanation: "Al-Hafiz is the Preserver, the Guardian. He protects His creation from harm and preserves what He wills from being lost or destroyed."
    },
    {
        name: "Al-Muqit",
        meaning: "The Sustainer",
        explanation: "Al-Muqit is the Sustainer, the Nourisher. He provides for the needs of His creation and has power over all sustenance."
    },
    {
        name: "Al-Hasib",
        meaning: "The Reckoner",
        explanation: "Al-Hasib is the Reckoner, the Sufficient One. He will call His servants to account for their deeds, and He is sufficient for those who put their trust in Him."
    },
    {
        name: "Al-Jalil",
        meaning: "The Majestic",
        explanation: "Al-Jalil is the Majestic, the Sublime, the One possessing grandeur and glory. His attributes of power and beauty are perfect."
    },
    {
        name: "Al-Karim",
        meaning: "The Most Generous, the Most Esteemed",
        explanation: "Al-Karim is the Most Generous, the Bountiful, the Noble. His generosity is limitless, and He bestows His favors upon His servants without measure."
    },
    {
        name: "Ar-Raqib",
        meaning: "The Watchful",
        explanation: "Ar-Raqib is the All-Watching, the Ever-Vigilant. He observes all the actions and states of His creation, and nothing escapes His knowledge."
    },
    {
        name: "Al-Mujib",
        meaning: "The Responsive One",
        explanation: "Al-Mujib is the Responsive, the Answerer of prayers. He listens to the supplications of His servants and responds to them according to His wisdom."
    },
    {
        name: "Al-Wasi",
        meaning: "The All-Encompassing, the Boundless",
        explanation: "Al-Wasi is the All-Encompassing, the Vast, the Boundless in His knowledge, mercy, and bounty. His attributes are infinite."
    },
    {
        name: "Al-Hakim",
        meaning: "The All-Wise",
        explanation: "Al-Hakim is the All-Wise, the One who acts with perfect wisdom and judgment in all His affairs. His decrees are always just and purposeful."
    },
    {
        name: "Al-Wadud",
        meaning: "The Most Loving",
        explanation: "Al-Wadud is the Most Loving, the Affectionate. He loves His righteous servants and bestows His love and mercy upon them."
    },
    {
        name: "Al-Majid",
        meaning: "The Glorious, the Most Honorable",
        explanation: "Al-Majid is the Glorious, the Most Honorable, the All-Noble. He possesses perfect glory, honor, and majesty."
    },
    {
        name: "Al-Ba'ith",
        meaning: "The Infuser of New Life",
        explanation: "Al-Ba'ith is the Resurrector, the One who will raise the dead back to life on the Day of Judgment. He also gives life to hearts through guidance."
    },
    {
        name: "Ash-Shahid",
        meaning: "The All-and-Ever Witnessing",
        explanation: "Ash-Shahid is the All-Witnessing, the Ever-Present. He witnesses all the actions and states of His creation, and nothing is hidden from Him."
    },
    {
        name: "Al-Haqq",
        meaning: "The Absolute Truth",
        explanation: "Al-Haqq is the Truth, the Real, the Absolute. He is the ultimate reality, and His words and promises are always true."
    },
    {
        name: "Al-Wakil",
        meaning: "The Trustee, the Disposer of Affairs",
        explanation: "Al-Wakil is the Trustee, the Guardian, the One in whom all affairs are entrusted. He is the best Disposer of affairs for those who rely on Him."
    },
    {
        name: "Al-Qawiyy",
        meaning: "The All-Strong",
        explanation: "Al-Qawiyy is the All-Strong, the Possessor of infinite power and might. Nothing can weaken Him or prevent His will from being done."
    },
    {
        name: "Al-Matin",
        meaning: "The Firm One",
        explanation: "Al-Matin is the Firm, the Steadfast, the One who is never weak or in need of support. His power is absolute and unwavering."
    },
    {
        name: "Al-Waliyy",
        meaning: "The Sole Provider",
        explanation: "Al-Waliyy is the Protecting Friend, Helper, and Governor. He supports those who believe in Him and guides them to what is good."
    },
    {
        name: "Al-Hamid",
        meaning: "The Praiseworthy",
        explanation: "Al-Hamid is the All-Praiseworthy, the One who deserves all praise and gratitude. He is praised by His creation in all circumstances."
    },
    {
        name: "Al-Muhsi",
        meaning: "The All-Enumerating, the Counter",
        explanation: "Al-Muhsi is the All-Enumerating, the Counter. He knows the exact number of everything He has created, and nothing is beyond His knowledge."
    },
    {
        name: "Al-Mubdi",
        meaning: "The Originator, the Initiator",
        explanation: "Al-Mubdi is the Originator, the Initiator, the One who brings forth creation for the first time without any prior example."
    },
    {
        name: "Al-Muid",
        meaning: "The Restorer, the Reinstater",
        explanation: "Al-Muid is the Restorer, the One who will bring back creation after its end. He has the power to repeat what He has originated."
    },
    {
        name: "Al-Muhyi",
        meaning: "The Giver of Life",
        explanation: "Al-Muhyi is the Giver of Life, the One who brings living beings into existence and sustains them."
    },
    {
        name: "Al-Mumit",
        meaning: "The Creator of Death",
        explanation: "Al-Mumit is the Creator of Death, the One who causes living beings to die and return to Him."
    },
    {
        name: "Al-Hayy",
        meaning: "The Ever-Living",
        explanation: "Al-Hayy is the Ever-Living, the One who has eternal life and does not die. All other living beings are dependent on Him for their life."
    },
    {
        name: "Al-Qayyum",
        meaning: "The Sustainer, The Self-Subsisting",
        explanation: "Al-Qayyum is the Self-Subsisting, the Sustainer of all. He exists by Himself and upholds the entire universe by His power."
    }

]
let savedAllahNames = []

searchInput.addEventListener(`input`, function () {
    const inputValue = searchInput.value.trim().toLowerCase();

    if (!inputValue) {
        savedAllahNames = [];
        printItemsTotheUI();
        return;
    }

    let matchingNames = [];

    // Special prefix match
    if (inputValue === "al" || inputValue === "ar") {
        matchingNames = AllahName.filter(item =>
            item.name.toLowerCase().startsWith(inputValue + "-")
        );
    } else if (inputValue.startsWith("al-") || inputValue.startsWith("ar-")) {
        matchingNames = AllahName.filter(item =>
            item.name.toLowerCase().startsWith(inputValue)
        );
    }

    // Flexible partial match fallback (includes)
    if (matchingNames.length === 0) {
        matchingNames = AllahName.filter(item =>
            item.name.toLowerCase().includes(inputValue)
        );
    }

    // Render
    if (matchingNames.length > 0) {
        savedAllahNames = matchingNames.map(match => ({
            searchName: match.name,
            searchMeaning: match.meaning,
            nameExplanations: match.explanation
        }));
    } else {
        savedAllahNames = [{
            searchName: `No Allah names found matching "${inputValue}"`,
            searchMeaning: "",
            nameExplanations: ""
        }];
    }

    printItemsTotheUI();
});



form.addEventListener(`submit`, function(event) {
    event.preventDefault();
    const searchUserInput = searchInput.value;
    let found = false;
    let nameMeaning = ``
    let nameExplanation = ``

    function findName() {
        AllahName.forEach(function(item) {
            if (item.name === searchUserInput) {
               nameMeaning = item.meaning
               nameExplanation = item.explanation
                found = true; 
            }
        });

        if (!found) {
            nameMeaning = `Name not included in the 99 names of Allah`
        }

        const nameForm = {
            searchName : searchUserInput,
            searchMeaning : nameMeaning,
            nameExplanations : nameExplanation
        }
    
        savedAllahNames = [nameForm]
        localStorage.setItem(`Allahnames`, JSON.stringify(savedAllahNames))
    }

    searchInput.value = ``;
    findName();
    fetchItems()
});

function fetchItems(){
    if(localStorage.getItem(`Allahnames`)){
        savedAllahNames = JSON.parse(localStorage.getItem(`Allahnames`))
    }

    printItemsTotheUI()
}

fetchItems()

function printItemsTotheUI(){
    meaningContainer.innerHTML = ``
    savedAllahNames.forEach(function(item){
        let nameToPrint = item.searchName
        let nameMeaning = item.searchMeaning
        let nameExplain = item.nameExplanations


        let meaningContainerContent = document.createElement(`div`)
        meaningContainerContent.classList.add(`meaning-content`)

        let nameTitle = document.createElement(`h4`)
        nameTitle.classList.add(`nameTitle`)
        nameTitle.textContent = nameToPrint

        let nameMean = document.createElement(`p`)
        nameMean.classList.add(`nameMeaning`)
        nameMean.textContent = nameMeaning

        let nameexplain = document.createElement(`p`)
        nameexplain.textContent = nameExplain
        nameexplain.classList.add(`nameExplain`)

        meaningContainerContent.append(nameTitle, nameMean, nameexplain)
        meaningContainer.append(meaningContainerContent)

    })

}
