import CurlverterCore from './curlverter.core'

export default class RestAssuredRule {

    curlProperties: CurlverterCore;

    constructor(curl: string) {
        this.curlProperties = new CurlverterCore(curl);
    }

    mountSnippet() {
        return `given()${this.mountHeaders()}${this.mountBody()}.when()${this.mountUrl()}.then()`
    }

    mountUrl() {
        switch(this.curlProperties.method) {
            case 'GET': 
                return `.get(${this.curlProperties.url})`;
            case "POST": 
                return `.post(${this.curlProperties.url})`;
            case "PUT": 
                return `.put(${this.curlProperties.url})`;
            case "DELETE": 
                return `.delete(${this.curlProperties.url})`;
        }
    }

    mountHeaders() {
        let headerSnippet: string = "";
        this.curlProperties.headers.forEach( element  => {
            headerSnippet += `.header("${element.name.trim()}", "${element.value.trim()}")`
        })
        return headerSnippet;
    }

    mountBody() {
        if (typeof this.curlProperties.body != 'undefined' && this.curlProperties.body) {
            return `.body${this.curlProperties.body}`;
        }
    }


}