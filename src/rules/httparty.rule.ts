import CurlverterCore from './curlverter.core'

export default class HttpartyRule {

    curlProperties: CurlverterCore;

    constructor(curl: string) {
        this.curlProperties = new CurlverterCore(curl);
    }

    mountSnippet() {
        return `HTTParty.${this.mountUrl()}${this.mountHeaders()})`
    }

    mountUrl() {
        let method: string = ""
        let url = this.curlProperties.url?.toString().substring(0, this.curlProperties.url.toString().indexOf("?"))
        switch(this.curlProperties.method) {
            case 'GET': 
                method = `get('${url}', `;
                break;
            case "POST": 
                method = `post('${url}', `;
                break;
            case "PUT": 
                method = `put('${url}', `;
                break;
            case "DELETE": 
                method = `delete('${url}', `;
                break;
        }
        return method;
    }

    mountHeaders() {

        if(this.curlProperties.headers.length > 0) {
            let headerSnippet: string = " :headers => {";
            this.curlProperties.headers.forEach((element, index) => {
                if (index === this.curlProperties.headers.length -1) {
                    headerSnippet += `'${element.name.trim()}': '${element.value.trim()}' `
                } else {
                    headerSnippet += `'${element.name.trim()}': '${element.value.trim()}', `
                }
            })
            headerSnippet += "}, ";
            return headerSnippet;
        } else {
            return ""
        }
    }
}