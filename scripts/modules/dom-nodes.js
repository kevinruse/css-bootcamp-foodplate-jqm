const DOMnodes = {
    regBtn: document.getElementById('initRegister_btn'),
    firstnameTI: document.getElementById('firstName'),
    registerUserBtn: document.getElementById('register_user_btn'),
    staticHeaderH1: document.querySelector('#staticHeader>h1'),
    registerHeaderH1: document.querySelector('#registerHeader>h1'),
    addFoodHeaderH1: document.querySelector('#addFoodHeader>h1'),
    statusDiv: document.getElementById('status'),
    userName: document.getElementById('firstName'),
    adultRadioBtn: document.getElementById('ageGroupA'),
    childRadioBtn: document.getElementById('ageGroupC'),
    ageGroupChildLabel: document.querySelector('label[for=ageGroupC]'),
    ageGroupAdultLabel: document.querySelector('label[for=ageGroupA]'),
    genderMale: document.querySelector('label[for=sexM]'),
    genderFemale: document.querySelector('label[for=sexF]'),
    adultAgeGroups: document.getElementById('adultAgeGroups'),
    childAgeGroups: document.getElementById('childAgeGroups'),
    registerConfirmDiv: document.getElementById('registerConfirm'),
    welcomeHeader: document.querySelector('#welcomeHeader'),
    registerForm: document.getElementById('registerForm'),
}

export { DOMnodes }
