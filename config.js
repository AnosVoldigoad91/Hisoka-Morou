/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['6288804947282','6288804947282','6288804947282']
global.premium = ['6288804947282']
global.packname = 'Gojo Satoru'
global.author = 'WhatsApp Bot'
global.sessionName = 'Gojo'
global.prefa = ['','!','.','#','/','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Di Jadiin Admin Dulu Cuy',
    owner: 'Yang Bisa Pake Fiturnya Cuman Owner Gw Ngab:v',
    group: 'Cuman Bisa Di Pake Di Grup Ngab Fiturnya:v',
    private: 'Wehh Fiturnya Cuman Bisa Di Pake Di Privat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Bentar:v....',
    endLimit: 'Limit Harian Mu Telah Habis Ngab, Limit Mu Akan Direset Setiap Jam 11',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: '' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
