import Vue from 'vue';
import Vuex from 'vuex';
import {ENS, EthNameType, SetResponse, SetResponseError, Response} from 'whoisens-lib';

Vue.use(Vuex);

const ens = new ENS();

ens.on('setResponse', (data: SetResponse) => {
    store.dispatch('setResponse', data);
});

ens.on('ethName', (name: string) => {
    store.dispatch('setEthName', name);
});

ens.on('ethNameType', (type: string) => {
    store.dispatch('setEthNameType', type);
});

interface IState {
    ethNameType: EthNameType | undefined;
    ethName: string | undefined;

    nameOwnerResult: object | undefined;
    registrarOwnerResult: object | undefined;
    registrarExpired: object | undefined;
    resolverAddress: object | undefined;
    resolverContentHash: object | undefined;
    revertResolverResult: object | undefined;

    [key: string]: any;
}

function getDefaultState(): IState {
    return {
        ethNameType: undefined,
        ethName: undefined,

        nameOwnerResult: undefined,
        registrarOwnerResult: undefined,
        registrarExpired: undefined,
        resolverAddress: undefined,
        resolverContentHash: undefined,
        revertResolverResult: undefined
    };
}

const store = new Vuex.Store({
    state: getDefaultState(),

    mutations: {
        setEthName(state, name) {
            state.ethName = name;
        },

        setEthNameType(state, type: EthNameType) {
            state.ethNameType = type;
        },

        setResponse(state, type: SetResponse) {
            state[type.resultName] = type.result;
        },

        setResponseError(state, type: SetResponseError) {
            state[type.resultName] = type.error;
        },

        resetStore(state) {
            Object.assign(state, getDefaultState());
        }
    },

    actions: {
        async getInfoForEthName({commit}, name) {
            commit('resetStore');
            await ens.init(name);
            await ens.getInfo();
        },

        setEthName({commit}, name) {
            commit('setEthName', name);
        },

        setEthNameType({commit}, type: EthNameType) {
            commit('setEthNameType', type);
        },

        setResponse({commit}, payload: SetResponse) {
            commit('setResponse', payload);
        },

        setResponseError({commit}, payload: SetResponseError) {
            commit('setResponseError', payload);
        },

        resetStore({commit}) {
            commit('resetStore');
        }
    }
});

export default store;
