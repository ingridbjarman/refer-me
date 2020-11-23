<template>
    <router-link
        to='/jobpost'>
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                {{job.jobSpec.position}}
                </v-list-item-title>
                <v-list-item-title class="subtitle mb-2">
                {{job.company.name}}, {{job.company.location}}
                </v-list-item-title>
                <v-list-item-subtitle class="mb-1">{{job.jobSpec.description}}</v-list-item-subtitle>
                <div class="overline">
                {{job.jobSpec.createdAt}}
                </div>
            </v-list-item-content>

            <v-list-item-avatar
                size="80"
                color="grey"
            ></v-list-item-avatar>
        </v-list-item>
    </router-link>
</template>

<script>
export default {
    name: 'Item',
    props: {
        job: Object
    }
}
</script>