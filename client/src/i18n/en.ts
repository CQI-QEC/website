import globals from "../stores/globalInfoNumbers"

const HostingUniversityName = "University of Québec at Trois-Rivières, Drummondville's campus"

const homePage = {
    home: `Home`,
    days: `days`,
    hours: `hours`,
    minutes: `minutes`,
    seconds: `seconds`,
    cqi: `Québec Engineering Competition`,
    edition: `${globals.EDITION_NUMBER}th edition`,
    date: `${globals.FIRST_DAY_COMPETITION} to ${globals.LAST_DAY_COMPETITION} January ${globals.YEAR}`,
    location: `${HostingUniversityName}`,
    description:
        `The ${globals.EDITION_NUMBER}th edition of the QEC will be held in ${globals.YEAR} at the ${HostingUniversityName}. This engineering competition brings together 14 campuses from 11 different universities across Quebec so that hundreds of engineering students in the province can compete. The Quebec Engineering Competition is overseen by the CRÉIQ and allows engineering students to demonstrate their talents in theoretical and practical tests.`,
}

const aboutPage = {
    about: `About`,
    description1:
        `The ${globals.EDITION_NUMBER}th edition of the QEC will be held from ${globals.FIRST_DAY_COMPETITION} to ${globals.LAST_DAY_COMPETITION} January ${globals.YEAR} at the ${HostingUniversityName}. This engineering competition brings together 14 campuses from 11 different universities across Quebec so that hundreds of engineering students in the province can compete.`,
    description2:
        `The Quebec Engineering Competition (QEC) is overseen by the Quebec Student Engineering Confederation (CRÉIQ) and allows engineering students to demonstrate their talents through theoretical and practical tests.`,
    description3:
        `The competition is organized by a committee of undergraduate and graduate students who are committed to student involvement.`,
    delegations: {
        title: `Delegations`,
        description:
            `The Quebec Engineering Competition gathers ${globals.QUANTITY_DELEGATIONS} delegations of ${globals.QUANTITY_UNIVERSITIES} different universities. Each delegation is overseen by its student association.`,
    },
    // TODO : Change the Theme
    thematic: {
        title: `Theme`,
        description:
            `In a literary approach, the expression “let’s step off the beaten path” evokes the natural setting in which the campus is rooted, reinforcing its connection to the surrounding wooded environment.`,
        description2: "Moreover, this phrase illustrates a desire for innovation and a break from convention, highlighting a bold and creative mindset.",
        description3:"Framed in an inclusive way, this theme fosters solidarity among participants and reflects the spirit of cohesion and mutual support that defines the Drummondville student community, a true “tight-knit family.”"
    },
}

const competitionsPage = {
    competitions: `Competitions`,
    description:
        `The Quebec Engineering Competition gathers 9 competitions targeting different skills related to engineering.`,
    senior: {
        title: `Senior design`,
        description:
            `The senior design is the cornerstone of the Quebec Engineering Competition. Teams of four person registered in this category have twelve hours to produce a prototype that can respond to a problem that was presented the day of the competition. At the end of this marathon, these teams show the relevance of their solution by completing, in front of a public, the task asked with the help of their prototype. This competition is typicaly reserved to the students that have a minimum of 60 credits completed in their bachelor's degree.`,
    },
    junior: {
        title: `Junior design`,
        description:
            `The junior design is, in a way, the little sister of the senior competition. The competition's concept remains the same one as the senior's design. The principal difference is the level of difficulty of the problem, which is lower than its counterpart. In general, the teams of four have eight hours to make a prototype. This competition is reserved to students with less than 60 credits completed in their bachelor's degree.`,
    },
    debate: {
        title: `Debate competition`,
        description:
            `One engineer cannot soly rely on their talents of manager and designer; He or she also needs to improve their communication skills as a way of efficiently develop in a world where we rely more and more on multidisciplinarity. The competition of debate competitions is based on this concept in order to place future engineers in the midst of oral clashes which will force them to show tact, eloquence and opinions. Here, the participants confront two by two by developing arguments on the go based on a position and a theme that are imposed to them.`,
    },
    reengineering: {
        title: `Re-Engineering`,
        description:
            `Re-Engineering technology is constantly refined over time and that, to a point where there is a need to take a step back to better grasp the other step of the evolutive chain of a product. More and more, engineers are called to better and optimized products that surround us and that seems mundane. The re-engineering competition aims to test the capacity of the participants, paired in teams of two, to enhance existant products in order to respond to new constraints. The teams present their solution in front of a jury, allowing them to not only demonstrate their imagination and their technical knowledge, but also their communication talent.`,
    },
    consulting: {
        title: `Consulting engineering`,
        description:
            `Consultation is one of the most popular discipline of engineering, the Quebec Engineering Competition makes a point to present, each year, the competition of consulting engineering. During this competition, the participants, paired in teams of four, have approximately six hours to propose a complete solution to a complex problem. Their solution then needs to be presented in front of a jury, thus leveraging their communication and persuasion talents.`,
    },
    scientific: {
        title: `Scientific communication`,
        description:
            `Often complex, the exercise of the functions of an engineer forces them to appeal to abstract and intangible concepts. It is crucial for the engineer to know how to popularize his or hers art clearly and precisely to be able to communicate his or hers knowledge. The scientific communication competition allows the participants, alone or by teams of two, to showcase their control of this art by explaining, clearly, a complex engineering subject. The presentations are evaluated in front of a jury.`,
    },
    programming: {
        title: `Programming`,
        description:
            `The programming competition tests various important skills in computer and software engineering such as software architecture, algorithmic thinking, and the ability to solve complex problems. The objective of this competition is to design a functional program that addresses a real-world case and present it to a jury.`,
    },
    design: {
        title: `Innovative design`,
        description:
            `The Innovative Design Competition allows teams of up to six members to showcase their creativity and entrepreneurial spirit by designing a product, service, or marketable process that is not currently available. These products are presented to the public through stands set up by the participants, and the different concepts are evaluated by members of the jury.`,
    },
    superiorcycle: {
        title: `Research project in the superior cycle`,
        description:
            `In this competition, participants present their research projects for graduate studies at the master's or doctoral level. This competition takes the form of a scientific conference and consists of three parts: the writing of a short summary article, a public presentation, and an evaluation by peers (judges) in a closed-door meeting.`,
    },
}

