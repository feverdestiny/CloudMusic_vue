import axios from "@/plug/axios/index";

const play = {
  state: {
    artist: {},
    song: {}
  },
  actions: {
    setArtist({ commit }, artist) {
      commit("SET_ARTIST", artist);
    },
    async setSong({ commit }, id) {
      const Res = await axios.get(`/song/detail?ids=${id}`);
      if (Res.code === 200) {
        commit("SET_SONG", Res.songs[0]);
      }
    }
  },
  mutations: {
    SET_ARTIST: (state, artist) => {
      state.artist = artist;
    },
    SET_SONG: (state, song) => {
      state.song = song;
    }
  }
};

export default play;
