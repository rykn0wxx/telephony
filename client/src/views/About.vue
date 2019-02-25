<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap>
      <v-flex
        xs12
        md8>
        <material-card
          color="blue"
          title="Edit Profile"
          text="Complete your profile">
        </material-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3>
        <material-stats-card
          color="green"
          icon="donut_small"
          title="Revenue"
          value="$34,245"
          sub-icon="calendar_today"
          sub-text="Last 24 Hours"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>
