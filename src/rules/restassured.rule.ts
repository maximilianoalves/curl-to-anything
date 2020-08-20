import CurlverterCore from './curlverter.core'

export default class RestAssuredRule {

    curlProperties: CurlverterCore;

    constructor(curl: string) {
        this.curlProperties = new CurlverterCore(curl);
    }

    mountSnippet() {
        return `given()${this.mountHeaders()}${this.mountBody()}\n.when()${this.mountUrl()}\n.then()`
    }

    mountUrl() {
        let method: string = ""
        switch(this.curlProperties.method) {
            case 'GET': 
                method = `.get("${this.curlProperties.url}")`;
                break;
            case "POST": 
                method = `.post("${this.curlProperties.url}")`;
                break;
            case "PUT": 
                method = `.put("${this.curlProperties.url}")`;
                break;
            case "DELETE": 
                method = `.delete("${this.curlProperties.url}")`;
                break;
        }
        return "\n"+method;
    }

    mountHeaders() {
        let headerSnippet: string = "";
        this.curlProperties.headers.forEach( element  => {
            headerSnippet += `\n.header("${element.name.trim()}", "${element.value.trim()}")`
        })
        return headerSnippet;
    }

    mountBody() {
        let body: string = ""
        if (typeof this.curlProperties.body != 'undefined' && this.curlProperties.body) {
            body = `\n.body(${this.curlProperties.body})`;
        }
        return body;
    }
    
}