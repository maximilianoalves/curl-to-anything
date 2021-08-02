import CurlverterCore from './curlverter.core'

export default class KarateRule {

    curlProperties: CurlverterCore;

    constructor(curl: string) {
        this.curlProperties = new CurlverterCore(curl);
    }

    mountSnippet() {
        return `${this.mountUrl()}${this.mountHeader()}${this.mountBody()}${this.mountMethod()}\n Then status <status-code>`
    }

    mountUrl() {
        let givenUrl: string = "";
        if (this.curlProperties.url) {
            givenUrl = ` Given url '${this.curlProperties.url}'`
        }
        return givenUrl;
    }

    mountBody() {
        let andRequest: string = "";
        if (this.curlProperties.body && this.curlProperties.method !== 'GET') {
            andRequest = `\n And request ${this.curlProperties.body}`;
        }
        return andRequest;
    }

    mountHeader() {
        let andHeader = "";
        this.curlProperties.headers.forEach( element  => {
            andHeader += `\n And header ${element.name.trim()} = "${element.value.trim()}"`
        })
        return andHeader;
    }

    mountMethod() {
        let method: string = ""
        switch(this.curlProperties.method) {
            case 'GET': 
                method = `When method get`;
                break;
            case "POST": 
                method = `When method post`;
                break;
            case "PUT": 
                method = `When method put`;
                break;
            case "DELETE": 
                method = `When method delete`;
                break;
        }
        return "\n "+method;
    }
}