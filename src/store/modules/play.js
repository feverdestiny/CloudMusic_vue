const play = {
    state: {
        artist: {},
        song: {}
    },
    actions: {
        setArtist({commit},artist) {
            commit('SET_ARTIST',artist)
        },
        setSong({commit},song) {
            commit('SET_SONG',song)
        },
    },
    mutations: {
        SET_ARTIST: (state, artist) => {
            state.artist = artist
        },
        SET_SONG: (state, song) => {
            state.song = song
        }

    }
}

export default play