const documents = {
    documents: `Documents`,
    description: `You will find all the documents related to the competition here. If you have any questions, please contact us.`,
}

const loginPage = {
    requiredEmail: `Please enter your email`,
    requiredPassword: `Please enter your password`,
    badLogin: `Wrong credentials`,
    invalidEmail: `Invalid email`,
    email: `Email`,
    password: `Password`,
    signIn: `Sign in`,
    forgotPassword: `Forgot password?`,
    resetEmailSent: `An email has been sent to reset your password.`,
}

const additionalInfo = {
    medicalConditions: `Medical conditions`,
    medicalConditionsLabel:
        `Please specify any medical conditions that we should be aware of.`,
    allergies: `Allergies`,
    allergiesLabel: `Do you have any allergies? If so, please specify.`,
    pronouns: `Pronouns`,
    pronounsLabel: `What are your pronouns?`,
    dietaryRestrictions: `Dietary restrictions`,
    phoneNumber: `Phone number`,
    phoneNumberLabel: `Your phone number.`,
    tshirtSize: `T-shirt size`,
    emergencyContact:
        `Please provide the information of your emergency contact.`,
    emergencyContactNameLabel: `Emergency contact full name`,
    emergencyContactPhoneLabel: `Emergency contact phone number`,
    emergencyContactRelationshipLabel: `Emergency contact relationship`,
    hasMonthlyOpusCard:
        `Do you have a monthly OPUS card for the Montréal region at the moment of the CQI?`,
    reducedMobilityLabel:
        `Do you need reduced mobility assistance? If so, please specify below.`,
    studyProofLabel: `Study proof with number of credits (pdf)`,
    photoLabel: `Photo 512x512 (png)`,
    cvLabel: `CV (pdf)`,
    success: `Your information has been saved.`,
    error: `An error occured. Please try again.`,
    file: `Click or drag and drop a file`,
    yes: `Yes`,
    no: `No`,
    required: `This field is required`,
    food: `I confirm that I have filled out the food forms.`,
}

const dashboard = {
    dashboard: `Dashboard`,
    goback: `Go back`,
}

const participantsList = {
    confirmDeleteTitle: `Delete confirmation`,
    confirmDelete: `Are you sure you want to delete this participant?`,
    delete: `Delete`,
    cancel: `Cancel`,
}

export const dict = {
    cqi: `QEC`,
    lang: `EN`,
    homePage: homePage,
    aboutPage: aboutPage,
    competitionsPage: competitionsPage,
    team: `Team`,
    partners: `Partners`,
    documents: documents,
    login: `Login`,
    loginPage: loginPage,
    dashboard: dashboard,
    additionalInfo: additionalInfo,
    participantsList: participantsList,
    madeBy: `Made by`,
}
