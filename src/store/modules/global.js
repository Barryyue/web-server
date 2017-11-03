const globalInfo = {
	state: {
		showloading: true
	},
	getters: {
		getShowLoading: state => state.showloading
	},
	mutations: {
		setShowLoading (state, obj) {
			state.showloading = obj.data
		}
	},
	actions: {
		set_ShowLoading ({commit}, obj) {
			commit('setShowLoading', obj)
		}
	}
}

export default globalInfo
