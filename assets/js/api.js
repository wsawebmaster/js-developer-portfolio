async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/wsawebmaster/js-developer-portfolio/main/data/profileW.json'
    // const url = "http://localhost/dio/dio-trilha-javascript/js-developer-portfolio/data/profileW.json";
    const fetching = await fetch(url)
    return await fetching.json()
}
