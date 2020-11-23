<template>
    <v-sheet rounded="lg">
        <v-list>

            <v-list-item>
                <v-text-field
                    label="Job title, keywords, or company"
                    outlined
                    append-icon="mdi-magnify"
                ></v-text-field>
            </v-list-item>

            <v-list-item>
                <v-text-field
                    label="city or postcode"
                    outlined
                    append-icon="mdi-map-marker"
                ></v-text-field>
            </v-list-item>
            
            <v-list-item>
                <v-btn block color="primary">Search</v-btn>
            </v-list-item>

        </v-list>
    </v-sheet>
</template>

<script>
export default {
    name: 'FilterBox',
}
</script>