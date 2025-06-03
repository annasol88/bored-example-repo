var URL = 'https://bored-api.appbrewery.com'

async function randomActivity() {
    let activity_URL = 'https://bored.api.lewagon.com/api/activity'
    fetch(`${URL}/random`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`API responded with ${response.status}`);
        }
        return response.json();

    })
    .then(data => {
        let actitivity_element = document.getElementById("activity_display")
        actitivity_element.innerHTML = data.activity
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

async function boredActivity(activityType) {
    fetch(`${URL}/filter?type=${activityType}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`API responded with ${response.status}`);
        }
        return response.json();

    })
    .then(data => {
        let actitivity_element = document.getElementById("activity_display")
        actitivity_element.innerHTML = data.activity
    })
    .catch(error => {
        console.error('Error:', error);
    });
}