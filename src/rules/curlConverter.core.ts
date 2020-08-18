export default class CurlConverterCore {

    curl: string;
    url?: string;
    method?: string;
    body?: string
    headers: {name: string, value: string }[]

    constructor(curl: string) {
        this.curl = curl;
        this.headers = []
        this.converter()
    }

    converter() {
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
                let request = value.split(" ");
                this.method = request[1];
                this.url = request[2];
            }
        })
    }
}