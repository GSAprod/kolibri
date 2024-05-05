<template>

  <AppBarPage
    :title="coreString('localLibraryLabel')"
  >
    <KPageContainer class="container">

      <div>
        <HeaderWithOptions :headerText="coreString('localLibraryLabel')">
          <template #options>
            <KButtonGroup>
              <KButton
                text="New channel"
                style="margin-top: 16px; margin-bottom: -16px;"
                :primary="true"
                @click="() => {}"
              />
            </KButtonGroup>
          </template>
        </HeaderWithOptions>

        <!-- This if condition needs to be updated -->
        <p v-if="!channelsAreInstalled && !channelListLoading">
          {{ $tr('emptyLibraryMessage') }}
        </p>
      </div>

    </KPageContainer>
  </AppBarPage>

</template>


<script>

  import { get } from '@vueuse/core';
  import AppBarPage from 'kolibri.coreVue.components.AppBarPage';
  import { computed, getCurrentInstance } from 'kolibri.lib.vueCompositionApi';
  import commonCoreStrings from 'kolibri.coreVue.mixins.commonCoreStrings';
  import HeaderWithOptions from './HeaderWithOptions';

  export default {
    name: 'LocalLibrary',
    components: {
      AppBarPage,
      HeaderWithOptions,
    },
    mixins: [commonCoreStrings],
    setup() {
      const store = getCurrentInstance().proxy.$store;
      const route = computed(() => store.state.route);
      const query = computed(() => get(route).query);

      const sort = computed(() => query.value.sort);

      return {
        sort,
      };
    },
    computed: {
      //
    },
    methods: {
      //
    },
    $trs: {
      emptyLibraryMessage: {
        message: 'No channels created',
        context:
          'Will display if there are no local channels created in the local library section.',
      },
    },
  };

</script>


<style lang="scss" scoped>

  .container {
    min-height: 450px;
  }

  .selector {
    /deep/ .ui-select-label-text {
      padding: 10px 10px 0;
    }

    /deep/ .ui-select-display {
      padding: 0 10px;
    }
  }

  th {
    text-align: left;
  }

  td {
    text-align: right;
  }

  th,
  td {
    height: 2em;
    padding-right: 24px;
    font-size: 14px;
  }

</style>
  