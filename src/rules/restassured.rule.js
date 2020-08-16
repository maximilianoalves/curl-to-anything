function convert() {
    let curl = document.getElementById("curl").value;
    let curlTrimed = curl.trim();
    let curlSplited = curlTrimed.split("--");

    let method;
    let url;
    let headers = [];
    let dataRaw;

    let existsHeader = false;
    let existsBody = false;
    let existsRequest = false;

    let given = "given()</br>"
    let when = ".when()</br>";

    let fullRequest = "";
    
    curlSplited.forEach(element => {
        if (element.includes("header")){
            headers.push(element);
            existsHeader = true
        }
        if(element.includes("data-raw")) {
            dataRaw = element;
            existsBody = true
        }
        if (element.includes("request")) {
            let request = element.split(" ");
            method = request[1];
            url = request[2];
            existsRequest = true;
        }
    });

    fullRequest += given
    if (existsHeader) {
        fullRequest += createHeader(headers);
    }
    if (existsBody) {
        fullRequest += createBody(dataRaw)
    }
    fullRequest += when
    if (existsRequest) {
        fullRequest += createRequest(method, url)
    }

    if (fieldValidation(curl)) {
        document.getElementById("results").innerHTML = fullRequest
    } else {
        alert("Houve algum erro! Revise o seu comando curl.")
    }
    
}  

/**
 * Criar e identificar o método da request.
 */
function createRequest(method, url) {
    if (method == "POST") {
        return `.post(${url})`;
    }
    if (method == "GET") {
        return `.get(${url})`;
    }
    if (method == "DELETE") {
        return `.delete(${url})`;
    }
    if (method == "PUT") {
        return `.put(${url})`;
    }
}

/**
 * Método para separar os cabeçalhos da request e adicionar ao método .header()
 */
function createHeader(headers) {
    let restHeader= ""
    headers.forEach(element => {
        let header = element.split("\'")
        let headerValues = header[1].split(":");
        restHeader += `.header("${headerValues[0].trim()}", "${headerValues[1].trim()}")</br>`;
    });
    return restHeader;
}

/**
 * Método para separar o corpo da request e adicionar ao método .body()
 */
function createBody(dataRaw) {
    let body = dataRaw.split("\'");
    return `.body("${body[1]}")</br>`
}

/**
 * Validar se é um curl ou não.
 */
function fieldValidation(curl) {
    return curl.includes("curl");
}

/**
 * Executar um exemplo do metodo GET
 */
function getExample() {
    let curlExample = "curl --location --request GET 'https://petstore.swagger.io/v2/store/inventory' \
    --header 'api_key: 1234'";

    document.getElementById("curl").innerHTML = curlExample;
    convert()
}

/**
 * Executar um exemplo do metodo POST
 */
function postExample() {
    let curlExample = "curl --location --request POST 'https://petstore.swagger.io/v2/store/order' \
    --header 'Content-Type: application/json' \
    --data-raw '{\"id\": \"35\",\"petId\": \"7\",\"quantity\": \"2\",\"shipDate\": \"12-14-2019\"\"complete\": true}'";

    document.getElementById("curl").innerHTML = curlExample;
    convert()
}