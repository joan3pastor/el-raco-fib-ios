export const en = {
    code: "en",
    bottomTabs: {
        horari: "SCHEDULE",
        avisos: "NOTICES",
        noticies: "NEWS",
        assig: "SUBJECTS",
    },
    titleViews: {
        events: "Events",
        notes: "Grade Manager",
        labs: "Labs Availability",
        bibl: "BRGF Library Rooms",
        aules: "Search Free Classrooms",
        places: "Track Subjects Availability",
        mobilitat: "Mobility Programs",
        lectures: "Upcoming Defenses",
        links: "Links of interest",
        feedback: "Feedback & Bugs",
        settings: "Settings",
    },
    drawer: {
        events: "Events",
        notes: "Grade Manager",
        labs: "Labs Availability",
        bibl: "BRGF Library Rooms",
        aules: "Search Free Classrooms",
        places: "Track Subjects Availability",
        mobilitat: "Mobility Programs",
        lectures: "Upcoming Defenses",
        links: "Links of interest",
        feedback: "Feedback & Bugs",
        settings: "Settings",
        logout: "Log Out",
    },
    horari: {
        grup: "Group",
        aula: "Classroom",
        diesSetmana: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri."],
    },
    avisos: {
        msgEmpty: "You have no notices.",
    },
    noticies: {},
    assig: {
        grup: "Group",
        credits: "Credits",
        semestre: "Semester",
        professors: "Professors",
        avaluacio: "Evaluation method",
        metodologia: "Teaching methodology",
        loadingProfessors: "Loading professors...",
        loadingAvaluacio: "Loading evaluation...",
        loadingMetodologia: "Loading methodology...",
        responsable: "Head",
        msgEmpty: "You are not taking any subject.",
    },
    events: {
        footer: "Exams and holidays are only shown up to 3 months ahead.",
    },
    notes: {
        mitja: "Average grade",
        final: "Final grade",
        progres: "Progress",
        bttnAfegir: "ADD ENTRY",
        bttnCancellar: "CANCEL",
        bttnGuardar: "SAVE",
        aeNom: "Entry name",
        aePes: "Wigth (0 to 1)",
        aeNota: "Grade",
        textNota: "Grade",
        titolEliminar: "Attention!",
        textEliminar: "Are you sure you want to delete the entry?  ",
        textSi: "YES",
        textNo: "NO",
        empty: "You are not taking any subject.",
    },
    labs: {
        bttnActualitzar: "UPDATE",
    },
    bibl: {},
    aules: {
        pickerDiaNom: "Day",
        pickerIniciNom: "Start",
        pickerDuradaNom: "Duration",
        pickerTipusNom: "Type",
        pickerDia: ["Today", "Mon.", "Tue.", "Wed.", "Thu.", "Fri."],
        pickerDiaFormat: [{value:"Today"}, {value:"Mon."}, {value:"Tue."}, {value:"Wed."}, {value:"Thu."}, {value:"Fri."}],
        pickerTipus: ["All", "CLASSROOM", "LAB"],
        pickerTipusFormat: [{value:"All"}, {value:"CLASSROOM"}, {value:"LAB"}],
        msgSelecDia: "Select a day.",
        msgSelecInici: "Select a start hour.",
        msgSelecDurada: "Select a minimum duration.",
        sectionAules: "Classrooms",
        sectionLabs: "Labs",
        aulaMsgLinia1: "Free until",
        aulaMsgLinia2: "",
    },
    places: {
        bttnAfegir: "Add Subject",
        bttnActualitzar: "Update",
        msgActualitzant: "Updating in",
        msgBuscarAssig: "Search Subject",
        msgGrup: "Group",
        cursos: {
            "GRAU": "Bachelor Degree in Informatics Engineering",
            "GCED": "Bachelor Degree in Data Science and Engineering",
            "MEI": "Master in Informatics Engineering",
            "MIRI": "Master in Innovation and Research in Informatics",
            "MSEC": "Màster en Formació ESO y Batxillerat",
            "MAI": "Master in Artificial Intelligence",
        },
        titolEliminar: "Attention!",
        textEliminar: "Are you sure you want to delete the entry?  ",
        textSi: "YES",
        textNo: "NO",
    },
    mobilitat: {
        pickerPais: "Country",
        pickerPrograma: "Program",
        pickerElemTots: "All",
        modalTitol: "Links of Interest",
        modalLink1: "General information",
        modalLink2: "Information Sessions",
        modalLink3: "Calendar",
        modalLink4: "Scholarships",
        bttnWeb: "Web Page",
        bttnMapa: "Open in Map",
        bttnPDF: "PDF Info",
        msgPais: "Country",
        msgPrograma: "Program",
        msgVigent: "Valid until",
    },
    lectures: {
        msgBuit: "No defenses scheduled.",
        pickerPla: "Type",
        pickerElemTots: "All",
        director: "Director",
        estudiant: "Student",
        dia: "Day",
        lloc: "Place",
        modalitat: "Modality",
        pla: "Type",
    },
    links: {
        title1: "The Faculty",
        title2: "Guides",
        title3: "Software and Services for the Student",
        A1E1: "DEFIB (FIB Student Delegation)",
        A1E1Comentari: "   - Good FAQ section for new students.",
        A1E2: "Associations",
        A2E1: "Eduroam connection guide (Wi-Fi)",
        A2E2: "Student mail configuration",
        A2E3: "Printing service",
        A2E4: "UPClink configuration (VPN to access FIB servers from outside the faculty)",
        A3E1: "UPC software distribution agreements (Microsoft Imagine, Autocad, Matlab...)",
        A3E2: "VMware Academic Program (Offered by FIB)",
        A3E3: "Github Student Developer Pack (Github private projects, ASW Educate, Heroku Free Dynos, etc.)",
        A3E4: "Microsoft Azure for Students",
        A3E5: "Microsoft Office for Students + 1 TB OneDrive",
        A3E6: "Google Cloud Platform Education Credits",
        msgManteniment: "If any link stops working send me an email from \"Feedback & Bugs\" section.",
    },
    feedback: {
        text: "<style>p{text-align:justify}</style><p>Siéntete libre de enviarme un correo si algo no se comporta como esperabas o si echas en falta alguna funcionalidad. Adjunta capturas de pantalla de todo lo posible.</p><p>Trataré de solucionar errores críticos. Todo lo demás dependerá de mi disponibilidad.</p>",
        bttnSendMail: "Envíame un correo!",
        bttnValora: "Valora la App",
        bttnGithub: "Colabora!",
        footer: "Creada por Joan Marc Pastor con la API del Racó",
    },
    settings: {
        A1Title: "Notices Notifications",
        A1Bttn1: "Enabled",
        A1Bttn2: "Disabled",
        A1Nota1: "New notices will be searched every 20 minutes.",
        A1Nota2: "*It may not work in \"Power Saving Mode\".",
        A2Title: "Notice font size",
        A2text: "Test text...",
        A3Title: "Schedule Style",
        A3Bttn1: "Complete",
        A3Bttn2: "Minimalist",
        A4Title: "Language",
        A4Placeholder: "Select language",
        dies: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri."],
        pickerDies: [{value:"Mon."}, {value:"Tue."}, {value:"Wed."}, {value:"Thu."}, {value:"Fri."}],
        A5Title: "Modify Schedule",
        A5Bttn1: "Add class",
        A5Bttn2: "Delete class",
        A5Bttn3: "Reset",
        A5txt1: "Added classes",
        A5txt2: "Deleted classes",
        A5ModalTitle: "Add class",
        A5ModalP1: "Subject code",
        A5ModalP2: "Classroom",
        A5ModalP3: "Day",
        A5ModalP4: "Start",
        A5ModalP5: "Duration",
        A5ModalP6: "Group",
        A5ModalP7: "Type",
        A5ModalBttn1: "CANCEL",
        A5ModalBttn2: "SAVE",
        A5Modal2Title: "Delete classes",
        A5Modal2txt1: "Oficial classes",
        A5Modal2txt2: "Added classes",
        A5Alert1: "Enter the code of the subject.",
        A5Alert2: "Enter the classroom.",
        A5Alert3: "Enter the day of the class.",
        A5Alert4: "Enter the class starting time.",
        A5Alert5: "Enter the duration of the class.",
        A5Alert6: "Enter the group.",
        A5Alert7: "Enter the type of the class. \n\nT = Theory\nL = Lab\nP = Problems",
    },    
}