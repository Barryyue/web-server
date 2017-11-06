const Global = {
	// 设置 cookie  名字 值  过期时长  （不是过期的时间哦）
	setCookie (name, value, t) {
		const time = t || 60 * 60 * 3 * 1000  // 默认三个小时
		const exp = new Date()
		exp.setTime(exp.getTime + time)
		document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
	},

	// 获取cookie
	getCookie (name) {
		let ca = document.cookie.split(';')
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i]
			while (c.charAt(0) === ' ') c = c.substring(1)
			if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
		}
		return ''
	}
}
export default Global
