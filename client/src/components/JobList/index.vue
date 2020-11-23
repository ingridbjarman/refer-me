<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <FilterBox />
      </v-col>

      <v-col>
        <v-sheet
          rounded="lg"
          class="mb-3 p-3 mx-auto"
          v-for="job in jobs"
          :key="job.id">
            <Item :job="job" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Item from './Item';
import FilterBox from './FilterBox';

export default {
  name: 'JobList',
  data() {
    return {
      jobs: [{
        id: 1,
        company: {
          name: 'Nu-Voo',
          location: 'Bermondsey',
          size: '1',
          logo: '',
          url: 'https://nu-voo.co.uk',
        },
        jobSpec: {
          position: 'Software engineer',
          description: 'Hello world',
          category: 'Software',
          createdAt: 'now',
          type: 'Contract',
        },
      },
        {
          id: 2,
          company: {
            name: 'Nu-Voo2',
            location: 'Bermondsey2',
            size: '12',
            logo: '',
            url: 'https://nu-voo.co.uk2',
          },
          jobSpec: {
            position: 'Software engineer2',
            description: 'Hello world2',
            category: 'Software2',
            createdAt: 'now',
            type: 'Perm',
          },
        }
      ]
    };
  },
  components: {
    Item,
    FilterBox,
  }
};
</script>

<style scoped>

</style>
