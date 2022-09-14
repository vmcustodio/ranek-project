import { api } from '@/services'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false, // se a pessoa esta logada
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: ""
    }
  },
  getters: {
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload) // combinação de objetos
    }
  },
  actions: {
    getUsuario(context, payload) {
      return api.get(`/usuario/${payload}`).then(response => {
        context.commit("UPDATE_USUARIO", response.data);
        context.commit("UPDATE_LOGIN", true);
      })
    },
    criarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", {id: payload.email})
      return api.post("/usuario", payload)
    }
  },
  modules: {
  }
})
