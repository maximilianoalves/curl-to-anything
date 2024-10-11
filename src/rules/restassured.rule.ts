import CurlverterCore from './curlverter.core'

export default class RestAssuredRule {

    curlProperties: CurlverterCore;

    constructor(curl: string) {
        this.curlProperties = new CurlverterCore(curl);
    }

    mountSnippet() {
        return `given()${this.mountHeaders()}${this.mountBody()}\n${this.mountQueryParams()}.when()${this.mountUrl()}\n.then()`
    }

    mountQueryParams() {
        let queryParamsRestAssured = "";
        let queryParams = this.curlProperties.url?.searchParams ?? "";
        let params = queryParams?.toString().split("&")
        if (queryParams?.toString().length > 0) {
            params?.forEach(param => {
                let paramSplited = param.split("=");
                queryParamsRestAssured += `.queryParam("${paramSplited[0]}", "${paramSplited[1]}")\n`
            });
        }
        return queryParamsRestAssured;
    }

    mountUrl() {
        let method: string = ""
        let url = this.curlProperties.url?.href.toString()

        switch(this.curlProperties.method) {
            case 'GET': 
                method = `.get("${url}")`;
                break;
            case "POST": 
                method = `.post("${url}")`;
                break;
            case "PUT": 
                method = `.put("${url}")`;
                break;
            case "DELETE": 
                method = `.delete("${url}")`;
                break;
        }
        return "\n" + method;
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
        if (typeof this.curlProperties.body != 'undefined' && this.curlProperties.body && this.curlProperties.method !== 'GET') {
            body = `\n.body(${this.curlProperties.body})`;
        }
        return body;
    }
    
}