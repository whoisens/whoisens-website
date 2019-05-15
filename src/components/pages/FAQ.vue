<template>
  <div class="cmp-page cmp-page-faq">
    <Header />

    <ul>
      <li>
        <h3>What is ENS</h3>
        <p>
          <a href="https://ens.domains/" rel="noreferrer nofollow" target="_blank"><abbr title="Ethereum Name Service">ENS</abbr></a>
          stands for
          <strong>Ethereum Name Service</strong>
          and used for the same purpose as we have
          <a href="https://en.wikipedia.org/wiki/Domain_Name_System" rel="noreferrer nofollow" target="_blank"><abbr
              title="Domain Name System">DNS</abbr></a>,
          e.g. resolve Domain Name into IP address and vice-versa. In our case it's resolving Ethereum Name into Address
          and vice-versa.
          ENS eliminates the need to copy or type long addresses like <strong>0xff3e70307d0a0...</strong> but instead
          using names, e.g. <strong>whoisens.eth</strong>
        </p>
      </li>

      <li>
        <h3>What for that service?</h3>
        <p>
          It allows you to get information about Ethereum name, like who its owner, expiration date, who can control
          that name, where name is pointed and so on.
          It's like <a href="https://en.wikipedia.org/wiki/WHOIS" rel="nofollow noreferrer" target="_blank">Whois</a>
          and <a
            href="https://en.wikipedia.org/wiki/Domain_Name_System" rel="nofollow noreferrer" target="_blank">DNS</a>
          service in one
          pack.
        </p>
      </li>

      <li>
        <h3>Why I don't see any contact information or who is an owner? Why I can see only addresses?</h3>
        <p>
          Blockchain is anonymous network, everything we have it's address (hash). In Ethereum everything has an
          address.
          Owner has a wallet, and wallet has an address. When owner register a name, that wallet address registered in
          blockchain by <a href="https://en.wikipedia.org/wiki/Smart_contract" rel="nofollow noreferrer"
                           target="_blank">Smart
          Contracts</a>.
          And a person who has access to that wallet - it's an owner.
        </p>
      </li>

      <li>
        <h3>What is Smart Contract?</h3>
        <p>
          It's kind of micro-service (code) that runs in Ethereum network, and makes records into blockchain.
        </p>
      </li>

      <li>
        <h3>What is Resolver?</h3>
        <p>
          It's just a Smart Contract that resolves name, addresses and stores other information.
          It could be public or custom one.
        </p>
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    import Header from '../widgets/Header.vue';

    @Component({
        components: {
            Header
        }
    }) export default class FAQ extends Vue {
    }
</script>

<style lang="scss">
  .cmp-page-faq {
    li {
      margin: 40px 0;

      h3 {
        font-size: 18px;
        margin: 0 0 5px 0;
        font-weight: bold;
      }

      p {
        line-height: 22px;
      }
    }
  }
</style>
