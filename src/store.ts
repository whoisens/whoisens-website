import Vue from 'vue';
import Vuex from 'vuex';
import ENS, {EthAddressType, ISetResponse, ISetResponseError} from 'whoisens-lib';

Vue.use(Vuex);

const networkName = 'mainnet';
const networkURL = 'http://eth.gateway.whoisens.org';
const ens = new ENS(networkName, networkURL);

ens.on(ENS.EVENT_SET_RESPONSE, (data: ISetResponse) => {
    store.dispatch('setResponse', data);
});

ens.on(ENS.EVENT_ETH_ADDRESS, (name: string) => {
    store.dispatch('setEthAddress', name);
});

ens.on(ENS.EVENT_ETH_ADDRESS_TYPE, (type: string) => {
    store.dispatch('setEthAddressType', type);
});

interface IState {
    ethAddress: string | undefined;
    ethAddressType: EthAddressType | undefined;

    ownerResult: object | undefined;
    controllerResult: object | undefined;
    expirationDateResult: object | undefined;
    addressResult: object | undefined;
    contentHashResult: object | undefined;
    reverseRecordResult: object | undefined;

    [key: string]: any;
}

function getDefaultState(): IState {
    return {
        ethAddress: undefined,
        ethAddressType: undefined,

        ownerResult: undefined,
        controllerResult: undefined,
        expirationDateResult: undefined,
        addressResult: undefined,
        contentHashResult: undefined,
        reverseRecordResult: undefined
    };
}

const store = new Vuex.Store({
    state: getDefaultState(),

    mutations: {
        setEthAddress(state, address) {
            state.ethAddress = address;
        },

        setEthAddressType(state, type: EthAddressType) {
            state.ethAddressType = type;
        },

        setResponse(state, type: ISetResponse) {
            state[type.resultName] = type.result;
        },

        setResponseError(state, type: ISetResponseError) {
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

        setEthAddress({commit}, name) {
            commit('setEthAddress', name);
        },

        setEthAddressType({commit}, type: EthAddressType) {
            commit('setEthAddressType', type);
        },

        setResponse({commit}, payload: ISetResponse) {
            commit('setResponse', payload);
        },

        setResponseError({commit}, payload: ISetResponseError) {
            commit('setResponseError', payload);
        },

        resetStore({commit}) {
            commit('resetStore');
        }
    }
});

export default store;
