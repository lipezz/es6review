var myjso = "{\"url\": \"https://abc.intranet/contas/email/notificacao-Call-Back\",\"quota\": \"5\",\"timeout_connection\": \"1000\",\"timeout_read\": \"5000\",\"scope\": \"oob\",\"authentication\": {\"type\": \"None\"}}"

var myjso2 = "{    \"url\": \"https://api.fake.com.br\",    \"quota\": \"4\",    \"timeout_connection\": \"1000\",    \"timeout_read\": \"5000\",    \"scope\": \"oob\",    \"authentication\": {        \"type\": \"None\"       }}"

var cleanjso = myjso.replace( /[\\]+/gm, "")
var cleanjso2 = myjso2.replace( /[\\]+/gm, "")

function test(s) {
    console.log(s)
}

test(cleanjso)
test(cleanjso2)