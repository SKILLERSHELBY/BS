/*
* Bacot
*/

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    mentionedJid,
    processTime,
} = require('@adiwajshing/baileys')

// Load Js File
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { menuadmin } = require('./src/menuadmin')
const { nsfwmenu } = require('./src/nsfwmenu')
const { virtex } = require('./src/virtex')
const { zeusmenu } = require('./src/zeusmenu')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { ind } = require('./language')

// Load Npm Package
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')
const cd = 4.32e+7
const crypto = require('crypto')
const qrcode = require("qrcode-terminal")
const axios = require('axios')

// Load Json File
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/json/uang.json'))
const _registered = JSON.parse(fs.readFileSync('./database/json/registered.json'))

/*let {
    botName,
    ownerName,
    BarBarKey,
} = ('./settings/setting')*/

// Load Menu File
const { help } = require('./database/menu/help')
const { logomaker } = require('./database/menu/logomaker')
const { adult } = require('./database/menu/adult')
const { downloader } = require('./database/menu/downloader')
const { education } = require('./database/menu/education')
const { fun } = require('./database/menu/fun')
const { group } = require('./database/menu/group')
const { imagemaker } = require('./database/menu/imagemaker')
const { information } = require('./database/menu/information')
const { islam } = require('./database/menu/islam')
const { kerang } = require('./database/menu/kerang')
const { meme } = require('./database/menu/meme')
const { music } = require('./database/menu/music')
const { nsfwmenu } = require('./database/nsfwmenu')
const { other } = require('./database/menu/other')
const { owner } = require('./database/menu/owner')
const { search } = require('./database/menu/search')
const { sound } = require('./database/menu/sound')
const { stalk } = require('./database/menu/stalk')
const { stayonscreen } = require('./database/menu/stayonscreen')
const { stickermaker } = require('./database/menu/stickermaker')
const { tod } = require('./database/menu/tod')
const { wibu } = require('./database/menu/wibu')
const { xp } = require('./database/menu/xp')
const { limit } = require('./database/menu/limit')
const { zeusmenu } = require('./database/zeusmenu')

// Load Vcard Contact
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:ZEUS\n' //NAMA LU
            + 'ORG:Owner Bot;\n' // NAMA CONTACT OWNER
            + 'TEL;type=CELL;type=VOICE;waid=556993899391:+55 69 9389-9391\n' // NOMER OWNER
            + 'END:VCARD'
prefix = '*'//PREFIX BOT
blocked = ['556993899391']//NOMER BLOCK
limitawal = '50'
cr = '*BOT WHATSAPP*'

