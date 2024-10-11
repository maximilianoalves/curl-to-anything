import CurlverterCore from './curlverter.core'

export default class SupertestRule {

    curlProperties: CurlverterCore;

    constructor(curl: string) {
        this.curlProperties = new CurlverterCore(curl);
    }

    mountSnippet() {
        return `${this.mountBody()}${this.mountUrl()}${this.setBody()}${this.mountHeaders()}`
    }

    mountUrl() {
        let method: string = ""
        let url = this.curlProperties.url?.origin
        let pathname = this.curlProperties.url?.pathname
        switch(this.curlProperties.method) {
            case 'GET': 
                method = `supertest("${url}").get("${pathname}")`;
                break;
            case "POST": 
                method = `supertest("${url}").post("${pathname}")`;
                break;
            case "PUT": 
                method = `supertest("${url}").put("${pathname}")`;
                break;
            case "DELETE": 
                method = `supertest("${url}").delete("${pathname}")`;
                break;
        }
        return method;
    }

    mountHeaders() {
        let headerSnippet: string = "";
        this.curlProperties.headers.forEach( element  => {
            headerSnippet += `.set("${element.name.trim()}", "${element.value.trim()}")`
        })
        return headerSnippet;
    }

    mountBody() {
        let body: string = ""
        if (typeof this.curlProperties.body != 'undefined' && this.curlProperties.body && this.curlProperties.method !== 'GET') {
            body = `let body = ${this.curlProperties.body}\n\n`;
        }
        return body;
    }

    setBody() {
        let body: string = ""
        if (typeof this.curlProperties.body != 'undefined' && this.curlProperties.body && this.curlProperties.method !== 'GET') {
            body = `.send(body)`;
        }
        return body;
    }
}