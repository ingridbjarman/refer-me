<template>
  <v-container>
    <v-sheet
      rounded="lg"
      class="mb-3 pa-4 mx-auto">
      <v-row>
        <v-col>
          <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                Position
                </v-list-item-title>
                <v-list-item-title class="subtitle mb-2">
                Employment type
                </v-list-item-title>
                <v-list-item-subtitle class="mb-1">
                Description
                </v-list-item-subtitle>
              </v-list-item-content>
          </v-list-item>
        </v-col>

        <v-col class="d-flex justify-end">
          <v-col class="d-flex justify-end">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                Company name
                </v-list-item-title>
                <v-list-item-title class="subtitle mb-2">
                  Location, Company size
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>

          <v-col class="d-flex justify-end">
            <v-avatar
                    size="80"
                    color="grey"
                ></v-avatar>
          </v-col>
        </v-col>
      </v-row>

      <v-row>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="subtitle mb-2">
            Job Description:
            </v-list-item-title>
            <v-list-item-subtitle class="mb-1">
            blah blah blah
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-row>

      <v-row>
      <v-col class="d-flex justify-start">
        <div class="overline">
         timestamp
        </div>
      </v-col>
      <v-col class="d-flex justify-end">
       <v-btn>
          Apply
        </v-btn>
      </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "JobPost"
}
</script>