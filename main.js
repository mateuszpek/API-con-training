const getUsers = (e) => {
    e.preventDefault();
    
    const usersGender = document.querySelector('[name="gender"]').value;
    const usersNumber = document.querySelector('[name="users-number"]').value;
    const apiUrl = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === "both" ? "male,female" : usersGender}`;
    
    
    console.log(e);
    console.log(apiUrl);
};

document.getElementsByClassName('generator__submit-btn')[0].addEventListener('click' , getUsers);