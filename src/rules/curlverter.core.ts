/**
 * Implements the main features to generate snippets for each language
 */

export default class CurlverterCore {

    curl: string;
    url?: URL;
    method?: string;
    body: string
    headers: {name: string, value: string }[]

    constructor(curl: string) {
        this.curl = curl;
        this.headers = [];
        this.body = "";
        this.converter()
    }

    converter() {
        if (this.curl.includes("--")) {
            let curlSplited = this.curl.split("--");
            curlSplited.forEach( (value) => {
                if (value.includes("header")) {
                    let header = value.split("'");
                    let headerValues: string[] = header[1].split(":");
                    this.headers.push({name: headerValues[0], value: headerValues[1]})
                }
                if (value.includes("data-raw")) {
                    let bodySplited = value.split("'");
                    this.body = bodySplited[1];
                }
                if (value.includes("request")) {
                    this.createUrl(value)
                }
            })
        } else {
            let curlSplited = this.curl.split(" -");
            curlSplited.forEach( (value) => {
                if (value.includes("H")) {
                    let header = value.split("\"");
                    let headerValues: string[] = header[1].split(":");
                    this.headers.push({name: headerValues[0], value: headerValues[1]})
                }
                if (value.includes("d")) {
                    let bodySplited = value.split(" \"");
                    this.body = bodySplited[1];
                }
                if (value.includes("X")) {
                    this.createUrl(value)
                }
            })
        }
        
    }

    createUrl(value: String) {
        let requestSplited = value.split(" ");
        this.method = requestSplited[1];
        let urlSplited = requestSplited[2].split("'")
        this.url = new URL(urlSplited[1]);
    }
}