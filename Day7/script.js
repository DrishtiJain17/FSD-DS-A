async function fetchdata(){
    try{
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();
        data.forEach(element => {
            let h3 = document.createElement('h3');
            h3.textContent = element.node_id;
            let a = document.createElement('a');
            a.textContent = element.html_url;
            a.setAttribute('href',element.html_url);
            let top = document.getElementById('top');
            top.appendChild(h3);
            top.appendChild(a);
        });
    }
    catch (error){
        console.log(error)
    }
}