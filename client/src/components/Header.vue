<template>
  <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-spacer></v-spacer>

        <div v-if="Object.keys(user).length === 0">
            <v-btn 
              text
              @click="$router.push ('create')">
            Create Job
            </v-btn>
            <v-btn 
              text
              @click="$router.push ('signin')">
             Sign in
            </v-btn>
        </div>
        <div v-else>
         <v-btn 
              text
              @click="$router.push ('create')">
            Create Job
            </v-btn>
            <v-btn 
              text
              @click="$router.push ('signout')">
            Sign out
            </v-btn>
        </div>
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar>

        
      </v-container>
    </v-app-bar>
</template>

<script>
export default {
    name: 'Header',
     data: () => ({
      user: {}
    }),
}
</script>