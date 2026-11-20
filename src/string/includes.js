var url = "https://prod.hub.fake/cancel"

if(url.includes("prod.hub.fake")) console.log(true)
else console.log(false)

var cwp = {
	"url": "https://prod.hub.fake/request",
	"quota": "10",
	"timeout_connection": "5000",
	"timeout_read": "30000",  //!
	"scope": "oob",
	"authentication": {
		"type": "TokenAPI",
		"grant_type": "client_credentials",
		"key": "fake",
		"secret": "fake",
		"url_login": "https://prod.hub.fake/oauth2/token"
	}
}

let ob = JSON.parse(cwp)
let string = ob.url

if(string.includes("hub.fake")) console.log(true)
else console.log(false)