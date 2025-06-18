var URL = 'https://bored.api.lewagon.com/api'

async function randomActivity() {
    fetch(`${URL}/activity`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`API responded with ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let actitivity_card_element = document.getElementById("activity_card")
        actitivity_card_element.classList.add("show")
        actitivity_card_element.classList.remove("hide")

        let actitivity_element = document.getElementById("activity_display")
        actitivity_element.innerHTML = data.activity
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

async function boredActivity(activityType) {
    fetch(`${URL}/activity?type=${activityType}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`API responded with ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let actitivity_card_element = document.getElementById("activity_card")
        actitivity_card_element.classList.add("show")
        actitivity_card_element.classList.remove("hide")
        
        let actitivity_element = document.getElementById("activity_display")
        actitivity_element.innerHTML = data.activity
    })
    .catch(error => {
        console.error('Error:', error);
    });
}