// Functions
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }
        const getLimit = (sender) => {
                let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }

        const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/json/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }

        const addATM = (sender) => {
                const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
        }

        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }

        const checkATMuser = (sender) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }

        const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }

        const confirmATM = (sender, amount) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }

        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./Nazwa.json') && client.loadAuthInfo('./Nazwa.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nazwa.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Halo @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}\nJangan Lupa Intro Ngab\nNama:\nUmur:\nAsal:\n\nWelcome Ngab Moga Betah*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Byee nak pongooottt @${num.split('@')[0]},Balik Lagi Biar Gak Di Bilang Anak Pongot`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                        const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
                        const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			const date = moment.tz('Asia/Jakarta').format('DD,MM,YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
                        const tescuk = ["0@s.whatsapp.net"]
                        const q = args.join(' ')

			mess = {
				wait: 'Tou lembrando como que faz peraew⏳',
				success: '[ ✔ ]Funfou',
                                levelon: '[✔ ]*O level foi ativado*',
				leveloff: '[ ❌ ]*O level foi desativado*',
				levelnoton: '[ ❌ ]*O level nao está ativo*',
				levelnol: '*LEVEL KAKAK MASIH* 0 *-*',
				error: {
					stick: '[❌ ] Falha, ocorreu um erro ao converter a imagem em figurinha',
					Iv: '[ ❌ ]Link inválido.'
				},
				only: {
					group: '[❗] Esse comando só pode ser usado em grupos!',
					ownerG: '[❗] Esse comando só pode ser usado pelo proprietário do grupo!',
					ownerB: '[❗] Esse comando só pode ser usado pelo proprietário do bot!',
					admin: '[❗] Este comando só pode ser usado por administradores de grupo!',
					Badmin: '[❗] Este comando só pode ser usado quando o bot se torna administrador!',
                                        daftarB: `[ REGISTRE-SE ]\nOlá !\nVoce  ainda nao está registrado no banco de dados! \n\nComando : ${prefix}rg nome|idade\nExemplo : ${prefix}rg Zeus|18`,
				}
			}
    			const apakah = ['Ya','Tidak','Yoi','Pasti','Mungkin','Kaga Mungkin']
        		const bisakah = ['Bisa','Tidak Bisa','Bisa Jadi','Kurang yakin','Pasti Bisa','Kaga Bakal Bisa']
		        const kapankah = ['1 Hari Lagi','2 Minggu Lagi','1 Bulan Lagi','1 Tahun Lagi','3 Hari Lagi','1 Minggu Lagi','4 Bulan Lagi','3 Tahun Lagi','20 Tahun Lagi']
			const botNumber = client.user.jid
			const ownerNumber = ["556993899391@s.whatsapp.net"] // Nomer Owner
			const nomorOwner = [ownerNumber]
			const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '556993899391@s.whatsapp.net'//Nomer Owner
                        const isEventon = isGroup ? event.includes(from) : false
                        const isRegister = checkRegisteredUser(sender)
                        pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined

                        // Options
                        const botName = 'BOT SHELBY'//Nama Bot
                        const ownerName = 'SKILLER'//Nama Owner
                        const BarBarKey = 'YOUR_APIKEY'//Apikey Mhank Bar Bar

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
                        const sendImage = (teks) => {
		                client.sendMessage(from, teks, image, {quoted:mek})
		        }
		        const costum = (pesan, tipe, target, target2) => {
			        client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		        const sendPtt = (teks) => {
		                client.sendMessage(from, audio, mp3, {quoted:mek})
		        }

	        //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Name*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nCongrats!! 🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }
            //function check limit
          const checkLimit = (sender) => {
                let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
                                }

                        //funtion limited
           const isLimit = (sender) =>{
                      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitawal ) {
                  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
                _limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
           return false
       }
     }



            //function balance
            if (isRegister && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
                     // Load Commands
			switch(command) {
                                case 'help':
                                case 'menu':
                                case 'bot':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			                const uangku = checkATMuser(sender)
                                        await costum(help(pushname, prefix, botName, ownerName, reqXp, uangku), text, tescuk, cr)
                                        break
                                case '18+menu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(adult(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'downloadermenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(from, downloader(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'educationmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(from, education(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'funmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(fun(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'groupmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(group(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'imagemakermenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(imagemaker(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'informationmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(information(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'islammenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(islam(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'kerangmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(kerang(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'logomakermenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(logomaker(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'mememenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(meme(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'musicmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(music(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'othermenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(other(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'ownermenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(owner(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'searchmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(search(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'soundmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(sound(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'stalkmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(stalk(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'stayonscreenmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(stayonscreen(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'stickermenu':
                                case 'stikermenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(stickermaker(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'todmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(tod(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'wibumenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(wibu(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'xpmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(xp(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'limitmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(limit(prefix, botName, ownerName), text, tescuk, cr)
                                        break 
                  case 'timer':
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break
                case 'bahasa':
		client.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})
                break
               case 'virtex':
               client.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
               break
               case 'kodenegara':
               client.sendMessage(from, negara(prefix, sender), text, {quoted: mek})
               break
				case 'rebaixar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag do destino que deseja rebaixar')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Pedido recebido, rebaixado do cargo de administrador :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Pedido recebido, rebaixado do cargo de administrador @${mentioned[0].split('@')[0]}\n\nVirou membro comum no *${groupMetadata.subject}*_`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
                                case 'randomhentai':
                                        gatauda = body.slice(6)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
                                        break
                                case 'loli':
                                        gatauda = body.slice(6)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
                                        break
                  case 'promover':
					client.updatePresence(from, Presence.composing) 
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di promote!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recebido, foi promovido como administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, menambah jabatan sebagai admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				  case 'wa.me':
				  case 'wame':
  client.updatePresence(from, Presence.composing) 
      options = {
          text: ` *SELF WHATSAPP* \n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSeu link do Whatsapp : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: mek } )
				break
				if (data.error) return reply(data.error)
				reply(data.result)
				break
			case 'quotes':
				client.updatePresence(from, Presence.composing) 
                                if (!isRegister) return reply(mess.only.daftarB)
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
				data = await fetchJson(`http://mhankbarbars.herokuapp.com/api/randomquotes`)
				ez = `* Author :* ${data.author}\n* Quotes :* ${data.quotes}`
				reply(ez)
                                await limitAdd(sender)
				break
				case '3dtext':
                data = await await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${body.slice(8)}`)
                if (!isRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                client.sendMessage(from, data, image, {quoted: mek, caption: body.slice(8)})
                await limitAdd(sender)
                break
                case 'fml':
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                if (!isRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                hasil = data.result.fml
                reply(hasil)
                await limitAdd(sender)
                break
              case 'owner':
                case 'creator':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
               client.sendMessage(from, 'Aqui está o numero do meu criador, chama ele ai depois:)',MessageType.text, { quoted: mek} )
                break
	case 'hidetag':
                client.updatePresence(from, Presence.composing) 
                if (!isRegister) return reply(mess.only.daftarB)
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(9)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await client.sendMessage(from, options, text)
               break
                                case 'tiktokstalk':
					try {
						if (args.length < 1) return client.sendMessage(from, 'Qual é o nome de usuario? ', text, {quoted: mek})
                                                if (!isRegister) return reply(mess.only.daftarB)
                                                if (isLimit(sender)) return reply(ind.limitend(pusname))
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Nome de usuario* : ${user.uniqueId}\n*Apelido* : ${user.nickname}\n*Seguidores* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Postagens* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
                                                await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Nome de usuario inválido')
					}
					break
				case 'snowwrite':
					var gh = body.slice(11)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply(`Kirim perintah ${prefix}snowwrite teks1|teks2, contoh ${prefix}snowwrite aqulzz|galuh`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					break
				case 'marvellogo':
					var gh = body.slice(12)
					if (args.length < 1) return reply(`Enviar pedidos ${prefix}marvellogo texto, exemplo ${prefix}marvellogo Zeus Criador`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=snow&text=${gh}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					break
				case 'artinama':
                  client.updatePresence(from, Presence.composing) 
                  if (!isRegister) return reply(mess.only.daftarB)
                  if (isLimit(sender)) return reply(ind.limitend(pusname))
                    data = await fetchJson(`https://arugaz.my.id/api/primbon/artinama?name=${body.slice(10)}`)
                   reply(data.result)
                   await limitAdd(sender)
                   break
		case 'infonomor':
               client.updatePresence(from, Presence.composing) 
                 if (!isRegister) return reply(mess.only.daftarB)
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
                 if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = ` internasional : ${data.international}\n nomor : ${data.nomor}\n operator : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
                break
                   case 'map':
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                   if (!isRegister) return reply(mess.only.daftarB)
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                   hasil = await getBuffer(data.gambar)
                   client.sendMessage(from, hasil, image, {quoted: mek, caption: `Hasil Dari *${body.slice(5)}*`})
                   await limitAdd(sender)
                   break
                   case 'covidcountry':
                   client.updatePresence(from, Presence.composing) 
                   if (!isRegister) return reply(mess.only.daftarB)
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                   data = await fetchJson(`https://arugaz.my.id/api/edu/corona?country=${body.slice(7)}`)
                   if (data.result) reply(data.result)
                   hasil = `Negara : ${data.result.country}\n\nActive : ${data.result.active}\ncasesPerOneMillion : ${data.result.casesPerOneMillion}\ncritical : ${data.result.critical}\ndeathsPerOneMillion : ${data.result.deathsPerOneMillion}\nrecovered : ${data.result.recovered}\ntestPerOneMillion : ${data.result.testPerOneMillion}\ntodayCases : ${data.result.todayCases}\ntodayDeath : ${data.result.todayDeath}\ntotalCases : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
                   reply(hasil)
                   await limitAdd(sender)
                   break
				case 'wiki':
					if (args.length < 1) return reply('digite a palavra-chave')
					tels = body.slice(6)	
                                        if (!isRegister) return reply(mess.only.daftarB)				
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${tels}&apikey=BotWeA`, {method: 'get'})
					reply(anu.result)
                                        await limitAdd(sender)
					break	
				case 'wikien':
					if (args.length < 1) return reply('digite a palavra-chave')
					tels = body.slice(8)		
			                if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://arugaz.my.id/api/edu/enwiki?query=${tels}`, {method: 'get'})
					reply(anu.result)
                                        await limitAdd(sender)
					break				
				case 'ytmp3':
				if (args.length < 1) return reply('Onde está a url hein?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytkli = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
					thumbgg = await getBuffer(anu.thumb)
					client.sendMessage(from, thumbgg, image, {quoted: mek, caption: ytkli})
					bufferhaje = await getBuffer(anu.result)
					client.sendMessage(from, bufferhaje, audio, {mimetype: 'audio/mp3', filename: `${anu.title}.mp3`, quoted: mek})
					await limitAdd(sender)
					break
				case 'ytmp4':
				if (args.length < 1) return reply('Onde está a url hein?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
					break
				case 'trendtwit':
					client.updatePresence(from, Presence.composing) 
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
                                        await limitAdd(sender)
					break
				case 'testime':
					setTimeout( () => {
					client.sendMessage(from, 'Tempo limite', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, 'Mais 5 segundos', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, 'Mais 10 segundos', text) // ur cods
					}, 0) // 1000 = 1s,
					break
				/*case 'semoji':
					if (args.length < 1) return reply('emojinya mana um?')
                                        if (!isRegister) return reply(mess.only.daftarB)
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(8).trim()
					anu = await fetchJson(`https://mhankbarbars.tech/api/emoji2png?emoji=${teks}&apikey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker)
						fs.unlinkSync(rano)
					})
					break*/
				case 'tahta':
				      if (args.length < 1) return reply('onde está o texto hum\nExemplo: ${prefix}o trono eu te odeio .')
                                      if (!isRegister) return reply(mess.only.daftarB)
                                      if (isLimit(sender)) return reply(ind.limitend(pusname))
			               tah = body.slice(7)
					   reply(mess.wait)
					   ta = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${tah}&apikey=apivinz`)
					   client.sendMessage(from, ta, image, {caption: 'Aqui mano', quoted: mek})
				break
				case 'nulis':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					var gold51 = body.slice(7)
                                        var gold291 = gold51.split("|")[0];
					reply(mess.wait)
					nullis = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${gold291}&apikey=apivinz`)
					client.sendMessage(from, nullis, image, {caption: 'Aqui mano', quoted: mek})
					break
	case 'kbbi':
            client.updatePresence(from, Presence.composing) 
                if (args.length < 1) return reply(`Faça uma pergunta\nExemplo : ${prefix}kbbi oi?`)
                if (!isRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
	      tels = body.slice(6)
              data = await fetchJson(`https://tobz-api.herokuapp.com/api/kbbi?kata=${tels}&apikey=BotWeA`)
              if (data.error) return reply(data.error)
              hasil = `${data.result}`
              reply(hasil)
              await limitAdd(sender)
              break
          case 'goldbutton':
                           var gold = body.slice(12)
                          var gold2 = gold.split("|")[0];
                           if (args.length < 1) return reply('onde está o textoå\nExemplo: ${prefix}goldbutton âncora')
                           if (!isRegister) return reply(mess.only.daftarB)
                           if (isLimit(sender)) return reply(ind.limitend(pusname))
                           reply(mess.wait)
                           gold3 = await fetchJson(`https://api.zeks.xyz/api/gplaybutton?text=${gold2}&apikey=apivinz`, {method: 'get'})
                           gold4 = await getBuffer(gold3.result)
                           client.sendMessage(from, gold4, image, {quoted: mek, caption: 'Aqui está...'})
                           await limitAdd(sender)
                           break
				case 'silverbutton':
				if (!isRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gold3 = body.slice(14)
                                        var gold23 = gold3.split("|")[0];
					if (args.length < 1) return reply('Onde está o texto?')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/splaybutton?text=${gold23}&apikey=apivinz`, {method: 'get'})
					gools2 = await getBuffer(anu.result)
					client.sendMessage(from, gools2, image, {quoted: mek})
					break
				case 'triggerd':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranpll = getRandom('.gif')
                                        ranoll = getRandom('.webp')
                                        anu1ll = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                                         exec(`wget ${anu1ll} -O ${ranpll} && ffmpeg -i ${ranpll} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranoll}`, (err) => {
                                                fs.unlinkSync(ranpll)
                                                if (err) return reply(mess.error.stick)
                                                nobgll = fs.readFileSync(ranoll)
                                                client.sendMessage(from, nobgll, sticker, {quoted: mek})
                                                fs.unlinkSync(ranoll)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
		case 'glass':                                        
                                        if (isRegister) return  reply(mess.only.daftarB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranpkli = getRandom('.png')
                                        ranoklo = getRandom('.webp')
                                        anu1klo = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
                                         exec(`wget ${anu1klo} -O ${ranpkli} && ffmpeg -i ${ranpkli} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranoklo}`, (err) => {
                                                fs.unlinkSync(ranpkli)
                                                if (err) return reply(mess.error.stick)
                                                nobgklo = fs.readFileSync(ranoklo)
                                                client.sendMessage(from, nobgklo, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                       case 'colors':     
                                        if (isRegister) return  reply(mess.only.daftarB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranpkle = getRandom('.png')
                                        ranokla = getRandom('.webp')
                                        anu1kla = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                                         exec(`wget ${anu1kla} -O ${ranpkle} && ffmpeg -i ${ranpkle} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranokla}`, (err) => {
                                                fs.unlinkSync(ranpkle)
                                                if (err) return reply(mess.error.stick)
                                                nobgkla = fs.readFileSync(ranokla)
                                                client.sendMessage(from, nobgkla, sticker, {quoted: mek})
                                                fs.unlinkSync(ranokla)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                case 'wanted':                    
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranpkk = getRandom('.png')
                                        ranokk = getRandom('.webp')
                                        anu1kk = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
                                         exec(`wget ${anu1kk} -O ${ranpkk} && ffmpeg -i ${ranpkk} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranokk}`, (err) => {
                                                fs.unlinkSync(ranpkk)
                                                if (err) return reply(mess.error.stick)
                                                nobgkk = fs.readFileSync(ranokk)
                                                client.sendMessage(from, nobgkk, sticker, {quoted: mek})
                                                fs.unlinkSync(ranokk)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                case 'tomp3':
                if (!isRegister) return reply(mess.only.daftarB)
               if (isLimit(sender)) return reply(ind.limitend(pusname))
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❗Responda com um video❗')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌Falha ao converter vídeo para mp3❌')
						bufferb = fs.readFileSync(ran)
						client.sendMessage(from, bufferb, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
				case 'joox':
			tels = body.slice(6)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${tels}&apikey=BotWeA`, {method: 'get'})
               if (!isRegister) return reply(mess.only.daftarB)
               if (isLimit(sender)) return reply(ind.limitend(pusname))
               if (data.error) return reply(data.error)
                 infomp3 = `*Musica encontrada!*\nTítulo : ${data.result.judul}\nAlbum : ${data.result.album}\nPublicado : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
				case 'blocklist':
					teks = 'Esta é a lista de números bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                   case 'chatlist':
					client.updatePresence(from, Presence.composing)  
					teks = 'Esta é a lista de números de bate-papo :\n'
					for (let all of totalchat) {
						teks += `~> @${all}\n`
					}
					teks += `Total : ${totalchat.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break
				case 'animecry':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry&apikey=BotWeA', {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'neonime':
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					teks = '################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
					}
					reply(teks.trim())
                                        await limitAdd(sender)
					break  
					case 'bpink':
                  if (args.length < 1) return reply(`Entrada de texto\Exemplo : ${prefix}Zeus Bot`)
                data = await getBuffer(`https://docs-jojo.herokuapp.com/api/blackpink?text=${body.slice(7)}`)
                if (!iRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                client.sendMessage(from, data, image, {quoted: mek, caption: body.slice(7)})
                await limitAdd(sender)
                break
				case 'audio':
				   client.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return client.sendMessage(from, 'Qual é a sigla do pais?', text, {quoted: mek})
                                   if (!isRegister) return reply(mess.only.daftarB)
                                   if (isLimit(sender)) return reply(ind.limitend(pusname))
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Onde está o texto?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('O máximo de letras sao 600')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Falha:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
                                        await limitAdd(sender)
					break
				case 'listadmins':
				case 'adminlist':
					client.updatePresence(from, Presence.composing) 
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'pokemon':
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
                                        await limitAdd(sender)
					break
                case 'pinterest':
                                        tels = body.slice(11)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${tels}`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*\n\*Resultado da pesquisa* : *${tels}*`})
                                        await limitAdd(sender)
					break
				case 'setprefix':
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
				case 'meme':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'block':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(8)}@c.us`, text)
					break
				case 'hilih':
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'marcar':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - 〙', members_id, true)
					break
                case 'marcar2':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - 〙', text, {quoted: mek})
					break
                case 'marcar3':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - - 〙', text, {detectLinks: false, quoted: mek})
					break
                        case 'marcar4':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@c.us\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - - 〙', text, {quoted: mek})
					break
                case 'marcar5':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					reply('╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - - 〙')
					break
				case 'send':
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var pesan = pc.split("|")[1];
					client.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
					break
					case 'quotesnime':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					nimek = await fetchJson('https://arugaz.my.id/api/anime/animequotes')
					hasil = `*Anime* : ${nimek.data.anime}\n*Character* : ${nimek.data.character}\n*Quotes* : ${nimek.data.quote}`
					reply(hasil)
                                        await limitAdd(sender)
					break
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil😃')
					break
				case 'tm':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*[ TRANSMISSAO ]*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*[ ZEUS BROADCAST ]*\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
					case 'tmctt':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							client.sendMessage(_.jid, buff, image, {caption: `* BC GROUP *\n*Group* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `* BC GROUP *\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Transmissao feita com sucesso')
					}
					break
				case 'alay':
                    client.updatePresence(from, Presence.composing) 
                    if (!isRsgister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    data = await fetchJson(`https://arugaz.my.id/api/edu/corona?country=indonesia}`)
                    reply(data.result)
                    await limitAdd(sender)
                    break
                    case 'quotemaker':
                    ghlkj = body.slice(12)
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    teks12 = ghlkj.split("|")[0];
                    teks22 = ghlkj.split("|")[1];
                    teks32 = ghlkj.split("|")[2]
                    data2 = await fetchJson(`https://terhambar.com/aw/qts/?kata=${teks12}&author=${teks22}&tipe=${teks32}`)
                    bufferkali = await getBuffer(data2.result)
                    client.sendMessage(from, bufferkali, image, {quoted: mek, caption: 'neh...'})
                    await limitAdd(sender)
                    break
                    case 'glitch':
                    ghbot = body.slice(7)
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    teks1kon = ghbot.split("|")[0];
                    teks2kon = ghbot.split("|")[1];
                    data = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${teks1kon}&text2=${teks2kon}&apikey=BotWeA`, {method: 'get'})
                    hasilkon = await getBuffer(data.result)
                    client.sendMessage(from, hasilkon, image, {quoted: mek, caption: 'neh...'})
                    await limitAdd(sender)
                    break
                     case 'sairgp':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                     setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Tchauzinho', text) // ur cods
					}, 0)
                     break

				case 'chord':
					if (args.length < 1) return reply('Qual é o titulo da musica?')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					chorr = body.slice(7)					
					anu = await fetchJson(`https://arugaz.my.id/api/chord?q=${chorr}`, {method: 'get'})
					reply(anu.result)
                                        await limitAdd(sender)
					break
				case 'lirik':
					if (args.length < 1) return reply('Qual o nome da musica?')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					lirr = body.slice(7)
					anu = await fetchJson(`https://arugaz.my.id/api/lirik?judul=${lirr}`, {method: 'get'})
					reply(anu.result)
                                        await limitAdd(sender)
					break
			case 'igstalk':
                      if (!isRegister) return reply(mess.only.daftarB)
                      if (isLimit(sender)) return reply(ind.limitend(pusname))
                      hmm3 = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     bufferhas = await getBuffer(hmm3.data.profilehd)
                     hasilsi = `Nome completo : ${hmm3.data.fullname}\npengikut : ${hmm3.data.follower}\nSegue : ${hmm3.data.following}\nPrivado : ${hmm3.data.private}\nVerificado : ${hmm3.data.verified}\nbio : ${hmm3.data.bio}`
                    client.sendMessage(from, bufferhas, image, {quoted: mek, caption: hasilsi})
                    await limitAdd(sender)
                    break
                    case 'ownergrup':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
              options = {
          text: `O proprietario do grupo é : @${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
				break
           case 'quran':
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					client.sendMessage(from, quran, text, {quoted: mek})
					break
           case 'nekonime':
           data = await fetchJson('https://waifu.pics/api/sfw/neko')
           if (!isRegister) return reply(mess.only.daftarB)
           if (isLimit(sender)) return reply(ind.limitend(pusname))
           hasil = await getBuffer(data.url)
           client.sendMessage(from, hasil, image, {quoted: mek})
           await limitAdd(sender)
           break
				case 'neko':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					break	
				case 'add':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Quem voce quer adicionar?')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break

				case 'remover':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marca quem voce deseja remover')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Tchauzinho otário :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Tchauzinho otário : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					client.sendMessage(mentioned, 'Se fodeo ksksk', text)
					}
					break
				case 'exe':
	              client.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply(mess.only.ownerB)
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return client.sendMessage(from, "Comando errado", text, { quoted: mek })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break
                 case 'linkgp':
				case 'linkgrup':
				case 'linkgc':
				    client.updatePresence(from, Presence.composing) 
				    if (!isGroup) return reply(mess.only.group)
                                     if (!isRegister) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await client.groupInviteCode (from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
					client.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
					break
                case 'qrcode':
                if (!isRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				client.sendMessage(from, buff, image, {quoted: mek})
                                await limitAdd(sender)
				break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Marca uma foto')
					}
					break

                      case 'bugreport':
                     const bug = body.slice(5)
                      if (pesan.length > 300) return client.sendMessage(from, 'Desculpe, o texto é muito longo, máximo de palavras', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       teks1 = `*[REPORT]*\nNumero : @${nomor.split("@s.whatsapp.net")[0]}\nMensagem : ${pesan}`
                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage(NomerOwner, options, text, {quoted: mek})
                    reply('Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos.')
                    break
               case 'apakah':
               client.updatePresence(from, Presence.composing) 

               random = apakah[Math.floor(Math.random() * (apakah.length))]
  	
			   hasil = `Pergunta : *${body.slice(1)}*\n\nResposta : *${random}*`
			   reply(hasil)
			   break
              case 'bisakah':
                client.updatePresence(from, Presence.composing) 
              if (!isRegister) return reply(mess.only.daftarB)
                random = bisakah[Math.floor(Math.random() * (bisakah.length))]
  	
			   hasil = `Pergunta : *${body.slice(1)}*\n\nResposta : *${random}*`
			   reply(hasil)
			   break
               case 'avalie':
              client.updatePresence(from, Presence.composing) 
              if (!isRegister) return reply(mess.only.daftarB)
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Pergunta : *${body.slice(1)}*\n\nResposta : *${random}%*`
              reply(hasil)
                break
	    case 'kapankah':
               client.updatePresence(from, Presence.composing) 
                if (!isRegister) return reply(mess.only.daftarB)
               random = kapankah[Math.floor(Math.random() * (kapankah.length))]
               random2 = `${Math.floor(Math.random() * 8)}`
               hasil = `Pergunta : *${body.slice(1)}*\n\nResposta : *${random2} ${random}*`
              reply(hasil)
                break
			case 'fechargp':
			case 'group close':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `O grupo foi fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora *apenas administradores* podem enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
                case 'abrirgp':
                case 'group open':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nagora *todos os participantes* podem enviar mensagens`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					client.sendMessage(from, open, text, {quoted: mek})
					break
				case 'figu':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
                                                if (!isRegister) return reply(mess.only.daftarB)
                                                if (isLimit(sender)) return reply(ind.limitend(pusname))
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(` Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
                                                await limitAdd(sender)
						break
				case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug&apikey=BotWeA', {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break

				case 'toimg':
				    client.updatePresence(from, Presence.composing)
                                    if (!isRegister) return reply(mess.only.daftarB)
					if (!isQuotedSticker) return reply('❗Responda uma figurinha❗')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❗Falha ao converter adesivos em imagens❗')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
                	case 'virarmp3':
                	client.updatePresence(from, Presence.composing) 
                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isQuotedVideo) return reply('❗Responda um video❗')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❗ Falha ao converter vídeo para mp3 ❗')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break

                case 'ninjalogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      if (!isRegister) return reply(mess.only.daftarB)
                      if (isLimit(sender)) return reply(ind.limitend(pusname))
                      ghffs = body.slice(11)
                      gl1 = ghffs.split("|")[0];
                      gl2 = ghffs.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
                      buffbgi = await getBuffer(anu.result)
                      client.sendMessage(from, buffbgi, image, {quoted: mek})
                      await limitAdd(sender)
                      break
                         case 'musica':
			mus = body.slice(6)
                mus1 = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${mus}&apikey=apivinz`, {method: 'get'})
               if (!isRegister) return reply(mess.only.daftarB)
               if (isLimit(sender)) return reply(ind.limitend(pusname))
               if (mus1.error) return reply(mus1.error)
                 muss = `*Musica encontrada!!*\nTitulo : ${mus1.result.title}\nTamanho : ${mus1.result.size}\nLink : ${mus1.result.source}\nA música está sendo enviada... Aguarde!!`
                buffer = await getBuffer(mus1.result.thumbnail)
                muss2 = await getBuffer(mus1.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: muss})
                client.sendMessage(from, muss2, audio, {mimetype: 'audio/mp4', filename: `${mus1.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
                     case 'infocuaca':
                   cuaa = body.slice(11)
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cuaca?wilayah=${cuaa}&apikey=BotWeA`, {method: 'get'})
                   if (!isRegister) return reply(mess.only.daftarB)
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (anu.error) return reply(anu.error)
                   hasilcua = ` *O lugar : ${anu.tempat}\nClima : ${anu.cuaca}\nVento : ${anu.angin}\nTemperatura : ${anu.suhu}\nUmidade : ${anu.kelembapan}`
                   client.sendMessage(from, hasilcua, text, {quoted: mek})
                   await limitAdd(sender)
                   break
                              case 'game':
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
                                        if (!isUser) return reply(mess.only.daftarB)
					setTimeout( () => {
					client.sendMessage(from, '*Responda :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 segundos para ir�_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 segundos para ir_�', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 segundos para ir_�', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                                case 'bv':
					if (!isGroup) return reply(mess.only.group)
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para ativar')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('o recurso está ativo')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('bv foi ativado nesse grupo')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, disable)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('bv foi desativado nesse grupo')
					} else {
						reply('digite 1 para ativar, 0 para desativar o recurso')
					}
                                        break
                                case 'fakta':
					fakta = body.slice(1)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					const fakta =['Massa bumi mencapai 5.972.190.000.000.000.000.000.000 kg. Mesekipun sedemikian berat, faktanya bumi memiliki kecepatan 107.281 km per jam untuk mengitari matahari. Cepat sekali, bukan?','Massa berat bumi didominasi debu-debu antariksa dan dapat berkurang akibat gas seperti hidrogen yang berkurang tiga kilogram setiap detiknya. Fakta unik ini menunjukkan bahwa bumi akan kehilangan 95 ribu ton massa setiap tahunnya','Pada 2018 populasi manusia diperkirakan mencapai 7,6 miliar orang. Meskipun bumi dipenuhi manusia, fakta unik mengungkapkan bahwa manusia tidak memengaruhi massa bumi. Hal ini dikarenakan manusia terbentuk dari atom dalam bentuk oksigen 65 persen, karbon 18,5 persen, dan hidrogen 9,5 persen.','bumi dipenuhi oleh 70 persen air sehingga kerap wajar jika bumi disebut dengan nama planet air. Lautan bumi yang paling dalam adalah Palung Mariana dengan kedalaman 10.994 meter di bawah air. Fakta unik dibalik Palung Mariana adalah jika kamu meletakkan Gunung Everest di sana, puncak tertingginya bahkan masih berada di bawah permukaan laut sejauh 1,6 kilometer!','Faktanya bumi yang manusia tinggali hanya satu persen bagian dari keseluruhan planet bumi. Fakta unik ini menunjukkan bahwa masih banyak bagian bumi yang memiliki misteri kehidupan. Tertarik melakukan penjelajahan untuk menguak misteri sekaligus fakta unik di bagian bumi lainnya','Terdapat sebuah kota di Rusia yang jalanannya tertata rapi dengan sebuah istana yang didesain seperti catur yang megah. Pembuatan pemukiman tersebut didalangi oleh presiden yang terobsesi dengan catur bernama Kirsan Ilyumzhinov.','Apakah kamu tahu fakta unik mengenai mozzarella yang dibuat dari susu kerbau dan bukan susu sapi? Sekitar 500 tahun yang lalu di Campania, Italia, mozzarella dibuat pertama kali menggunakan susu kerbau. Fakta unik dibalik penggunaan susu kerbau ini karena kandungan protein susu kerbau 10-11% lebih banyak daripada susu sapi.','Bali memiliki fakta unik karena memliki banyak hari libur yang disumbangkan oleh sejumlah hari raya besar keagamaan. Hampir setiap hari besar keagamaan ini setiap orang akan mendapatkan libur. Beberapa hai libur diantaranya adalah hari raya galungan, kuningan, nyepi, pagerwesi, saraswati, dan sejumlah upacara besar lainnya seperti piodalan (pujawali).','Ibukota Jakarta memiliki banyak pesona juga fakta unik yang mungkin belum kamu ketahui. Sebelum diberi nama Jakarta, Ibukota Indonesia ini telah memiliki beberapa kali perubahan nama. Nama Ibukota Indonesia sesuai urutan perubahannya diantaranya adalah Sunda Kelapa, Jayakarta, Batavia, Betawi, Jacatra, Jayakarta, dan Jakarta.','Pada tahun 1952 jendela pesawat didesain dalam bentuk persegi namun penggunaannya dinilai cacat sehingga tidak  diterapkan kembali. Jendela yang bulat dirancang untuk menyiasati perbedaan tekanan udara dalam dan luar pesawat untuk menghindari kegagalan struktural yang dapat menyebabkan kecelakaan pesawat.','Makanan utama dari nyamuk jantan dan betina pada umumnya adalah nektar dan zat manis yang sebagian besar diperoleh dari tanaman. Namun nyamuk membutuhkan protein tambahan unuk bertelur yang bisa didapatkan dari manusia sedangkan nyamuk jantan tidak membutuhkan zat protein tambahan untuk bertelur.','Jembatan suramadu (surabaya-madura) adalah jembatan terpanjang di Asia Tenggara (5438 m).','Tertawa dan bahagia meningkatkan imun, terutama produksi sel-sel pembunuh alamiah yang membantu melindungi tubuh dari penyakit','Kecoa kentut setiap 15 menit dan terus mengeluarkan gas metana (kentut) selama 18 jam setelah kematian.','Mengoleskan jeruk nipis dapat mencerahkan bagian lutut / siku yang hitam.','Energi yang dihasilkan oleh angin ribut (topan) selama 10 menit lebih besar dibandingkan energi dari bom saat perang','Satu-satunya indera manusia yang tidak berfungsi saat tidur adalah indera penciuman.','Para astronot dilarang makan makanan berjenis kacang-kacangan sebelum pergi ke luar angkasa. Karena bisa menyebabkan mereka mudah kentut. Dan gas kentut sangat membahayakan bagi baju luar angkasa mereka.','Di AS saja, kucing membunuh miliaran hewan dalam kurun waktu setahun. Mereka bertanggung jawab atas kematian 1,4 - 73,7 miliar burung dan 6,9 - 20,7 miliar mamalia setiap tahun. Bukan hanya itu, sejauh ini mereka benar-benar memusnahkan total 33 spesies dari dunia.','Ikan hiu kehilangan gigi lebih dari 6000buah setiap tahun, dan gigi barunya tumbuh dalam waktu 24 jam.','Semut dapat mengangkat Beban 50 kali tubuhnya.','Mulut menghasilkan 1 liter ludah setiap hari.','Siput bisa tidur selama 3 tahun','Kecoak bisa hidup 9 hari tanpa kepala, dan akan mati karena kelaparan','Mata burung unta lebih besar dari otaknya']
					const keh = fakta[Math.floor(Math.random() * fakta.length)]
					client.sendMessage(from, 'fakta : '+ keh, { quoted: mek })
                                        await limitAdd(sender)
					break
                                case 'water':
					if (args.length < 1) return reply(mess.blank)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					telskla = body.slice(7)
					if (telskla.length > 15) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://kocakz.herokuapp.com/api/flamingtext/water?text=${telskla}`, {method: 'get'})
					bufferkmn = await getBuffer(anu.result)
					client.sendMessage(from, bufferkmn, image, {quoted: mek})
                                        await limitAdd(sender)
					break
				case 'firetext':
					if (args.length < 1) return reply(mess.blank)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					telsqsx = body.slice(7)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${telsqsx}&apikey=vinzapi`, {method: 'get'})
					buffesa = await getBuffer(anu.result)
					client.sendMessage(from, buffesa, image, {quoted: mek})
                                        await limitAdd(sender)
					break
                                case 'gantengcek':
					if (isRegister) return reply(mess.only.daftarB)
					ganteng = body.slice(1)
					const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					break
					case 'cantikcek':
					if (isRegister) return reply(mess.only.daftarB)
					cantik = body.slice(1)
					const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Pergunta : *'+cantik+'*\n\nResposta : '+ tik+'%', text, { quoted: mek })
					break
				case 'watak':
				if (isRegister) return reply(mess.only.daftarB)
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
					watak = body.slice(1)
					const wa =['peny ayang','pem urah','Pem arah','Pem aaf','Pen urut','Ba ik','bap eran','Baik Hati','peny abar','Uw u','top deh, poko knya','Suka Memb antu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pergunta : *'+watak+'*\n\nResposta : '+ tak, text, { quoted: mek })
                                        await limitAdd(sender)
				    break
				case 'hobby':
				if (isRegister) return reply(mess.only.daftarB)
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break
                                case 'nsfwneko':
				    try{
						if (!isNsfw) return reply('❌ *NSFW DESLIGADO* ❌')
                                                if (!isRegister) return reply(mess.only.daftarB)
                                                if (isLimit(sender)) return reply(ind.limitend(pusname))
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hihi >.<'})
                                                await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*❌FALHA❌*')
					}
					break
                                case 'shota':
				    try{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
                                                if (!isRegister) return reply(mess.only.daftarB)
                                                if (isLimit(sender)) return reply(ind.limitend(pusname))
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nich'})
                                                await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*❌FALHA❌*')
					}
					break
				case 'logowolf':
					var gh4 = body.slice(11)
					var teks14 = gh4.split("|")[0];
					var teks24 = gh4.split("|")[1];
					if (args.length < 1) return reply(`teksnya mana? contoh ${prefix}logowolf Teste|Latas`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${teks14}&text2=${teks24}&apikey=BotWeA`, {method: 'get'})
					bufferolf = await getBuffer(anu.result)
					client.sendMessage(from, bufferolf, image, {quoted: mek})
                                        await limitAdd(sender)
					break				
                                 case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Digite 1 para ativar')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('O recurso está ativo')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('O recurso nsfw foi ativado nesse grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('O recurso nsfw foi desativado nesse grupo')
					} else {
						reply('digite 1 para ativar e 0 para desativar nsfw')
					}
					break	
				case 'quotes2':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://arugaz.my.id/api/random/text/quotes`, {method: 'get'})
					reply(anu.quotes)
                                        await limitAdd(sender)
					break		
			    case 'waifu':
					gatauda = body.slice(7)
					reply(mess.wait)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://arugaz.my.id/api/nekonime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image,{quoted: mek})
                                        await limitAdd(sender)
					break
				case 'randomanime':
					gatauda = body.slice(13)
					reply(mess.wait)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					break						
                                case 'husbu':
                                        gatauda = body.slice(13)
					reply(mess.wait)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					break
				case 'husbu2':
					gatauda = body.slice(13)
					reply(mess.wait)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu2?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					break
				case 'logowolf2':
					var gh3 = body.slice(11)
					var teks13 = gh3.split("|")[0];
					var teks23 = gh3.split("|")[1];
					if (args.length < 1) return reply(`teksnya mana? contoh ${prefix}logowolf zeus|bot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo2&text1=${teks13}&text2=${teks23}&apikey=BotWeA`, {method: 'get'})
					bufferwol = await getBuffer(anu.result)
					client.sendMessage(from, bufferwol, image, {quoted: mek})
                                        await limitAdd(sender)
					break	
                                case 'apagar':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroupAdmins)return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                                case 'phlogo':
					var ghph = body.slice(7)
					var gbl1ph = ghph.split("|")[0];
					var gbl2ph = ghph.split("|")[1];
					if (args.length < 1) return reply('TQual é o texto?\nExemplo: ${prefix}phlogo |Zeus|Teste')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${gbl1ph}&text2=${gbl2ph}`, {method: 'get'})
					bufferph1 = await getBuffer(anu.result)
					client.sendMessage(from, bufferph1, image, {quoted: mek})
                                        await limitAdd(sender)
					break
                case 'truth':
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
                                case 'dare':
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break	
                case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                if (!isGroup) return reply(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `=>*LEVEL*\n=> *Name* : ${sem}\n=>*User XP* : ${userXp}\n=>*User Level* : ${userLevel}`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
				case 'calunia':
				if (args.length < 1) return reply(`Usa :\n${prefix}calunia [@tag|mensagem|resposta]]\n\nExemplo : \n${prefix}calunia @tagmember|oie|oi mano`)
				var fitn = body.slice(7)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace3 = fitn.split("|")[0];
					var target3 = fitn.split("|")[1];
					var bot3 = fitn.split("|")[2];
					client.sendMessage(from, `${bot3}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target3}` }}})
					break
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Digite 1 para ativar o recurso')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*o recurso de nível já estava ativo antes*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === '0') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(' *Digite o comando 1 para ativar, 0 para desativar* \n *Exemplo: ${prefix}leveling 1*')
                }
            break
                                case 'infogempa':
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=BotWeA`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (anu.error) return reply(anu.error)
                                        hasil = `*Kedalaman* : ${anu.kedalaman}\n*Koordinat* : ${anu.koordinat}\n*Lokasi* : ${anu.lokasi}\n*Magnitude* : ${anu.magnitude}\n*Map* : ${anu.map}\n*Potensi* : ${anu.potensi}\n*Waktu* : ${anu.waktu}`
                                        client.sendMessage(from, hasil, text, {quoted:mek})
                                        await limitAdd(sender)
                                        break
                                case 'nsfwtrap':
                                        try{
                                                if (!isNsfw) return reply('*❗nsfw está desligado❗*')
                                                if (!isRegister) return reply(mess.only.daftarB)
                                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                                                res = await fetchJson(`https://tobz-api.herokuapp.com/nsfwtrap?apikey=BotWeA`, {method: 'get'})
                                                buffer = await getBuffer(res.result)
                                                client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui está a foto...'})
                                                await limitAdd(sender)
                                        } catch (e) {
                                                console.log(`*Error* :`, color(e,'red'))
                                                reply('*❌FALHA❌*')
                                        }
                                        break
                                case 'ping':    
			   	        if (!isRegister) return reply(mess.only.userB)
                                        const timestamp = speed();
                                        const latensi = speed() - timestamp
                                        client.updatePresence(from, Presence.composing) 
				        uptime = process.uptime()
                                        client.sendMessage(from, `Velocidade: *${latensi.toFixed(4)} _Segundos_*\nDispositivo: *Tubarão Negro*\nRAM: *8/128*\Data: *Telakomsel*\nRede: *4G*\nStatus: *No carregador*`, text, { quoted: mek})
                                        break
                                /*case 'jadwaltvnow':  
				if (!isRegister) return reply(mess.only.daftarB)
                               reply(mess.wait)
		               anu = await fetchJson(`http://api-melodicxt.herokuapp.com/api/jadwaltvnow?&apiKey=administrator`, {method: 'get'})
			       reply(anu.result.jadwalTV)
					break*/
                                case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('irmão por causa de quê?')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        var nom = mek.participant
                                        const tag = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        client.sendMessage(from, tag, text, {quoted: mek})
                                        break
                                case 'neonlogo':
                                        ajg6 = body.slice(10)
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}neonlogo ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                         reply(mess.wait)
                                        ajgg6 = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_light&text=${ajgg6}&apikey=BotWeA`, {method: 'get'})
                                        ajggg6 = await getBuffer(ajgg6.result)
                                        client.sendMessage(from, ajggg6, image, {quoted: mek, caption: 'Nih kak logonya...'})
                                        await limitAdd(sender)
                                        break
                                case 'neonlogo2':
                                        ajg7 = body.slice(11)
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}neonlogo2 ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        ajgg7 = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_technology&text=${ajgg7}&apikey=BotWeA`, {method: 'get'})
                                        ajggg7 = await getBuffer(ajgg7.result)
                                        client.sendMessage(from, ajggg7, image, {quoted: mek, caption: 'Nih kak logonya...'})
                                        await limitAdd(sender)
                                        break
                                case 'lionlogo':
                                        var lii = body.slice(10)
                                        var lii1 = lii.split("|")[0];
                                        var lii2 = lii.split("|")[1];
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}lionlogo bacot|ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        lii3 = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${lii1}&text2=${lii2}&apikey=BotWeA`, {method: 'get'})
                                        lii4 = await getBuffer(lii3.result)
                                        client.sendMessage(from, lii4, image, {quoted: mek, caption: 'Nih kak logonya...'})
                                        await limitAdd(sender)
                                        break
                                case 'jokerlogo':
                                        ajg8 = body.slice(11)
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}jokerlogo ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        ajgg8 = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${ajg8}&apikey=BotWeA`, {method: 'get'})
                                        ajggg8 = await getBuffer(ajgg8.result)
                                        client.sendMessage(from, ajggg8, image, {quoted: mek, caption: 'Nih kak logonya...'})
                                        await limitAdd(sender)
                                        break
                                case 'shadow':
                                        var ghsha = body.slice(7)
                                        var konts = ghsha.split("|")[0];
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}shadow ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                                            reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=shadow&text=${konts}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kak gambarnya...'})
                                        await limitAdd(sender)
                                        break
                                case 'burnpaper':
                                        ajg5 = body.slice(11)
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}burnpaper ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        ajgg5 = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=burn_paper&text=${ajg5}&apikey=BotWeA`, {method: 'get'})
                                        ajggg5 = await getBuffer(ajgg5.result)
                                        client.sendMessage(from, ajggg5, image, {quoted: mek, caption: 'Nih kak gambarnya...'})
                                        await limitAdd(sender)
                                        break
                                case 'coffee':
                                        ajg4 = body.slice(8)
                                        if (args.length < 1) return reply('onde está o texto hum\nExemplo: ${prefix}coffee ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        ajgg4 = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=coffee&text=${ajg4}&apikey=BotWeA`, {method: 'get'})
                                        ajggg4 = await getBuffer(ajgg4.result)
                                        client.sendMessage(from, ajggg4, image, {quoted: mek, caption: 'Aqui está a foto...'})
                                        await limitAdd(sender)
                                        break
                                case 'lovepaper':
                                        ajg3 = body.slice(11)
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}lovepaper ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        ajgg3 = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=love_paper&text=${ajg3}&apikey=BotWeA`, {method: 'get'})
                                        ajggg3 = await getBuffer(ajgg3.result)
                                        client.sendMessage(from, ajggg3, image, {quoted: mek, caption: 'Nih gambarnya kak...'})
                                        await limitAdd(sender)
                                        break
                                case 'woodblock':
                                        ajg2 = body.slice(11)
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}woodblock ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        ajgg2 = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wood_block&text=${ajg2}&apikey=BotWeA`, {method: 'get'})
                                        ajggg2 = await getBuffer(ajgg2.result)
                                        client.sendMessage(from, ajggg2, image, {quoted: mek, caption: 'Nih gambarnya kak...'})
                                        await limitAdd(sender)
                                        break
                                case 'qowheart':
                                        ajg1 = body.slice(10)
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}qowheart ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        ajgg1 = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=quote_on_wood_heart&text=${ajg1}&apikey=BotWeA`, {method: 'get'})
                                        ajggg1 = await getBuffer(ajgg1.result)
                                        client.sendMessage(from, ajggg1, image, {quoted: mek, caption: 'Nih gambarnya kak...'})
                                        await limitAdd(sender)
                                        break
                                case 'mutgrass':
                                        ajg = body.slice(10)
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}mutgrass ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        ajgg = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=message_under_the_grass&text=${ajg}&apikey=BotWeA`, {method: 'get'})
                                        ajggg = await getBuffer(ajgg.result)
                                        client.sendMessage(from, ajggg, image, {quoted: mek, caption: 'Nih gambarnya kak...'})
                                        await limitAdd(sender)
                                        break
                                case 'undergocean':
                                        un = body.slice(13)
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}undergocean ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        und = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=underwater_ocean&text=${un}&apikey=BotWeA`, {method: 'get'})
                                        unde = await getBuffer(und.result)
                                        client.sendMessage(from, unde, image, {quoted: mek, caption: 'Nih gambarnya kak...'})
                                        await limitAdd(sender)
                                        break
                                case 'woodenboards':
                                        bo = body.slice(14)
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}woodenboards ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        boa = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wooden_boards&text=${bo}&apikey=BotWeA`, {method: 'get'})
                                        boar = await getBuffer(boa.result)
                                        client.sendMessage(from, boar, image, {quoted: mek, caption: 'Nih gambarnya kak...'})
                                        await limitAdd(sender)
                                        break
                                case 'wolfmetal':
                                        wo = body.slice(11)
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}wolfmetal ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        wol = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wolf_metal&text=${wo}&apikey=BotWeA`, {method: 'get'})
                                        wolf = await getBuffer(wol.result)
                                        client.sendMessage(from, wolf, image, {quoted: mek, caption: 'Nih gambarnya kak...'})
                                        await limitAdd(sender)
                                        break
                                case 'metalictglow':
                                        me = body.slice(14)
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}metalictglow anjing')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        met = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=metalic_text_glow&text=${me}&apikey=BotWeA`, {method: 'get'})
                                        meta = await getBuffer(met.result)
                                        client.sendMessage(from, meta, image, {quoted: mek, caption: 'Nih gambarnya...'})
                                        await limitAdd(sender)
                                        break
                                case '8bit':
                                        var bi = body.slice(6)
                                        var bi2 = bi.split("|")[0];
                                        var bit = bi.split("|")[1];
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}8bit Zeus|Anjay')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        bu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=bit8&text1=${bi2}&text2=${bit}&apikey=BotWeA`, {method: 'get'})
                                        bur = await getBuffer(bu.result)
                                        client.sendMessage(from, bur, image, {quoted: mek, caption: 'Nih gambarnya...'})
                                        await limitAdd(sender)
                                        break
                                case 'randomkpop':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                         reply(mess.wait)
                                        kpp = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
                                        kpp1 = await getBuffer(kpp.result)
                                        client.sendMessage(from, kpp1, image, {quoted: mek, caption: 'Ebaaaa kpop:)'})
                                        await limitAdd(sender)
                                        break
                                case 'fml2':
                                        getauda = body.slice(6)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        data = await fetchJson(`https://tobz-api.herokuapp.com/randomfmylife?apikey=BotWeA`, {method: 'get'})
                                        hasil = `*Fuck My Life*\n${data.result}`
                                        reply(hasil)
                                        await limitAdd(sender)
                                        break
                                case 'tiktok':
					if (args.length < 1) return reply('Cadê o link?')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/tiktok?url=${args[0]}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
                                        await limitAdd(sender)
					break
				case 'audio':
					if (args.length < 1) return reply('Cade o texto?')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
                                        await limitAdd(sender)
					break
                                case 'clearchat':
					if (!isGroupAdmins) return reply('Quem é voce?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Todo o chat foi limpo :)')
					break
				case 'simi':
					if (args.length < 1) return reply('Cade o texto?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('digite 1 para ativar o recurso')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desativando o modo simi com sucesso neste grupo')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Qual a tag de quem voce deseja clonar?')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('FALHA')
					}
					break
                                case 'pubglogo':
                                        var meee = body.slice(10)
                                        var meee1 = meee.split("|")[0];
                                        var meee2 = meee.split("|")[1];
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}pubglogo bacot|ajg')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        meee3 = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${meee1}&text2=${meee2}&apikey=BotWeA`, {method: 'get'})
                                        meee4 = await getBuffer(meee3.result)
                                        client.sendMessage(from, meee4, image, {quoted: mek, caption: 'Nih logonya kak...'})
                                        await limitAdd(sender)
                                        break
                                case 'harrypotter':
                                        const ajg9 = body.slice(13)
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}harrypotter DenzKntd')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        ajgg9 = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=harry_potter&text=${ajg9}&apikey=BotWeA`, {method: 'get'})
                                        ajggg9 = await getBuffer(ajgg9.result)
                                        client.sendMessage(from, ajggg9, image, {quoted: mek, caption: 'Nih kak gambarnya...'})
                                        await limitAdd(sender)
                                        break
                                case 'katabijak':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://arugaz.my.id/api/random/text/katabijak`, {method: 'get'})
                                        reply(anu.result)
                                        await limitAdd(sender)
                                        break
                                case 'faktaunik':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://arugaz.my.id/api/random/text/faktaunik`, {method: 'get'})
                                        reply(anu.result)
                                        await limitAdd(sender)
                                        break
                                case 'fancytext':
                                        var teks1 = body.slice(10)
                                        if (args.length < 1) return reply(`teksnya mana um...\nContoh:\n${prefix}fancytext NazwaCanss`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://arugaz.my.id/api/random/text/fancytext?text=${teks1}`, {method: 'get'})
                                        reply(anu.result)
                                        await limitAdd(sender)
                                        break
                                case 'translate':
                                        aruga = body.slice(10)
                                        lang = aruga.split("|")[0];
                                        teksnya = aruga.split("|")[1];
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (args.length < 1) return reply(`kode bahasanya mana kak?\nContoh: ${prefix}translate en|Hai, aku Nazwa`)
                                        if (args.length < 2) return reply(`teksnya mana kak?\nContoh: ${prefix}translate en|Hai, aku Nazwa`)
                                        anu = await fetchJson(`https://arugaz.my.id/api/edu/translate?lang=${lang}&text=${teksnya}`, {method: 'get'})
                                        arteks = `◪ *TRANSLATE* \n  │\n  ├─ ❏ Texto : ${teksnya} \n  ├─ ❏ Traduçao : ${anu.text} \n  └─ ❏ *Pronúncia* : ${anu.pronunciation}`
                                        client.sendMessage(from, arteks, text)
                                        break
                                case 'tafsirmimpi':
                                        aruga = body.slice(12)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (args.length < 1) return reply(`mimpi apa kak?\nContoh: ${prefix}tafsirmimpi belanja`)
                                        anu = await fetchJson(`https://arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${aruga}`, {method: 'get'})
                                        reply(anu.result.hasil)
                                        break
                                case 'bal':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        const kantong = checkATMuser(sender)
                                        reply(ind.uangkau(pushname, sender, kantong))
                                        break
                                case 'buylimite':
                                        if (args.length < 1) return reply('Qual é o limite que você quer comprar, mana? Certifique-se de ter dinheiro suficiente, mana! \n\nComo verificar dinheiro: ${prefix}bal')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        payout = body.slice(10)
                                        const koinPerlimit = 1000
                                        const total = koinPerlimit * payout
                                        if ( checkATMuser(sender) <= total) return reply(`desculpe, seu dinheiro não é suficiente. por favor colete e compre mais tarde`)
                                        if ( checkATMuser(sender) >= total ) {
                                                confirmATM(sender, total)
                                                bayarLimit(sender, payout)
                                                await reply(`*PAGAMENTO CONCLUIDO*\n\n*remetente* : Admin\n*receptor* : ${pushname}\n*compra nominal* : ${payout} \n *limite de preço* : ${koinPerlimit}/limit\n *o resto do seu dinheiro* : ${checkATMuser(sender)}\n\nprocesso bem sucedido com número de pagamento \n${createSerial(15)}`)
                                        }
                                        break
                                case 'limite':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        checkLimit(sender)
                                        break
                                case 'event':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isOwner) return reply(mess.only.ownerB)
                                        if (args.length < 1) return reply('digite 1 para ativar')
                                        if (Number(args[0]) === 1) {
                                                if (isEventon) return reply('*ATIVADO* !!!')
                                                event.push(from)
                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
                                                reply('*Evento ativo nesse grupo!*')
                                        } else if (Number(args[0]) === 0) {
                                                event.splice(from, 1)
                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
                                                reply('*Evento desativado nesse grupo!*')
                                        } else {
                                                reply(ind.satukos())
                                        }
                                        break
                                case 'rg':
                                        if (isRegister) return  reply(mess.only.daftarB)
                                        if (!q.includes('|')) return  reply(ind.wrongf())
                                        const namaUser = q.substring(0, q.indexOf('|') - 0)
                                        const umurUser = q.substring(q.lastIndexOf('|') + 1)
                                        const serialUser = createSerial(20)
                                        veri = sender
                                        if (isGroup) {
                                                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                                                await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                                        } else {
                                                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                                                await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                                        }
                                        break
                                case 'mining':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                                        if (isOwner) {
                                                const one = 999999999
                                                addLevelingXp(sender, one)
                                                addLevelingLevel(sender, 99)
                                                reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                                        } else {
                                                const mining = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(sender, mining)
                                                await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                                        }
                                        await limitAdd(sender)
                                        break
                                 case 'setname':
                                        if (!isGroup) return reply(ind.groupo())
			                if (!isGroupAdmins) return reply(ind.admin())
			                if (!isBotGroupAdmins) return reply(ind.badmin())
                                        client.groupUpdateSubject(from, `${body.slice(9)}`)
                                        client.sendMessage(from, 'Sucesso, alterar o nome do grupo', text, {quoted: mek})
				        break
                                case 'setdesc':
                                        if (!isGroup) return reply(ind.groupo())
			                if (!isGroupAdmins) return reply(ind.admin())
			         	if (!isBotGroupAdmins) return reply(ind.badmin())
                                        client.groupUpdateDescription(from, `${body.slice(9)}`)
                                        client.sendMessage(from, 'Sucesso, alterar o nome do grupo', text, {quoted: mek})
					break
			        case 'buscanime':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                        if (!isUser) return reply(mess.only.daftarB)
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
         						client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
		      				})
					} else {
						reply('Responda com uma foto')
					}
					break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
